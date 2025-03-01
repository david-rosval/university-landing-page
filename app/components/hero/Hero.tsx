import Apply from "./ApplyButton"
import HeroDescription from "./HeroDescription"
import HeroTitle from "./HeroTitle"
import ImagesDisplay from "./ImagesDisplay"

export default function Hero() {
  return (
    <main className="w-full h-dvh flex items-center relative">
      <div className="flex flex-col gap-4 ml-40 z-10">
        <HeroTitle />
        <HeroDescription />
        <Apply />
      </div>
      <ImagesDisplay />
    </main>
  )
}
