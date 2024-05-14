import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { MapPinLine } from "phosphor-react";

const AddressForm: React.FC = () => {
  const { control } = useFormContext();

  return (
    <div className="p-[1.87rem] bg-base-card rounded-md">
      <div className="flex gap-2 mb-8">
        <MapPinLine size={22} className="text-brand-yellow-dark" />
        <div>
          <span>Endereço de entrega</span>
          <p className="text-base-text">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>
      <Controller
        name="cep"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="CEP"
            type="text"
            onChange={onChange}
            value={value}
            name="cep"
          />
        )}
      />

      <Controller
        name="street"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Rua"
            type="text"
            onChange={onChange}
            value={value}
            name="street"
            width={37.2}
          />
        )}
      />

      <div className="flex flex-col gap-4 md:flex-row">
        <Controller
          name="number"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Número"
              type="text"
              onChange={onChange}
              value={value}
              name="number"
            />
          )}
        />
        <Controller
          name="complement"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Complemento"
              type="text"
              onChange={onChange}
              value={value}
              name="complement"
              width={40}
            />
          )}
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <Controller
          name="neighborhood"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Bairro"
              type="text"
              onChange={onChange}
              value={value}
              name="neighborhood"
            />
          )}
        />{" "}
        <Controller
          name="city"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Cidade"
              type="text"
              onChange={onChange}
              value={value}
              name="city"
              width={40}
            />
          )}
        />{" "}
        <Controller
          name="state"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="UF"
              type="text"
              onChange={onChange}
              value={value}
              name="state"
              width={3}
            />
          )}
        />
      </div>
    </div>
  );
};

export default AddressForm;
