import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { toast } from "react-toastify";

import { Container } from "../../components/ContainerItem/styles";
import { size } from "lodash";
import { api } from "../../api";
import { PaymentForms } from "./Components/PaymentForms";
import AddressForm from "./Components/AddressForm";
import { SelectedCoffees } from "./Components/SelectedCoffees";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}
export const CompleteOrder: React.FC = () => {
  const navigate = useNavigate();
  const clearCart = useStore((state) => state.clearCart);
  const setAddress = useStore((state) => state.setAddress);
  const { cart } = useStore();

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
    if (!size(cart)) {
      toast.error(
        "Seu carrinho esta vazio, adicione itens para finalizar a compra"
      );
      return;
    } else {
      setAddress(data);
      reset();
      navigate("/orderConfirmed");
      clearCart();
    }
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
          className="flex flex-col gap-4 px-8 pb-8 md:flex-row md:px-0"
        >
          <FormProvider {...purchasingForm}>
            <div className="flex flex-col gap-4">
              <h1 className="ml-8 font-extrabold text-title-title-l md:ml-0">
                Complete seu pedido
              </h1>
              <div className="block md:hidden">
                <SelectedCoffees />
              </div>
              <AddressForm />
              <PaymentForms name="paymentMethod" />
            </div>
            <div className="hidden md:block">
              <SelectedCoffees />
            </div>
          </FormProvider>
        </form>
      </div>
    </Container>
  );
};
