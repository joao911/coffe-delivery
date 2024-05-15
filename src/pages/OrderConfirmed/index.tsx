import React, { useEffect, useMemo } from "react";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import ContainerItem from "../../components/ContainerItem";
import { InfoIcon } from "./components/InfoIcon";
import OrderConfirmedImg from "../../assets/confirmed-order.svg";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store";

export const OrderConfirmed: React.FC = () => {
  const navigate = useNavigate();
  const { address } = useStore();

  useEffect(() => {
    console.log("address", address);
  }, [address]);

  const paymentMethod = useMemo(() => {
    switch (address.paymentMethod) {
      case "credit":
        return "Cartão de Crediário";
      case "debit":
        return "Cartão de Debito";
      case "money":
        return "Dinheiro";
      default:
        return "Cartão de crédito";
    }
  }, [address.paymentMethod]);
  return (
    <ContainerItem>
      <div className="flex flex-col gap-10 mt-1 px-9 md:mt-20">
        <div>
          <h1 className="font-extrabold text-title-title-l text-brand-yellow-dark">
            Uhu! Pedido confirmado
          </h1>
          <p className="font-normal text-base-subtitle text-title-title-xs leading-[130%]">
            Agora é só aguardar que logo o café chegará até você
          </p>
        </div>
        <section className="flex flex-col items-center justify-between md:flex-row">
          <div className="p-3 md:p-10 rounded-br-[36px] rounded-tl-[36px] rounded-tr-[6px] rounded-bl-[6px] relative bg-base-background w-full md:min-w-[32rem] flex flex-col gap-8 before:content-[''] before:absolute before:inset-[-1px] before:z-[-1] before:rounded-br-[36px] before:rounded-tl-[36px] before:rounded-tr-[6px] before:rounded-bl-[6px] before:bg-[linear-gradient(102.89deg,#dbac2c_2.61%,#8047f8_98.76%)]">
            <InfoIcon
              color="#8047F8"
              icon={<MapPin weight="fill" className="text-base-white" />}
              text={
                <p className="text-base-text">
                  Entrega em{" "}
                  <strong>
                    {address?.street}, {address?.number}
                  </strong>
                  <br />
                  {address?.neighborhood} - {address?.city}, {address?.state}
                </p>
              }
            />
            <InfoIcon
              color="#DBAC2C"
              icon={<Clock weight="fill" className="text-base-white" />}
              text={
                <p className="text-base-text">
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </p>
              }
            />
            <InfoIcon
              color="#C47F17"
              icon={
                <CurrencyDollar weight="fill" className="text-base-white" />
              }
              text={
                <p className="text-base-text">
                  Pagamento na entrega
                  <br />
                  <strong>{paymentMethod}</strong>
                </p>
              }
            />
          </div>
          <img src={OrderConfirmedImg} alt="Pedido confirmado com sucesso" />
          <button
            onClick={() => navigate("/")}
            className="w-full h-[2.812rem] font-bold rounded-md bg-brand-yellow text-base-white hover:bg-brand-yellow-dark mt-6 block md:hidden"
          >
            Retornar para Home
          </button>
        </section>
      </div>
    </ContainerItem>
  );
};
