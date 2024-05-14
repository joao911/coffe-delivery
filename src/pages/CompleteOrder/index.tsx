import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Container } from "../../components/ContainerItem/styles";
import { size } from "lodash";
import { api } from "../../api";
import { PaymentForms } from "./Components/PaymentForms";
import AddressForm from "./Components/AddressForm";
import { SelectedCoffees } from "./Components/SelectedCoffees";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}
export const CompleteOrder: React.FC = () => {
  const schema = zod.object({
    cep: zod.string().min(1, "CEP obrigatório"),
    street: zod.string().min(1, "Rua obrigatória"),
    number: zod.string().min(1, "Número obrigatório"),
    complement: zod.string(),
    neighborhood: zod.string().min(1, "Bairro obrigatório"),
    city: zod.string().min(1, "Cidade obrigatória"),
    state: zod.string().min(1, "Estado obrigatório"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
      errorMap: () => {
        return { message: "Informe o método de pagamento" };
      },
    }),
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
      paymentMethod: undefined,
    },
  });

  const { handleSubmit, reset, watch, setValue } = purchasingForm;

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
      <div className="mt-2 rounded-md ">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 md:flex-row"
        >
          <FormProvider {...purchasingForm}>
            <div className="flex flex-col gap-4">
              <h1 className="font-extrabold text-title-title-l">
                Complete seu pedido
              </h1>
              <AddressForm />
              <PaymentForms name="paymentMethod" />
            </div>
            <SelectedCoffees />
          </FormProvider>
        </form>
      </div>
    </Container>
  );
};
