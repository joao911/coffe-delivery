import React from "react";
import { SelectedItems } from "../SelectedItems";
import { TotalItems } from "../TotalItems";

export const SelectedCoffees: React.FC = () => {
  return (
    <div className="min-w-[28rem] ">
      <h1 className="font-extrabold text-title-title-l">Cafés selecionados</h1>

      <SelectedItems />
      <div>
        <TotalItems title="Total de itens" subtitle="R$ 29,70" />
        <TotalItems title="Entrega" subtitle="R$ 3,70" />
        <TotalItems hasTitle title="Total" subtitle="R$ 3,70" />
      </div>
    </div>
  );
};