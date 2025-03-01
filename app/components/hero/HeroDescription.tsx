import {motion} from "motion/react"

export default function HeroDescription() {
  return (
    <motion.p 
      className="max-w-[40rem] text-slate-700 relative"
      initial={{
        opacity: 0,
        left: -15 
      }}
      animate={{
        opacity: 1,
        left: 0,
        transition: {
          duration: 0.2,
          delay: 0.6
        }
      }}
    >
      Desarrolla tu potencial con una educación ética, tecnológica y científica, enfocada en crear soluciones sostenibles para la sociedad. Únete a una comunidad que impulsa el cambio.
    </motion.p>
  )
}
