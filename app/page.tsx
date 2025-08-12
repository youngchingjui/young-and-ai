import Section from "@/components/Section"
import { sectionData } from "@/data/mockData"
import HeroIntro from "@/components/HeroIntro"

export default function Home() {
  return (
    <main>
      <HeroIntro />
      <div className="container mx-auto px-4">
        {sectionData.map((section) => (
          <Section key={section.title} data={section} />
        ))}
      </div>
    </main>
  )
}

