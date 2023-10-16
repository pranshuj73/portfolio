import Section from "@/components/Section";
import { Card, CardHeader, CardFooter, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";


interface projectData{id: number, title: string, description: string, tags: string};

const Project = ({id, title, description, tags}: projectData) => {
  return (
    <Card key={id} isFooterBlurred className="w-full h-[300px]" shadow="sm">
      <Image
        removeWrapper
        alt={title}
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={`/projects/${id}.jpg`}
      />
      <CardHeader className="absolute z-20">
        <Button isIconOnly className="bg-black/60 border-white/40 border-2 ml-auto" variant="flat" color="default" radius="full" size="sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="w-4 h-4 shadow-lg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </Button>
      </CardHeader>
      <CardFooter className="flex-col items-start drop-shadow-2xl bg-black/30 border-white/20 border-1 overflow-hidden p-3 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_1.5rem)] shadow-small ml-3 mb-2 z-10">
          <div className="flex justify-between items-center w-full mb-1">
            <h4 className="text-white font-medium text-2xl">{title}</h4>
            <p className="text-tiny text-white/40 uppercase font-bold">{tags}</p>
          </div>
          <p className="text-white/70 text-xs">{description}</p>
      </CardFooter>
    </Card>
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
      <h1 className="text-8xl mt-24 mb-10">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-10">
        {data.map((project) => <Project {...project} />)}
        <Project id={0} title="More Projects" description="Check out more of my projects on GitHub." tags="GitHub" />
      </div>
    </Section>
  )
}