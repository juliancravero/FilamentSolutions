import React from "react";
import ShippingToInfo from "./shipping-info";
import ShippingMethod from "./shipping-method";
import { getExistData } from "@/app/lib/actions";

async function Shipping() {
  const basketInformation = await getExistData("basket_information");
  const shippingMethod = await getExistData("shipping_method");
  const data = [
    {
      id: 1,
      title: "Email",
      value: basketInformation?.email,
      changeLink: "carrito",
    },
    {
      id: 2,
      title: "Adres",
      value: basketInformation?.address,
      changeLink: "carrito",
    },
  ];
  return (
    <div className="p-4 lg:px-6 max-w-screen-xl mx-auto sm:w-full">
      <ShippingToInfo data={data} />
      <ShippingMethod data={shippingMethod?.method} />
    </div>
  );
}

export default Shipping;
