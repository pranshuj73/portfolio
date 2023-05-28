type CardProps = {
  subHeading: string,
  heading: string,
  description: string
}

function Card(props: CardProps) {
  return (
    <div className="xl:w-1/4 md:w-1/2 m-4 bg-[#242628] p-6 rounded-lg">
      <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
      <h3 className="tracking-widest text-gray-400 text-xs font-medium title-font">{props.subHeading}</h3>
      <h2 className="text-lg text-white font-medium title-font mb-4">{props.heading}</h2>
      <p className="leading-relaxed text-base text-justify">{props.description}</p>
    </div>
  )
}

export default function Showcase() {
  const projects = [
    {
      subHeading: "NextJS",
      heading: "Dystopian",
      description: "Dystopian is a gamified learning platform that allows students to learn programming easily through bite-sized lessons built into mini-games. Dystopian allows students to learn programming languages at their own pace as well as compete against their friends."
    },
    {
      subHeading: "Blockchain",
      heading: "XDC Health",
      description: "Built for PLI Blockathon '22, XDC Health is an Electronic Healthcare Management System built upon XDC Blockchain. It allows patients to store their medical records on the blockchain, and allows doctors to access them with the patient's consent."
    },
    {
      subHeading: "NextJS, TailwindCSS",
      heading: "Tranquil",
      description: "Tranquil is a collection of aesthetic TailwindCSS components which can be edited on the web as per need using AI. It is currently under development."
    }
  ]

  return (
    <section className="text-gray-400 body-font">
      <div className="container px-10 py-24 mx-auto">
        <div className="flex flex-col w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">my projects.</h1>
          <div className="h-1 w-20 bg-gray-500 rounded" />
        </div>
        <div className="flex flex-wrap justify-stretch items-stretch -m-4">
          {projects.map((project) => (
            <Card subHeading={project.subHeading} heading={project.heading} description={project.description} />
          ))}
        </div>
      </div>
    </section>
  )
}