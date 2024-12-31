import { sectionData, SectionData } from "@/data/mockData";
import Section from "@/components/Section";

const fetchData = async (): Promise<SectionData[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sectionData);
    }, 1000);
  });
};

export default async function PortfolioPage() {
  const data = await fetchData();

  return (
    <div className="min-h-screen text-primary-foreground bg-gradient-to-br from-teal-800 via-teal-500 to-blue-300">
      <header className="container mx-auto pt-20 pb-6 px-4 bg-opacity-90 backdrop-blur-sm rounded-md shadow-lg">
        <h1 className="text-5xl font-bold font-rokkitt text-white">Young & AI</h1>
      </header>
      <main className="container mx-auto px-4 py-8 grid gap-y-6">
        {data.map((section, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300 ease-in-out"
          >
            <Section data={section} />
          </div>
        ))}
      </main>
    </div>
  );
}
