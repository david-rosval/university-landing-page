import {motion} from "motion/react"
import { useEffect, useState } from "react";
import CyclingText from "./CyclingText";
import { bases, titulos } from "../../consts";


export default function HeroTitle() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const title = titulos[currentTitleIndex]
  
  const [currentBaseIndex, setCurrentBaseIndex] = useState(0)
  const base = bases[currentBaseIndex]

  
  useEffect(() => {
    const timeoutTitle = setTimeout(() => {
      setCurrentTitleIndex(prev => prev !== 2 ? prev + 1 : 0)

      const timeoutBase = setTimeout(() => {
        setCurrentBaseIndex(prev => prev !== 2 ? prev + 1 : 0)
      }, 1500)

      return () => clearTimeout(timeoutBase);

    }, 3000)
    
    
    return () => clearTimeout(timeoutTitle)
  }, [currentTitleIndex])
  

  return (
    <motion.h1 
      className="text-6xl font-black text-slate-800 leading-tight"
      initial={{ opacity: 0, filter: "blur(20px)"}}
      animate={{ opacity: 1, filter: "blur(0)", transition: { duration: 0.5 } }}
    >
      <span>
        Formamos
      </span>{" "}
      <CyclingText name={title} />
      <br/>
      <span>{" "}
        con base
      </span>{" "}
      <CyclingText name={base} />
    </motion.h1>
  )
}
