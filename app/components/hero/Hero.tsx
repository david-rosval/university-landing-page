import Apply from "./ApplyButton"
import HeroDescription from "./HeroDescription"
import HeroTitle from "./HeroTitle"

export default function Hero() {
  return (
    <div className="w-full h-dvh flex items-center">
      <div className="flex flex-col gap-4">
        <HeroTitle />
        <HeroDescription />
        <Apply />
      </div>
    </div>
  )
}
