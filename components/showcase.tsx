import Image from "next/image"

type CardProps = {
  id: number,
  tags: string,
  heading: string,
  description: string,
}

function Card(props: CardProps) {
  const srcString = "/projects/" + props.id + ".jpg"
  return (
    <div className="m-4 bg-[#242628] group rounded-lg transition-all duration-300 ease-in-out">
      <Image className=" rounded-t-lg w-full object-cover object-center mb-6" src={srcString} blurDataURL={srcString} height={1080} width={1920} alt={props.heading} priority={true} placeholder="blur" />
      <div className="px-6 pb-6">
        <h3 className="tracking-widest text-gray-400 text-xs font-medium title-font">{props.tags}</h3>
        <h2 className="text-lg text-white font-medium title-font mb-4">{props.heading}</h2>
        <p className="leading-relaxed text-base text-justify">{props.description}</p>
      </div>
    </div>
  )
}

export default function Showcase() {
  const projects = [
    {
      id: 1,
      tags: "NextJS",
      heading: "Dystopian",
      description: "Dystopian is a gamified learning platform that allows students to learn programming easily through bite-sized lessons built into the plot of the game. Students can also compete with each other in the leaderboard."
    },
    { 
      id: 2,
      tags: "Blockchain",
      heading: "XDC Health",
      description: "Built for PLI Blockathon '22, XDC Health is an Electronic Healthcare Management System built upon XDC Blockchain allowing healthcare recorrds to be stored on the blockchain."
    },
    {
      id: 3,
      tags: "NextJS, TailwindCSS",
      heading: "Tranquil",
      description: "Tranquil is a collection of aesthetic TailwindCSS components which can be edited on the web as per need using AI. It is currently under development."
    }
  ]

  return (
    <section className="text-gray-400 body-font p-8 py-12 mx-auto">
      <div className="flex flex-col mb-10">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">my projects.</h1>
        <div className="h-1 w-20 bg-gray-500 rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch -m-4">
        {projects.map((project) => (
          <Card id={project.id} tags={project.tags} heading={project.heading} description={project.description} />
        ))}
        {/* TODO: Create a GitHub Card */}
        {/* <div className="m-4 bg-[#242628] group rounded-lg transition-all duration-300 ease-in-out">
          <Image className=" rounded-t-lg w-full object-cover object-center mb-6" src={"/projects/github.jpg"} blurDataURL={"/projects/github.jpg"} height={1080} width={1920} alt={"Pranshu Jha's GitHub"} priority={true} placeholder="blur" />
          <div className="px-6 pb-6">
            <h2 className="text-4xl text-center text-white font-medium title-font mb-4">GitHub</h2>
            <p className="leading-relaxed text-base text-center">You can view more of my projects on my GitHub</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}