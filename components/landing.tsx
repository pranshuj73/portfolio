import Skills from "./skills";

export default function Landing() {
  return (
    <section className="flex flex-col p-10 items-center justify-center text-center mt-12">
      <h1 className='text-3xl md:text-5xl'>hey, i'm pranshu.</h1>
      <p className='mt-4 text-lg md:text-xl  text-gray-400'>full-stack developer & open-source enthusiast.</p>
      <Skills />
    </section>
  )
}