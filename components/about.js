// icons
import { IoMail, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoLogoPython, IoLogoJavascript, IoLogoReact, IoGitBranch } from 'react-icons/io5';
import { FaDatabase } from 'react-icons/fa';
import { SiDjango, SiFlask, SiLinux, SiCplusplus } from 'react-icons/si';

export default function About() {
  return (
    <article className="pt-14 md:mx-8 flex flex-col md:flex-row md:items-center justify-center min-h-screen" id="about">
      <section className="card md:w-1/2 flex flex-col justify-center">
        <h2 className="mb-4">About Me</h2>
        <p className="lg:text-lg">
          Hi 👋, My name is Pranshu Jha,<br />
          I'm an open-source enthusiast & a learner, seeking ways to create impact. 
          I am deeply passionate about software development and bringing ideas to life.<br />
          Currently pursuing Bachelors in Computer Science & Engineering at RIT Chennai, IN 🇮🇳
        </p>
        <Socials />
      </section>
      <section className="card md:w-1/2 flex flex-col justify-center">
        <div>
          <h3 className="mb-2">Skills</h3>
          <ProgressBar title="Python" percentage="80" />
          <ProgressBar title="Full Stack Web" percentage="75" />
          <h3 className="mb-2 mt-6">Tech I'm Familiar With</h3>
          <Technologies />
        </div>
      </section>
    </article>
  )
}

const Socials = () => {
  return (
    <div className="flex items-center justify-center sm:justify-start mt-4">
      <a className="mr-2" href="mailto:pranshuj9801@gmail.com" target="_blank" rel="noopener noreferrer"><IoMail size='1.75em'/></a>
      <a className="mx-2" href="https://github.com/pranshuj73" target="_blank" rel="noopener noreferrer"><IoLogoGithub size='1.75em'/></a>
      <a className="mx-2" href="https://www.linkedin.com/in/pranshu-jha-7ba383183/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin size='1.75em'/></a>
      <a className="m-2" href="https://twitter.com/pranshuj73" target="_blank" rel="noopener noreferrer"><IoLogoTwitter size='1.75em'/></a>
    </div>
  )
}

const Technologies = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 gr'>
      <span className='pill'><IoLogoPython className="pill-icon" size="1.1em" />Python</span>
      <span className='pill'><IoLogoJavascript className="pill-icon" size="1.1em" />JavaScript</span>
      <span className='pill'><IoLogoReact className="pill-icon" size="1.1em" />React</span>
      <span className='pill'><IoGitBranch className="pill-icon" size="1.1em" />Git</span>
      <span className='pill'><FaDatabase className="pill-icon" size="1.1em" />Databases</span>
      <span className='pill'><SiDjango className="pill-icon" size="1.1em" />Django</span>
      <span className='pill'><SiFlask className="pill-icon" size="1.1em" />Flask</span>
      <span className='pill'><SiLinux className="pill-icon" size="1.1em" />Linux</span>
      <span className='pill'><SiCplusplus className="pill-icon" size="1.1em" />C++</span>
    </div>
  )
}

const ProgressBar = (props) => {
  return (
    <div className="flex flex-row items-baseline flex-wrap lg:flex-nowrap mb-2">
      <span className="whitespace-nowrap w-2/5 text-base lg:text-lg">{ props.title }</span>
      <div className="h-3 relative max-w-xl rounded-full overflow-hidden w-full lg:ml-4">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div className="h-full bg-green-500 absolute" style={{width: (props.percentage + '%')}}></div>
      </div>
    </div>
  )
}