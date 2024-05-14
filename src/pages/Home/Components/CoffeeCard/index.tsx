import React from "react";
import { ShoppingCart } from "phosphor-react";
import { map } from "lodash";

interface CoffeeCardProps {
  coffee: {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
  };
}
export const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  return (
    <div className="flex flex-col items-center justify-center pt-0 p-6 bg-base-card rounded-br-[36px] rounded-tl-[36px] rounded-tr-[6px] rounded-bl-[6px] ">
      <img
        src={`/coffees/${coffee.photo}`}
        alt="Nossos cafés"
        className="mt-[-1.25rem]"
      />
      <div className="flex items-center justify-center gap-2">
        {map(coffee.tags, (tag) => (
          <div
            key={tag}
            className="flex items-center justify-center py-[0.25rem] px-[0.5rem] mt-4 rounded-3xl bg-brand-yellow-light text-brand-yellow-dark mb-5"
          >
            <p className="text-[0.625rem] font-bold uppercase">{tag}</p>
          </div>
        ))}
      </div>

      <h1 className="font-extrabold text-title-title-m">{coffee.name}</h1>
      <p className="text-base-label text-[0.875rem] mb-8">
        {coffee.description}
      </p>
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-2">
          <p className="tex-base-text text-[0.875rem] font-normal">R$</p>
          <strong className="text-base-text text-[1.5rem]  font-extrabold">
            {coffee.price.toFixed(2)}
          </strong>
        </div>
        <div className="flex items-center flex-1 gap-2 ">
          <div className="flex items-center justify-between flex-1 gap-1 p-2 rounded-md bg-base-button">
            <button className="text-brand-purple">-</button>
            <input
              type="text"
              name=""
              id=""
              value={"1"}
              disabled
              className="w-3"
            />
            <button className="text-brand-purple">+</button>
          </div>
          <button className="flex items-center justify-center w-8 h-8 rounded-md bg-brand-purple-dark text-base-card">
            <ShoppingCart weight="fill" size={19} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
