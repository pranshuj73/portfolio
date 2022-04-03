import Image from 'next/image';
import pfp from '../public/pfp.jpg';

export default function Main() {
  return (
    <main className="pt-14 flex flex-col md:flex-row md:items-center justify-center min-h-screen dark-section" id="main">
      <section className="flex flex-col justify-center items-center my-2 ">
        <div className="max-w-[600px] min-w-[200px] lg:min-w-[300px] md:w-5/12 lg:w-4/12 border-accent-yellow border-4 overflow-hidden rounded-xl shadow-lg">
          <Image alt="Pranshu Jha" src={pfp} layout="responsive" objectFit="cover" />
        </div>
      </section>
      <section className="md:w-5/12 flex flex-col justify-center items-start my-2 md:pl-8">
        <div className="px-3 text-center md:text-left">
          <h1 className="mb-3">Pranshu Jha</h1>
          <p className="text-xl md:px-1 md:text-2xl sub-text font-semibold">Building Things For The Web.</p>
          <p className="sub-text leading-relaxed text-sm text-center md:text-left px-8 md:text-lg md:px-1 mt-2">Aspring Software Developer, currently in first year of my Bachelors in CSE.<br className="hidden sm:block md:hidden"/> Currently working on upskilling myself & exploring new tech.</p>
        </div>
      </section>
    </main>
  )
}