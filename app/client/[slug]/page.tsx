import { sectionData } from "@/data/mockData"

export default async function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params

  // Find the project based on the slug
  const project = sectionData
    .flatMap((section) => section.items)
    .find((item) => item.slug.endsWith(slug as string))

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{project.title}</h1>
      </header>
      <article className="prose">
        <p>{project.description}</p>
      </article>
    </div>
  )
}
