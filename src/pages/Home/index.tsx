import React from "react";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

import ContainerItem from "../../components/ContainerItem";
import { IconInfo } from "../../components/IconInfo";
import CoffeImage from "../../assets/intro-img.png";
import OurCoffees from "./Components/OurCoffees";

export const Home: React.FC = () => {
  return (
    <div className="mb-36">
      <section className="w-full h-80 md:h-[34rem] md:flex items-center justify-center bg-[url('/src/assets/intro-background.png')] bg-no-repeat bg-cover">
        <ContainerItem>
          <div className="items-center justify-between w-full px-10 md:flex md:p-0">
            <div>
              <h1 className="font-extrabold text-text-base md:text-title-title-xl">
                Encontre o café perfeito para qualquer hora do dia
              </h1>
              <h3 className="md:text-title-title-l text-base-subtitle">
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </h3>

              <div className="grid md:grid-cols-2 gap-4 justify-items-start mt-[3.37rem]">
                <IconInfo
                  icon={
                    <ShoppingCart
                      weight="fill"
                      size={19}
                      className="text-white"
                    />
                  }
                  bgColor="brand-yellow-dark"
                  text="Compra simples e segura"
                />
                <IconInfo
                  icon={
                    <Timer weight="fill" size={19} className="text-white" />
                  }
                  bgColor="brand-yellow"
                  text="Entrega rápida e rastreada"
                />
                <IconInfo
                  icon={
                    <Package weight="fill" size={19} className="text-white" />
                  }
                  bgColor="base-text"
                  text="Embalagem mantém o cafe intacto"
                />
                <IconInfo
                  icon={
                    <Coffee weight="fill" size={19} className="text-white" />
                  }
                  bgColor="brand-purple"
                  text="O café chega fresquinho até você"
                />
              </div>
            </div>
            <img
              src={CoffeImage}
              alt="Seu cafe fresquinho"
              className="hidden md:block"
            />
          </div>
        </ContainerItem>
      </section>
      <OurCoffees />
    </div>
  );
};
