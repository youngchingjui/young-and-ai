import Image from "next/image"

interface Client {
  name: string
  logo: string
  width: number
  height: number
}

const clients: Client[] = [
  { name: "McKinsey & Company", logo: "/clients/mckinsey.svg", width: 300, height: 93 },
  { name: "BMW", logo: "/clients/bmw.svg", width: 288, height: 150 },
  { name: "PwC", logo: "/clients/pwc.svg", width: 360, height: 180 },
  { name: "Danone", logo: "/clients/danone.png", width: 256, height: 81 },
  { name: "Bureau Veritas", logo: "/clients/bureau-veritas.svg", width: 200, height: 248 },
  { name: "SAIC Motor", logo: "/clients/saic.svg", width: 200, height: 200 },
  { name: "ruhlamat", logo: "/clients/ruhlamat.png", width: 302, height: 59 },
  { name: "System in Motion", logo: "/clients/system-in-motion.png", width: 822, height: 127 },
]

export default function ClientLogos() {
  return (
    <section id="clients" className="max-w-4xl mx-auto px-6 py-24">
      <h2 className="text-xl uppercase tracking-widest text-primary/70 mb-2">
        Worked With
      </h2>
      <p className="text-lg text-foreground/50 mb-12">
        Teams we&apos;ve shipped projects with
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-8 gap-y-12 items-center">
        {clients.map((client) => (
          <li
            key={client.name}
            className="flex items-center justify-center h-16"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              className="max-h-full max-w-[80%] w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
