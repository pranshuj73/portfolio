import Section from "@/components/Section";
import { Button } from "@nextui-org/button";
// import { Image } from "@nextui-org/image";
import Image from "next/image";
import { Link } from "@nextui-org/link";


interface projectData{id: number, title: string, description: string, tags: string, link?: string};

const Project = ({id, title, description, tags, link}: projectData) => {
  return (
    <div key={id.toString()} className="flex flex-col my-6">
      <div className="w-full h-auto relative">
        <Image
          width={600}
          height={400}
          alt={title}
          placeholder="blur"
          blurDataURL={`/projects/${id}.jpg`}
          className="w-full object-cover h-auto rounded-2xl shadow-medium border-1 border-black/10"
          src={`/projects/${id}.jpg`}
        />
        { link ? (
          <Button
            as={Link}
            href={link}
            className="absolute bottom-3 right-3 z-10 font-medium"
            size="md" radius="md" color="default" variant="solid"
            isExternal showAnchorIcon
          >
            <span className="hidden md:block">Link</span>
          </Button>
        ) : (
          <Button
            className="absolute bottom-3 right-3 z-10 font-medium"
            size="md" radius="md" color="warning" variant="solid"
            disabled
          >
            <span className="text-xs md:text-[14px]">In Progress</span>
          </Button>
        ) }
      </div>
      <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center w-full mb-2 mt-6">
        <h4 className="text-text font-medium text-xl md:text-2xl my-1">{title}</h4>
        <p className="text-sm text-text/40 uppercase font-bold my-1">{tags}</p>
      </div>
      <p className="text-text/70 sm:text-sm md:text-base">{description}</p>
    </div>
  )
}

export default function Projects() {
  const data: projectData[] = [
    {
      id: 1, title: "Dystopian", tags: "NextJS, Canvas",
      description: "Dystopian is a gamified learning platform that allows students to learn programming easily through bite-sized lessons built into the plot of the game. Students can also compete with each other in the leaderboard.",
      link: "https://github.com/Razor-Code/dystopian"
    },
    { 
      id: 2, title: "XDC Health", tags: "Blockchain",
      description: "Built for PLI Blockathon '22, XDC Health is an Electronic Healthcare Management System built upon XDC Blockchain allowing healthcare recorrds to be stored on the blockchain.",
      link: "https://github.com/Razor-Code/xdc-health-revise"
    },
    {
      id: 3, title: "Oreweb", tags: "NextJS, P2P",
      description: "Oreweb is a P2P file sharing platform built on NextJS and PeerJS that allows users to share files with each other anonymously without any middleman.",
      link: "https://oreweb.vercel.app/"
    }
  ]
  return (
    <Section id="projects" className="scroll-mt-8 -mb-32">
      <div className="w-full"><h1 className="typing text-3xl sm:text-4xl my-6">&gt; Projects</h1></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.map((project) => <Project {...project} />)}
        <Project id={0} title="More Projects" description="Check out more of my projects on GitHub." link="https://github.com/pranshuj73" tags="GitHub" />
      </div>
    </Section>
  )
}