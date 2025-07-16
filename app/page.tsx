import Intro from "@/components/Intro"
import Section from "@/components/Section"
import { sectionData } from "@/data/mockData"

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Intro />
      {sectionData.map((section) => (
        <Section key={section.title} data={section} />
      ))}
    </main>
  )
}

