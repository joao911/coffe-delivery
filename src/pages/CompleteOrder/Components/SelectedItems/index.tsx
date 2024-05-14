import { Trash } from "phosphor-react";
import React, { useMemo } from "react";
import { CartItem } from "../../../../store/types";
import { useStore } from "../../../../store";
import { formatMoney } from "../../../../ultils";

interface SelectedItemsProps {
  coffee: CartItem;
}
export const SelectedItems: React.FC<SelectedItemsProps> = ({ coffee }) => {
  const handleIncrementeItem = useStore((state) => state.increaseQuantity);
  const handleDecrementItem = useStore((state) => state.decreaseQuantity);
  const handleRemoveItem = useStore((state) => state.removeFromCart);

  const totalPrice = useMemo(() => {
    return formatMoney(coffee.price * coffee.quantity);
  }, [coffee.price, coffee.quantity]);

  return (
    <div className="flex justify-between pb-4 mb-6 border-b border-base-button">
      <img
        src={`/coffees/${coffee.photo}`}
        alt="Nossos cafés"
        className="h-[5.46rem]"
      />
      <div>
        <p className="mb-1 text-base-text">{coffee.name}</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between gap-2 px-2 py-1 rounded-md bg-base-button  text-[0.875rem]">
            <span
              onClick={() => handleDecrementItem(coffee.id)}
              className="flex items-center justify-center cursor-pointer text-brand-purple"
            >
              -
            </span>
            <p>{coffee.quantity}</p>
            <span
              onClick={() => handleIncrementeItem(coffee.id)}
              className="flex items-center justify-center cursor-pointer text-brand-purple"
            >
              +
            </span>
          </div>
          <div
            onClick={() => handleRemoveItem(coffee.id)}
            className="flex items-center gap-2 px-1 py-1 rounded-md cursor-pointer bg-base-button hover:bg-base-hover"
          >
            <Trash size={19} className="text-brand-purple" />
            <p className="text-base-label text-[0.875rem]">REMOVER</p>
          </div>
        </div>
      </div>
      <p className="font-bold text-base-text">R$ {totalPrice}</p>
    </div>
  );
};
