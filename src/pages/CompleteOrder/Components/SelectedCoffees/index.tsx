import React from "react";
import { SelectedItems } from "../SelectedItems";
import { TotalItems } from "../TotalItems";

export const SelectedCoffees: React.FC = () => {
  return (
    <div className="min-w-[28rem] ">
      <h1 className="font-extrabold text-title-title-l">Cafés selecionados</h1>
      <div className="p-7 bg-base-card rounded-bl-[36px] rounded-tr-[36px] rounded-tl-[6px] rounded-br-[6px] mt-4">
        <SelectedItems />
        <div>
          <TotalItems title="Total de itens" subtitle="R$ 29,70" />
          <TotalItems title="Entrega" subtitle="R$ 3,70" />
          <TotalItems hasTitle title="Total" subtitle="R$ 3,70" />
        </div>
        <button className="w-full h-[2.812rem] font-bold rounded-md bg-brand-yellow text-base-white hover:bg-brand-yellow-dark mt-6">
          CONFIRMAR PEDIDO
        </button>
      </div>
    </div>
  );
};
