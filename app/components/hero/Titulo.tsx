import clsx from "clsx";
import { motion, AnimatePresence } from "motion/react";
import { titulos } from "../../consts";

export default function Titulo({ name }: {name: string}) {
  return (
    <AnimatePresence initial={false}>
      <motion.span
        key={name}
        initial={{ top: 20,opacity: 0 }}
        animate={{ top: 0, opacity: 1 }}
        exit={{ top: -20, opacity: 0 }}
        
        className={clsx("absolute uppercase left-[calc(100%+20px)]", titulos.includes(name) ? "text-blue-500" : "text-yellow-500")}
      >
        {name}
      </motion.span>
    </AnimatePresence>
  )
}
