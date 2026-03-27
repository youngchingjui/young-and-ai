import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check } from "lucide-react"
import { notFound } from "next/navigation"
import { projects, getProjectBySlug } from "@/data/projects"
import { NEXT_PUBLIC_CALENDLY_LINK } from "@/lib/env"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project Not Found" }

  return {
    title: project.title,
    description: project.overview,
    openGraph: {
      title: `${project.title} | Young & AI`,
      description: project.overview,
      url: `https://youngandai.com/projects/${slug}`,
      images: [
        {
          url: project.heroImage,
          width: 1200,
          height: 630,
          alt: project.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Young & AI`,
      description: project.overview,
      images: [project.heroImage],
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <div className="max-w-3xl mx-auto px-6">
      <div className="pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/40 hover:text-foreground/60 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>
      </div>

      {/* Hero */}
      <section className="pt-12 pb-12">
        <p className="text-sm uppercase tracking-widest text-primary/70 mb-4">
          {project.subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          {project.title}
        </h1>
      </section>

      {/* Hero Image */}
      <section className="pb-16">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={project.heroImage}
            alt={project.heroImageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </section>

      {/* Overview */}
      <section className="pb-16">
        <p className="text-xl text-foreground/80 leading-relaxed">
          {project.overview}
        </p>
      </section>

      {/* Challenge */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold mb-6">The challenge</h2>
        <p className="text-lg text-foreground/60 leading-relaxed">
          {project.challenge}
        </p>
      </section>

      {/* Solution */}
      <section className="pb-16">
        <h2 className="text-2xl font-bold mb-6">What we built</h2>
        <p className="text-lg text-foreground/60 leading-relaxed">
          {project.solution}
        </p>
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Results */}
      <section className="pb-24">
        <h2 className="text-2xl font-bold mb-8">Results</h2>
        <ul className="space-y-4">
          {project.results.map((result) => (
            <li
              key={result}
              className="flex items-start gap-3 text-lg text-foreground/70"
            >
              <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
              {result}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <h2 className="text-3xl font-bold">Want something similar?</h2>
        <p className="mt-4 text-lg text-foreground/50 max-w-md mx-auto">
          Book a free call and we&apos;ll scope out how we can help.
        </p>
        <a
          href={NEXT_PUBLIC_CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-lg bg-primary px-8 py-4 text-xl font-bold text-white hover:opacity-90 transition-opacity"
        >
          Book a free consultation
        </a>
      </section>
    </div>
  )
}
