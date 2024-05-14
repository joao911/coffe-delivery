import React from "react";
import { map } from "lodash";
import ContainerItem from "../../../../components/ContainerItem";
import { CoffeeCard } from "../CoffeeCard";
import { coffees } from "../../../../data/coffees";

const OurCoffees: React.FC = () => {
  return (
    <ContainerItem>
      <section className="w-full px-10 mt-2">
        <h1 className="font-extrabold text-title-title-l">Nossos cafés</h1>
        <div className="grid md:grid-cols-4 gap-6 mt-[3.5rem]">
          {map(coffees, (coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </section>
    </ContainerItem>
  );
};

export default OurCoffees;
