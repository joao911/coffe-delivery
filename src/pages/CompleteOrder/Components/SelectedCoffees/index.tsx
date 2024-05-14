import React, { useMemo } from "react";
import { SelectedItems } from "../SelectedItems";
import { TotalItems } from "../TotalItems";
import { useStore } from "../../../../store";
import { map, reduce } from "lodash";
import { formatMoney } from "../../../../ultils";

export const SelectedCoffees: React.FC = () => {
  const { cart } = useStore();

  const total = useMemo(() => {
    return reduce(
      cart,
      (sum, item) => {
        return sum + Number(item.price) * item.quantity;
      },
      0
    );
  }, [cart]);

  return (
    <div className="min-w-[28rem] ">
      <h1 className="font-extrabold text-title-title-l">Cafés selecionados</h1>
      <div className="p-7 bg-base-card rounded-bl-[36px] rounded-tr-[36px] rounded-tl-[6px] rounded-br-[6px] mt-4">
        {map(cart, (item) => (
          <SelectedItems key={item.id} coffee={item} />
        ))}
        <div>
          <TotalItems
            title="Total de itens"
            subtitle={`R$ ${formatMoney(total)}`}
          />
          <TotalItems title="Entrega" subtitle="R$ 3,70" />
          <TotalItems
            hasTitle
            title="Total"
            subtitle={`R$ ${formatMoney(total + 3.7)}`}
          />
        </div>
        <button className="w-full h-[2.812rem] font-bold rounded-md bg-brand-yellow text-base-white hover:bg-brand-yellow-dark mt-6">
          CONFIRMAR PEDIDO
        </button>
      </div>
    </div>
  );
};
