import { motion } from "motion/react"

export default function Apply() {
  return (
    <div>
      <motion.button 
        className="relative bg-blue-700 text-white py-3 px-4 rounded-xl shadow-xl flex justify-center items-center mt-5"
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
      >
        Postula ya!
      </motion.button>
    </div>
  )
}
