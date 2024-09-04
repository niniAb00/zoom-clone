import CallList from "@/components/ui/CallList";
import React from "react";

const Pervious = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Pervious</h1>

      <CallList type="ended" />
    </section>
  );
};

export default Pervious;
