import { motion} from "motion/react"
import { Link } from "@remix-run/react"
import clsx from "clsx"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { type NavLink } from "../../consts"

export function SubLinks({ 
  navLink,
}: { 
  navLink: NavLink,
}) {

  if (navLink.name === "Nosotros") {
    return <SubLinksAboutUs nosotros={navLink} />
  }

  return (
    <motion.div 
      className="inline-flex items-center flex-col"
    >
      <div 
        className={clsx(
          "grid w-fit gap-x-3 gap-y-2 items-center bg-white p-4 shadow-lg rounded-lg overflow-hidden",
          (navLink.subLinks?.length ?? 0) > 5 ? "grid-cols-[repeat(2,183px)]" : "grid-cols-[repeat(1,178px)]"
        )}
      >
        {navLink.subLinks?.map((sublink, index) => (
          <LinkItem subLinksLength={navLink.subLinks?.length} key={index} to={sublink!.to} name={sublink?.name ?? ''} />
        ))}
      </div>
    </motion.div>
  )
}

export function SubLinksAboutUs({ nosotros }: { nosotros: NavLink}) {

  const sectionsSubtitle = ["Nuestra Universidad", "Autoridades", "Oficina", "Documentos de gestión"]

  const sections: SectionType[] = sectionsSubtitle.map(title => [
    title,
    (nosotros?.subLinks ?? []).filter(sublink => sublink.subtitle === title)
  ]);

  return (
    <motion.div 
      className="flex flex-col"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="flex flex-col gap-2 p-2 rounded-lg bg-slate-200 w-fit shadow-lg">
        {sections.map((section, index) => (
          <Section key={index} section={section} />
        ))}
      </div>
    </motion.div>
  )
}

type SectionType = [string, (NavLink | undefined)[] | undefined]

const Section = ({ section }: { section: SectionType }) => {
  return (
    <motion.div 
      className="flex flex-col gap-2 bg-white rounded-lg p-3"
      initial={{
        opacity: 0,
        x: -5
      }}
      animate={{
        opacity: 1,
        x: 0
      }}
      exit={{
        opacity: 0,
        x: 5
      }}
  
    >
      <span className="uppercase font-semibold text-xs text-blue-700 select-none">{section[0]}</span>
      <div className="grid grid-cols-[repeat(3,210px)]  gap-x-3 gap-y-1 items-center">
        {section[1]?.filter(sublink => sublink?.to).map((sublink, index) => (
          <LinkItem key={index} to={sublink!.to} name={sublink?.name ?? ''} />
        ))}
      </div>
    </motion.div>
  )
}

const MotionLink = motion(Link)


const LinkItem = ({ to, name, subLinksLength }: { to: string, name: string, subLinksLength?: number }) => {
  const [subLinkHovered, setSubLinkHovered] = useState(false)
  return (
    <MotionLink 
      to={to} 
      className="flex gap-2 relative top-0 h-full items-center rounded p-2 overflow-hidden transition-all hover:bg-slate-200 hover:text-blue-500"
      onMouseEnter={() => setSubLinkHovered(true)}
      onMouseLeave={() => setSubLinkHovered(false)}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
       
      }}
      exit={{
        opacity: 0,
      }}
    >
      <p 
        className={clsx("relative top-0 left-0  text-xs text-wrap", 
        subLinksLength 
          ?  (subLinksLength ?? 0 > 5) 
            ? "max-w-[140px]"
            : "max-w-[170px]"
          : "max-w-[175px]"
        )}
      >
        {name}
      </p>
      <ArrowRight 
        className={clsx(
          "size-4 absolute right-2  transition-transform duration-100 delay-100 stroke-blue-500 ",
          subLinkHovered  ? "scale-x-100" : "scale-x-0"
        )} 
      />
    </MotionLink>
  )
}
