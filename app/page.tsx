import Section from "@/components/Section"
import Hero from "@/components/Hero"
import { sectionData } from "@/data/mockData"

export default function Home() {
  return (
    <>
      <Hero />
      <main className="container mx-auto px-4">
        {sectionData.map((section) => (
          <Section key={section.title} data={section} />
        ))}
      </main>
    </>
  )
}

