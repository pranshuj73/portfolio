import Section from "@/components/Section";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";


interface projectData{id: number, title: string, description: string, tags: string};

const Project = ({id, title, description, tags}: projectData) => {
  return (
    <div key={id.toString()} className="flex flex-col my-6">
      <div className="w-full h-auto relative">
        <Image
          removeWrapper
          isBlurred
          alt={title}
          shadow="sm"
          radius="lg"
          width="100%"
          className="w-full object-cover h-auto"
          src={`/projects/${id}.jpg`}
        />
        <Link as={Button} className="absolute bottom-3 right-3 z-10 font-medium px-4" size="sm" radius="lg" variant="faded" isBlock isExternal showAnchorIcon>Link</Link>
      </div>
      <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center w-full mb-2 mt-6">
        <h4 className="text-text font-medium text-2xl my-1">{title}</h4>
        <p className="text-sm text-text/40 uppercase font-bold my-1">{tags}</p>
      </div>
      <p className="text-text/70 md:text-sm">{description}</p>
    </div>
  )
}

export default function Projects() {
  const data: projectData[] = [
    {
      id: 1, tags: "NextJS", title: "Dystopian",
      description: "Dystopian is a gamified learning platform that allows students to learn programming easily through bite-sized lessons built into the plot of the game. Students can also compete with each other in the leaderboard."
    },
    { 
      id: 2, tags: "Blockchain", title: "XDC Health",
      description: "Built for PLI Blockathon '22, XDC Health is an Electronic Healthcare Management System built upon XDC Blockchain allowing healthcare recorrds to be stored on the blockchain."
    },
    {
      id: 3, tags: "NextJS, TailwindCSS", title: "Tranquil",
      description: "Tranquil is a collection of aesthetic TailwindCSS components which can be edited on the web as per need using AI. It is currently under development."
    }
  ]
  return (
    <Section>
      <h1 className="text-2xl mt-24 mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-10">
        {data.map((project) => <Project {...project} />)}
        <Project id={0} title="More Projects" description="Check out more of my projects on GitHub." tags="GitHub" />
      </div>
    </Section>
  )
}