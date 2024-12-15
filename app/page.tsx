import { sectionData, SectionData } from "@/data/mockData"
import Section from "@/components/Section"

const fetchData = async (): Promise<SectionData[]> => {
  // Check if sectionData is an array and if it contains objects
  if (!Array.isArray(sectionData) || !sectionData.every(item => typeof item === 'object')) {
    throw new Error("Invalid section data format: expected an array of objects.");
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sectionData)
    }, 1000)
  })
}

export default async function PortfolioPage() {
  try {
    const data = await fetchData()

    console.log("saving some new code")

    return (
      <div className="min-h-screen text-primary-foreground bg-gradient-to-br from-teal-800 via-teal-500 to-blue-300">
        <header className="container mx-auto pt-52 pb-6 px-4 bg-opacity-80 backdrop-blur-sm">
          <h1 className="text-5xl font-bold font-rokkitt">Young & AI</h1>
        </header>
        <main className="container mx-auto px-4 py-8">
          {data.map((section, index) => (
            <Section key={index} data={section} />
          ))}
        </main>
      </div>
    )
  } catch (error) {
    console.error("An error occurred while fetching section data:", error);
    // Return an error message to the UI or another fallback content appropriate for your app
    return (
      <div className="min-h-screen text-primary-foreground bg-gradient-to-br from-teal-800 via-teal-500 to-blue-300">
        <header className="container mx-auto pt-52 pb-6 px-4 bg-opacity-80 backdrop-blur-sm">
          <h1 className="text-5xl font-bold font-rokkitt">Young & AI</h1>
        </header>
        <main className="container mx-auto px-4 py-8">
          <p className="text-red-500">Failed to load portfolio sections. Please try again later.</p>
        </main>
      </div>
    )
  }
}