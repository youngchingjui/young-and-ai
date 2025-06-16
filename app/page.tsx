import Section from "@/components/Section"
import { sectionData } from "@/data/mockData"

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <section className="mb-10 mt-8 p-6 bg-gray-100 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">Young Ching Jui</h1>
        <p className="text-lg text-gray-700">
          I'm a software developer specializing in AI Agents, Next.js, and enterprise automation. With experience leading teams on complex projects—such as building multi-agent RAG architectures for enterprises and launching high-traffic websites—I combine technical expertise with a strong product mindset. Welcome to my portfolio!
        </p>
      </section>
      {sectionData.map((section) => (
        <Section key={section.title} data={section} />
      ))}
    </main>
  )
}
