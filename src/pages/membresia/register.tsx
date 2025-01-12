import React from "react";
import Header from "../../components/Membership/Headerv2";
import Register from "../../components/Membership/Register/Form";

export default function register() {
  return (
    <>
      <div className="bg-cream w-full h-12 lg:h-20">
        <Header noTransaparent />
      </div>
      <div className="h-full lg:py-10 py-6 px-3 lg:px-24 flex justify-center">
        <Register nextRoute="/membresia/pago" />
      </div>
    </>
  );
}
