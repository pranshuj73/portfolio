import Image from 'next/image';
import {IoLogoGithub} from 'react-icons/io';

export default function Projects() {
  return (
    <section className="pt-14 flex flex-col md:flex-row md:items-center justify-center min-h-screen" id="projects">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
          <h2 className="mb-2 text-gray-900">Projects</h2>
          <p className="sub-text">Here are some of the projects that I have worked/collaborated on</p>
        </div>
        <div className="flex flex-wrap">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="card p-4">
              <IoLogoGithub className="mb-2" size="2em" />
              <h3 className="mb-2">Hello</h3>
              <p className="sub-text">World</p>
            </div>
          </div>
          <projectCard title="Project 1" description="This is a project description" />
          <projectCard title="Project 1" description="This is a project description" />
          <projectCard title="Project 1" description="This is a project description" />
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">See more like these</button>
      </div>
    </section>
  )
}

function projectCard(props) {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-200 p-6 rounded-lg">
        <h2 className="text-lg mb-2">{props.title}</h2>
        <p className="leading-relaxed text-base">{props.description}</p>
      </div>
    </div>
  )
}