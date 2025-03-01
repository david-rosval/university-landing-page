import { Link } from "@remix-run/react";
import { navLinks } from "../../consts";
import { AnimatePresence, motion} from "motion/react"
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { SubLinks } from "./SubLinks";
import clsx from "clsx";

const MotionLink = motion.create(Link)

export default function NavBar() {
  const [navLinkHovered, setNavLinkHovered] = useState<number>(0)

  return (
    <motion.div 
      className="fixed top-0 w-full backdrop-blur-md flex justify-center z-10"
      initial={{
        opacity: 0,
        y: -30
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 1,
          duration: 0.3
        }
      }}
    >
      <Link to={"/"} className="absolute left-0  h-full flex gap-3 items-center p-3">
        <GraduationCap className="size-8" />
        <p className="max-w-28 text-sm uppercase font-bold leading-4">Universidad de la Calle</p>
      </Link>
      <nav className="flex items-center"  onMouseLeave={() => {
        setNavLinkHovered(0)
      }}>
        {navLinks.map((navLink, index) => (
          <div key={index} className="h-full flex justify-center relative">
            <MotionLink 
              key={index} to={navLink.to} 
              onMouseEnter={() => setNavLinkHovered(index + 1)} 
              className="h-full py-3 px-3 flex gap-2 items-center font-semibold"
              animate={{ 
                filter: navLinkHovered > 0 
                  ? navLinkHovered !==  index + 1
                    ? "blur(3px)"
                    : "blur(0px)"
                  : "blur(0px)",
                scale: navLinkHovered > 0 
                  ? navLinkHovered !==  index + 1
                    ? 1
                    : 1.08
                  : 1,
                
              }}
            >
              <p className="max-w-24 text-xs text-center">{navLink.name}</p>
              
            </MotionLink>
            <AnimatePresence>
              {(navLinkHovered > 0 && navLinkHovered === index + 1 && navLink.subLinks ) && (
                <>
                  <motion.div 
                    className="absolute top-full w-full flex justify-center"
                    layoutId="triangle"
                    id="triangle"
                    exit={{ opacity: 0 }}
                  >
                    <div 
                      className={clsx(
                        "border-solid border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] size-0",
                        navLink.name === "Nosotros" ? "border-b-slate-200" : "border-b-white",
                      )} 
                    />
                  </motion.div>
                  
                  <motion.div
                    className={clsx("absolute top-[calc(100%+10px)] w-fit overflow-hidden", navLinkHovered > 0 ? "" : "pointer-events-none")}
                    layoutId="subLinks"
                    id="subLinks"
                    style={navLinkHovered === 1 ? {
                      left: 0
                    }: navLinkHovered === 9 ? {
                      right: 0
                    } : {}}
                    exit={{ opacity: 0 }}
                  >
                    <SubLinks  navLink={navLink} />
                  </motion.div>
                </>
              )}
            </AnimatePresence>

          </div>
        ))}
      </nav>
    </motion.div>
  )
}
