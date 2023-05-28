import { PropsWithChildren } from "react"

// tool function with returns prop children and accepts prop name of type string and color of type string
type SocialProps = {
  name: string,
  link: string,
  colorClass: string,
}

function Social(props: PropsWithChildren<SocialProps>) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer noopener" className={`flex flex-row items-center justify-center ${props.colorClass} m-3 justify-self-center opacity-75 hover:opacity-100 transition-all duration-300 ease-in cursor-pointer`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
        {props.children}
      </svg>
      <p className="text-lg text-gray-400 hover:text-gray-200 transition-all duration-300 ease-in">{props.name}</p>
    </a>
  )
}

export default function ContactForm() {
  return (
    <section className="container px-10 py-24 mx-auto flex flex-col items-center text-gray-400 -mt-20">
      <div className="flex flex-col w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">reach out to me.</h1>
        <div className="h-1 w-20 bg-gray-500 rounded" />
      </div>
      <h1 className="text-2xl text-white text-center">you can reach out to me at my socials.</h1>
      <div className="flex flex-row flex-wrap items-center justify-center mt-6">
        <Social name="twitter" colorClass="text-blue-400" link="https://twitter.com/pranshuj73">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </Social>
        <Social name="e-mail" colorClass="text-green-400" link="mailto:pranshuj9801@gmail.com">
          <circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
        </Social>
        <Social name="schedule a call" colorClass="text-yellow-300" link="https://cal.com/pranshujha">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
        </Social>
      </div>
    </section>
  )
}