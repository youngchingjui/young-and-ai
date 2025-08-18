import Section from "@/components/Section"
import Hero from "@/components/Hero"
import Intro from "@/components/Intro"
import { sectionData } from "@/data/mockData"
import FeaturedClientProjects from "@/components/FeaturedClientProjects"

export default function Home() {
  const otherSections = sectionData.filter((s) => s.title !== "Client Work")

  return (
    <>
      <Hero />
      <Intro />
      <FeaturedClientProjects />
      <main className="container mx-auto px-4">
        {otherSections.map((section) => (
          <Section key={section.title} data={section} />
        ))}
      </main>
    </>
  )
}

