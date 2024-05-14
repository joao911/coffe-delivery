import { InputHTMLAttributes, ReactNode, forwardRef } from "react";
import { Container } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <Container className="w-full">
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id} className="bg-red-500">
        <div className="flex items-center justify-center h-12 gap-3 px-4 py-0 text-xs uppercase border-2 rounded-md cursor-pointer bg-base-button text-base-text border-base-button transition-duration:400ms">
          {icon}
          {label}
        </div>
      </label>
    </Container>
  );
});
