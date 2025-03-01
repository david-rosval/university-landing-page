import { useState } from "react";
import Titulo from "./Titulo";
import { bases, titulos } from "../../consts";


export default function HeroTitle() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  const title = titulos[currentTitleIndex]
  
  const [currentBaseIndex, setCurrentBaseIndex] = useState(0)
  
  const base = bases[currentBaseIndex]

  const changeTitle = () => setCurrentTitleIndex(prev => prev !== 2 ? prev + 1 : 0)
  
  const changeBase = () => setCurrentBaseIndex(prev => prev !== 2 ? prev + 1 : 0)
  return (
    <>
      <button className="p-2 bg-blue-600 text-white rounded mr-2" onClick={changeTitle}>toggle title</button>
      <button className="p-2 bg-blue-600 text-white rounded mr-2" onClick={changeBase}>toggle base</button>
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
