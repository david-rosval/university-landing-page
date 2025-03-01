import { useEffect, useState } from "react";
import Titulo from "./Titulo";
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
      }, 1250)

      return () => clearTimeout(timeoutBase);

    }, 2500)
    
    
    return () => clearTimeout(timeoutTitle)
  }, [currentTitleIndex])
  

  return (
    <>
     
      <h1 className="text-6xl font-black text-slate-800 ">
        <span className="relative flex items-center">
          Formando
          <Titulo name={title} />
        </span>
        <span className="relative inline-flex items-center mt-5">
          con base
          <Titulo name={base} />
        </span>
      </h1>
    </>
  )
}
