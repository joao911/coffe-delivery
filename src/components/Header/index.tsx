import React from "react";
import { MapPin, ShoppingCart } from "phosphor-react";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import ContainerItem from "../ContainerItem";
import { Link } from "react-router-dom";
import { useStore } from "../../store";
import { size } from "lodash";

export const Header: React.FC = () => {
  const { cart } = useStore();

  return (
    <header className=" px-10 py-4 md:px-40 md:py-8 bg-white w-max-[70rem]">
      <ContainerItem>
        <div className="flex justify-between">
          <Link to="/">
            <button>
              <img src={coffeeLogoImg} alt="" />
            </button>
          </Link>
          <div className="flex gap-4">
            <div className="flex items-center justify-center h-[2.3rem] bg-brand-purple-light text-brand-purple-dark rounded-md  p-[0.5rem]">
              <MapPin size={22} weight="fill" />
              <span className="p-0 m-0">Grajaú, SP</span>
            </div>
            <div className="relative flex items-center justify-center p-[0.5rem] h-[2.3rem] rounded-md bg-brand-yellow-light text-brand-yellow-dark">
              <Link to="completeOrder">
                <ShoppingCart size={22} weight="fill" />
                <span className="absolute px-1 rounded-full top-[-11px] right-[-8px]  bg-brand-yellow-dark text-brand-yellow-light text-center size-3 w-4 h-4 flex items-center justify-center text-[12px]">
                  {size(cart)}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </ContainerItem>
    </header>
  );
};
