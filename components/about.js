// icons
import { IoMail, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoLogoPython, IoLogoJavascript, IoLogoReact, IoGitBranch } from 'react-icons/io5';
import { FaDatabase } from 'react-icons/fa';
import { SiDjango, SiFlask, SiLinux, SiCplusplus } from 'react-icons/si';

export default function About() {
  return (
    <section className="pt-14 py-10 bg-gray-300 dark:bg-tertiary md:px-8 flex flex-col md:flex-row md:items-center justify-center min-h-screen cut-out" id="about">
      <section className="card min-h-[400px] md:h-[80vh] lg:h-[60vh] p-10 m-5 md:w-1/2 flex flex-col justify-center items-center">
        <h2 className="mb-6 text-center">About Me</h2>
        <div className="lg:text-lg text-justify lg:px-8">
          <p className="mb-2">Hi 👋, My name is Pranshu Jha,</p>
          <p className="mb-2">I'm an open-source enthusiast & a learner, seeking ways to create impact. 
          I am deeply passionate about software development and bringing ideas to life.</p>
          <p>Currently pursuing Bachelors in Computer Science & Engineering at RIT Chennai, IN 🇮🇳</p>
        </div>
      </section>
      <section className="card min-h-[400px] md:h-[80vh] lg:h-[60vh] p-10 m-5 md:w-1/2 flex flex-col justify-center">
        <h2 className="mb-8 text-center">Skills & Technologies</h2>
        <Technologies />
      </section>
    </section>
  )
}

const Technologies = () => {
  const iconSize = '1.25em';
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-4'>
      <span className='pill'><IoLogoPython className="pill-icon" size={iconSize} />Python</span>
      <span className='pill'><IoLogoJavascript className="pill-icon" size={iconSize} />JavaScript</span>
      <span className='pill'><IoLogoReact className="pill-icon" size={iconSize} />React</span>
      <span className='pill'><IoGitBranch className="pill-icon" size={iconSize} />Git</span>
      <span className='pill'><FaDatabase className="pill-icon" size={iconSize} />Databases</span>
      <span className='pill'><SiDjango className="pill-icon" size={iconSize} />Django</span>
      <span className='pill'><SiFlask className="pill-icon" size={iconSize} />Flask</span>
      <span className='pill'><SiLinux className="pill-icon" size={iconSize} />Linux</span>
      <span className='pill'><SiCplusplus className="pill-icon" size={iconSize} />C++</span>
    </div>
  )
}
