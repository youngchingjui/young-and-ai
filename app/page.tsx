import Hero from "@/components/Hero"
import Intro from "@/components/Intro"
import SelectedWork from "@/components/SelectedWork"
import IssueToPR from "@/components/IssueToPR"
import Projects from "@/components/Projects"
import Talks from "@/components/Talks"
import Community from "@/components/Community"
import SunriseBackground from "@/components/SunriseBackground"

export default function Home() {
  return (
    <>
      <SunriseBackground />
      <Hero />
      <Intro />
      <SelectedWork />
      <IssueToPR />
      <Projects />
      <Talks />
      <Community />
    </>
  )
}
