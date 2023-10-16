import dynamic from "next/dynamic"


export default function About() {
  const ParallaxImage = dynamic(() => import("@/components/ParallaxImage"), { ssr: false })

  return (
    <section className='min-h-screen max-w-full md:max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 gap-12 p-6 xs:p-10'>
      <ParallaxImage src="/about.jpg" alt="Pranshu Jha" className="rounded-lg grayscale hover:grayscale-0 duration-700 delay-150 transition-all ease-soft-spring" />

      <div className="m-4 max-w-2xl flex flex-col justify-center">
        <h1 className="text-4xl font-semibold mb-3">Hello World!</h1>
        <p className="my-3">This is Pranshu Jha. I am an undergrad currently pursuing Bachelors in Engineering, majoring in Computer Science.</p>
        <p className="my-3">As a Full-Stack Developer, I bridge the gap between captivating front-end designs and robust back-end functionality, delivering exceptional user experiences with precision and finesse.</p>
        <p className="my-3">With a passion for cutting-edge technologies and a knack for problem-solving, I thrive on delivering elegant solutions that exceed expectations.</p>
      </div>
    </section>
  )
}