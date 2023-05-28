import Image from "next/image"

export default function Introduction() {
  return (
    <section className="text-gray-400 body-font">
      <div className="container px-10 py-24 mx-auto">
        <div className="flex flex-col mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">about me.</h1>
          <div className="h-1 w-20 bg-gray-500 rounded" />
        </div>
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-white">
                <Image src={"/pfp.jpg"} blurDataURL={"/pfp.jpg"} alt="Pranshu Jha" width={300} height={300} className="rounded-full" priority={true} placeholder="blur" />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-white text-lg">Pranshu Jha</h2>
                <div className="w-12 h-1 bg-gray-600 rounded mt-2 mb-4" />
                <p>Full-Stack Developer working on upskilling myself & exploring new tech.</p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg text-justify mb-4">As a Full-Stack Developer, I bridge the gap between captivating front-end designs and robust back-end functionality, delivering exceptional user experiences with precision and finesse. With a passion for cutting-edge technologies and a knack for problem-solving, I thrive on delivering elegant solutions that exceed expectations.</p>
              <a className="text-gray-200 inline-flex items-center" href="/contact">Contact Me
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}