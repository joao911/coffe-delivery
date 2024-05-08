import React from "react";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export const DefaultLayout: React.FC = () => {
  return (
    <header className="flex justify-between px-40 py-8">
      <img src={coffeeLogoImg} alt="" />
      <div className="flex gap-4">
        <div className="flex items-center justify-center px-2 py-1 rounded-md bg-brand-purple-light text-brand-purple-dark">
          <MapPin size={22} weight="fill" />
          <span>Grajaú, SP</span>
        </div>
        <div className="relative flex items-center justify-center px-2 py-1 rounded-md bg-brand-yellow-light text-brand-yellow-dark">
          <ShoppingCart size={22} weight="fill" />
          <span className="absolute px-1 rounded-full top-[-11px] right-[-8px]  bg-brand-yellow-dark text-brand-yellow-light text-center size-3 w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </header>
  );
};
