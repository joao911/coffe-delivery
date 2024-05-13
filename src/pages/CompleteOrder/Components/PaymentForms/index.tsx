import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Bank, CreditCard, CurrencyDollarSimple, Money } from "phosphor-react";
import Button from "../Button";
import { toString } from "lodash";

interface PaymentFormsProps {
  name: string;
}

export const PaymentForms: React.FC<PaymentFormsProps> = ({ name }) => {
  const {
    formState: { errors },
    control,
  } = useFormContext();

  const error = errors[name]?.message;
  return (
    <div className=" rounded-md bg-base-card p-[1.87rem]">
      <div className="flex gap-2 mb-8">
        <CurrencyDollarSimple size={22} className="text-brand-purple" />

        <div>
          <span className="p-0">Pagamento</span>
          <p className="text-base-text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <Controller
        name="paymentMethod"
        control={control}
        render={({ field }) => (
          <div className="flex flex-col gap-4 md:flex-row">
            <Button
              icon={<CreditCard size={20} className="text-brand-purple" />}
              name="Cartão de Crédito"
              onClick={() => field.onChange("creditCard")}
            />
            <Button
              icon={<Bank size={20} className="text-brand-purple" />}
              name="Cartão de Débito"
              onClick={() => field.onChange("debitCard")}
            />
            <Button
              icon={<Money size={20} className="text-brand-purple" />}
              name="Dinheiro"
              onClick={() => field.onChange("cash")}
            />
          </div>
        )}
      />
      <p className="mt-1 text-xs text-base-error">{toString(error)}</p>
    </div>
  );
};
