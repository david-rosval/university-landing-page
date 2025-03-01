import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import { titulos } from "../../consts";

export default function CyclingText({ name }: {name: string}) {
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.span
        key={name}
        initial={{ top: 15,opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        exit={{ top: -15, opacity: 0 }}
        
        className={clsx("relative uppercase inline-flex flex-col ", titulos.includes(name) ? "text-blue-500" : "text-yellow-500")}
      >
        {name}
      </motion.span>
    </AnimatePresence>
  )
}
