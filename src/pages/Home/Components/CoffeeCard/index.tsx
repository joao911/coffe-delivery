import React, { useMemo, useState } from "react";
import { ShoppingCart } from "phosphor-react";
import { map } from "lodash";
import { useStore } from "../../../../store";
import { formatMoney } from "../../../../ultils";

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
  const addToCart = useStore((state) => state.addToCart);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveFromCart = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  function handleAddToCartWithQuantity() {
    addToCart({ ...coffee, quantity });
  }

  const price = useMemo(() => {
    return formatMoney(coffee.price * quantity);
  }, [coffee.price, quantity]);

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
            {price}
          </strong>
        </div>
        <div className="flex items-center flex-1 gap-2 ">
          <div className="flex items-center justify-between flex-1 gap-1 p-2 rounded-md bg-base-button">
            <button
              onClick={handleRemoveFromCart}
              className="text-brand-purple"
            >
              -
            </button>
            <input
              type="text"
              name=""
              id=""
              value={quantity}
              disabled
              className="w-3"
            />
            <button onClick={handleAddToCart} className="text-brand-purple">
              +
            </button>
          </div>
          <button
            onClick={handleAddToCartWithQuantity}
            className="flex items-center justify-center w-8 h-8 rounded-md bg-brand-purple-dark text-base-card"
          >
            <ShoppingCart weight="fill" size={19} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};
