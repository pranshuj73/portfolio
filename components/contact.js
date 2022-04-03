import { IoMail, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { SiHashnode} from 'react-icons/si';

export default function Contact() {
  return (
    <section className="pt-14 md:px-16 flex flex-col md:flex-row md:items-center justify-center min-h-screen dark-section" id="contact">
      <div className="card min-h-[400px] lg:h-[60vh] p-10 m-5 md:w-1/2 flex flex-col justify-center items-center">
        <h2 className="mb-4 text-center">Get In Touch</h2>
        <p className="mb-2 sub-text text-center">Here are my socials, please feel free to connect.</p>
        <div className="grid grid-cols-4 mt-4 w-full md:w-3/4">
          <a aria-label="Email" className="pill m-2 col-span-2" href="mailto:pranshuj9801@gmail.com" target="_blank" rel="noopener noreferrer"><IoMail className="pill-icon" size='1.5em'/>Email</a>
          <a aria-label="GitHub" className="pill m-2 col-span-2" href="https://github.com/pranshuj73" target="_blank" rel="noopener noreferrer"><IoLogoGithub className="pill-icon" size='1.5em'/>GitHub</a>
          <a aria-label="LinkedIn" className="pill m-2 col-span-2" href="https://www.linkedin.com/in/pranshuj73/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className="pill-icon" size='1.5em'/>LinkedIn</a>
          <a aria-label="Twitter" className="pill m-2 col-span-2" href="https://twitter.com/pranshuj73" target="_blank" rel="noopener noreferrer"><IoLogoTwitter className="pill-icon" size='1.5em'/>Twitter</a>
          <a aria-label="My Blog" className="pill m-2 col-span-2 col-start-2 whitespace-nowrap" href="https://pranshu.codes/" target="_blank" rel="noopener noreferrer"><SiHashnode className="pill-icon" size='1.5em'/>My Blog</a>
        </div>
      </div>
    </section>
  )
}