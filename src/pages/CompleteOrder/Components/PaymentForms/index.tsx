import React from "react";
import { useFormContext } from "react-hook-form";
import { Bank, CreditCard, CurrencyDollarSimple, Money } from "phosphor-react";
import { PaymentMethodInput } from "../Button";
import { toString } from "lodash";

interface PaymentFormsProps {
  name: string;
}

const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export const PaymentForms: React.FC<PaymentFormsProps> = ({ name }) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const error = errors[name]?.message;
  return (
    <div className=" rounded-md bg-base-card p-[1.87rem]">
      <div className="flex gap-2">
        <CurrencyDollarSimple size={22} className="text-brand-purple" />

        <div>
          <span className="p-0">Pagamento</span>
          <p className="text-base-text">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 ">
        <div className="flex flex-col w-full gap-4 md:flex-row">
          {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
            <PaymentMethodInput
              key={label}
              id={key}
              icon={icon}
              label={label}
              value={key}
              {...register("paymentMethod")}
            />
          ))}
        </div>
        <p className="text-xs mt-7 text-base-error">{toString(error)}</p>
      </div>
      <button className="w-full h-[2.812rem] font-bold rounded-md bg-brand-yellow text-base-white hover:bg-brand-yellow-dark mt-6 block md:hidden">
        CONFIRMAR PEDIDO
      </button>
    </div>
  );
};
