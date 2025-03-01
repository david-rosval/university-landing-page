import { type MetaFunction } from "@remix-run/react";
import Hero from "~/components/hero/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Universidad de la calle" },
    { name: "description", content: "This is a demo of a landing page for an university" },
  ];
};

export default function Index() {
  
  return (
    <div className="bg-slate-300  px-40">
      <Hero />
    </div>
  );
}

