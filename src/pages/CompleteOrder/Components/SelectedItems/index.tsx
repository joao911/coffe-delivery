import { Trash } from "phosphor-react";
import React from "react";

export const SelectedItems: React.FC = () => {
  return (
    <div className="flex justify-between pb-4 mb-6 border-b border-base-button">
      <img
        src="/coffees/americano.png"
        alt="Nossos cafés"
        className="h-[5.46rem]"
      />
      <div>
        <p className="mb-1 text-base-text">Expresso tradicional</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between gap-2 px-2 py-1 rounded-md bg-base-button  text-[0.875rem]">
            <button className="flex items-center justify-center text-brand-purple hover:bg-base-hover">
              -
            </button>
            <p>1</p>
            <button className="flex items-center justify-center text-brand-purple hover:bg-base-hover">
              +
            </button>
          </div>
          <div className="flex items-center gap-2 px-1 py-1 rounded-md cursor-pointer bg-base-button hover:bg-base-hover">
            <Trash size={19} className="text-brand-purple" />
            <p className="text-base-label text-[0.875rem]">REMOVER</p>
          </div>
        </div>
      </div>
      <p className="font-bold text-base-text">R$ 9,90</p>
    </div>
  );
};
