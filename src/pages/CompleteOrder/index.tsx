import React, { useEffect } from "react";
import { MapPinLine } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { Input } from "../../components/Input";
import { Container } from "../../components/ContainerItem/styles";

export const CompleteOrder: React.FC = () => {
  const schema = zod.object({
    cep: zod.string().min(1, "CEP obrigatório"),
    street: zod.string().min(1, "Rua obrigatória"),
    number: zod.string().min(1, "Número obrigatório"),
    complement: zod.string(),
    neighborhood: zod.string().min(1, "Bairro obrigatório"),
    city: zod.string().min(1, "Cidade obrigatória"),
    state: zod.string().min(1, "Estado obrigatório"),
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
    },
  });

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = purchasingForm;

  function onSubmit(data: NewCycleFormData) {
    console.log(data);
    reset();
  }

  useEffect(() => {
    console.log("erros", errors.street?.message);
  }, [errors]);
  return (
    <Container>
      <h1 className="font-extrabold text-title-title-l">Complete seu pedido</h1>
      <div className="p-[1.87rem] bg-base-card rounded-md mt-2">
        <div className="flex gap-2 mb-8">
          <MapPinLine size={22} className="text-brand-yellow-dark" />
          <div>
            <span>Endereço de entrega</span>
            <p className="text-base-text">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <FormProvider {...purchasingForm}>
            <Input placeholder="CEP" type="text" {...register("cep")} />
            <Input placeholder="Rua" {...register("street")} />
            <div>
              <Input placeholder="Número" {...register("number")} />
              <Input placeholder="Complemento" {...register("complement")} />
            </div>
            <div>
              <Input placeholder="Bairro" {...register("neighborhood")} />
              <Input placeholder="Cidade" {...register("city")} />
              <Input placeholder="UF" {...register("state")} />
            </div>
          </FormProvider>

          <button type="submit">Adicionar</button>
        </form>
      </div>
    </Container>
  );
};
