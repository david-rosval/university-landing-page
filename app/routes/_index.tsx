import { type MetaFunction } from "@remix-run/react";
import Hero from "~/components/hero/Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  
  return (
    <div className="bg-slate-300">
      <Hero />
    </div>
  );
}

