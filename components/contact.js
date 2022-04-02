import { IoMail, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { SiHashnode} from 'react-icons/si';

export default function Contact() {
  return (
    <section className="pt-14 flex flex-col md:flex-row md:items-center justify-center min-h-screen dark-section" id="contact">
      <section className="card min-h-[400px] md:h-[80vh] lg:h-[60vh] p-10 m-5 md:w-1/2 flex flex-col justify-center items-center">
        <h2 className="mb-4 text-center">Get In Touch</h2>
        <p className="mb-2 sub-text">Here are my socials, please feel free to connect.</p>
        <div className="text-justify lg:px-8">
          <div className="grid grid-cols-2 mt-4">
            <a className="pill m-2" href="mailto:pranshuj9801@gmail.com" target="_blank" rel="noopener noreferrer"><IoMail className="pill-icon" size='1.5em'/>Email</a>
            <a className="pill m-2" href="https://github.com/pranshuj73" target="_blank" rel="noopener noreferrer"><IoLogoGithub className="pill-icon" size='1.5em'/>GitHub</a>
            <a className="pill m-2" href="https://www.linkedin.com/in/pranshu-jha-7ba383183/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin className="pill-icon" size='1.5em'/>LinkedIn</a>
            <a className="pill m-2" href="https://twitter.com/pranshuj73" target="_blank" rel="noopener noreferrer"><IoLogoTwitter className="pill-icon" size='1.5em'/>Twitter</a>
          </div>
        </div>
        <a className="pill m-2" href="https://blog.pranshu.codes/" target="_blank" rel="noopener noreferrer"><SiHashnode className="pill-icon" size='1.5em'/>My Blog</a>
      </section>
    </section>
  )
}
