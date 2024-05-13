import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";

const AddressForm: React.FC = () => {
  const { control } = useFormContext();

  return (
    <div className="p-[1.87rem] bg-base-card rounded-md">
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
            width="full"
          />
        )}
      />

      <div className="flex">
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
            />
          )}
        />
      </div>
      <div>
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
            />
          )}
        />
      </div>
    </div>
  );
};

export default AddressForm;
