import React from "react";
import { MapPin, ShoppingCart } from "phosphor-react";
import coffeeLogoImg from "../../assets/coffee-delivery-logo.svg";
import ContainerItem from "../ContainerItem";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
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
            <div className="flex items-center justify-center px-2 py-1 rounded-md bg-brand-purple-light text-brand-purple-dark">
              <MapPin size={22} weight="fill" />
              <span>Grajaú, SP</span>
            </div>
            <div className="relative flex items-center justify-center px-2 py-1 rounded-md bg-brand-yellow-light text-brand-yellow-dark">
              <Link to="completeOrder">
                <ShoppingCart size={22} weight="fill" />
                <span className="absolute px-1 rounded-full top-[-11px] right-[-8px]  bg-brand-yellow-dark text-brand-yellow-light text-center size-3 w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </ContainerItem>
    </header>
  );
};
