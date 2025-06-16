import Section from "@/components/Section"
import { sectionData } from "@/data/mockData"

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <section className="mb-8 bg-card p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">👋 Hi, I'm Ching Jui Young!</h1>
        <p className="text-lg text-muted-foreground">
          I build AI Agents and help companies adopt AI workflows.<br />
          Check out some of my favorite projects and talks below — let's make something amazing with AI together!
        </p>
      </section>
      {sectionData.map((section) => (
        <Section key={section.title} data={section} />
      ))}
    </main>
  )
}
