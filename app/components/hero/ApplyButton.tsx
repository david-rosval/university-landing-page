import { motion } from "motion/react"
import { useState } from "react"

export default function Apply() {
  const [buttonHovering, setButtonHovering] = useState(false)
  return (
    <div>
      <motion.button 
        className="relative bg-blue-700 text-white py-3 px-4 rounded-xl shadow-xl flex justify-center items-center mt-5 overflow-hidden"
        initial={{
          opacity: 0,
          left: -15
        }}
        animate={{
          opacity: 1,
          left: 0, 
          transition: {
            delay: 0.6,
            duration: 0.2
          }
        }}
        whileHover={{
          scale: 1.1
        }}
        onMouseEnter={() => setButtonHovering(true)}
        onMouseLeave={() => setButtonHovering(false)}
      >
        {/* -left-8 to left-[calc(100%+32px)] */}
        <motion.div 
          className="absolute w-5 h-[200%] -skew-x-12 bg-white/20 bg-blend-lighten blur-lg" 
          initial={{
            left: -32
          }}
          animate={{
            left: buttonHovering ? "110%" : -32
          }}
        />
        Postula ya!
      </motion.button>
    </div>
  )
}
