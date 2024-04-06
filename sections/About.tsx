import Section from "@/components/Section"
import dynamic from "next/dynamic"


export default function About() {
  const ParallaxImage = dynamic(() => import("@/components/ParallaxImage"), { ssr: false })

  return (
    <Section className="md:flex-row gap-12 items-stretch" id="about">
      <ParallaxImage src="/about.jpg" alt="Pranshu Jha" className="rounded-3xl grayscale hover:grayscale-0 duration-700 delay-150 transition-all ease-in-out " />

      <div className="max-w-2xl flex flex-col gap-4 justify-center text-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Hello World!</h1>
        <p>This is Pranshu Jha. I am an undergrad currently pursuing Bachelors in Engineering, majoring in Computer Science.</p>
        <p>As a Full-Stack Developer, I bridge the gap between captivating front-end designs and robust back-end functionality, delivering exceptional user experiences with precision and finesse.</p>
        <p>With a passion for cutting-edge technologies and a knack for problem-solving, I thrive on delivering elegant solutions that exceed expectations.</p>
      </div>
    </Section>
  )
}