import Section from "@/components/Section"
import { sectionData } from "@/data/mockData"
import IntroductionSection from "@/components/IntroductionSection"

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <IntroductionSection />
      {sectionData.map((section) => (
        <Section key={section.title} data={section} />
      ))}
    </main>
  )
}
