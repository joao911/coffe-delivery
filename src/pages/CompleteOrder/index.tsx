import React, { useEffect } from "react";
import { MapPinLine } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Container } from "../../components/ContainerItem/styles";
import { size } from "lodash";
import { api } from "../../api";
import { PaymentForms } from "./Components/PaymentForms";
import AddressForm from "./Components/AddressForm";

export const CompleteOrder: React.FC = () => {
  const schema = zod.object({
    cep: zod.string().min(1, "CEP obrigatório"),
    street: zod.string().min(1, "Rua obrigatória"),
    number: zod.string().min(1, "Número obrigatório"),
    complement: zod.string(),
    neighborhood: zod.string().min(1, "Bairro obrigatório"),
    city: zod.string().min(1, "Cidade obrigatória"),
    state: zod.string().min(1, "Estado obrigatório"),
    paymentMethod: zod.string().nonempty("Escolha a forma de pagamento"),
  });

  type NewCycleFormData = zod.infer<typeof schema>;

  const purchasingForm = useForm<NewCycleFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      paymentMethod: "",
    },
  });

  const {
    handleSubmit,
    reset,

    watch,
    setValue,
  } = purchasingForm;

  function onSubmit(data: NewCycleFormData) {
    console.log(data);
    reset();
  }
  const watchCep = watch("cep");

  async function searchCep(cep: string) {
    try {
      const response = await api.get(`${cep}/json`);
      setValue("street", response.data.logradouro);
      setValue("city", response.data.localidade);
      setValue("state", response.data.uf);
      setValue("neighborhood", response.data.bairro);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (size(watchCep) === 8) {
      searchCep(watchCep);
    }
  }, [watchCep]);

  return (
    <Container>
      <h1 className="font-extrabold text-title-title-l">Complete seu pedido</h1>
      <div className="mt-2 rounded-md ">
        <div className="flex gap-2 mb-8">
          <MapPinLine size={22} className="text-brand-yellow-dark" />
          <div>
            <span>Endereço de entrega</span>
            <p className="text-base-text">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 "
        >
          <FormProvider {...purchasingForm}>
            <AddressForm />
            <PaymentForms name="paymentMethod" />
          </FormProvider>

          <button type="submit">Adicionar</button>
        </form>
      </div>
    </Container>
  );
};
