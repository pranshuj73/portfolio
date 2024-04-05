import ParallaxText from '@/components/ParallaxText';
import Scaffold from '@/components/Scaffold'
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Landing from '@/sections/Landing';
import Projects from '@/sections/Projects';


export default function Home() {

  return (
    <main className='flex min-h-screen flex-col items-center justify-center -mt-[4rem]'>
      <Landing />
      <ParallaxText />
      <About />
      <Projects />
      <svg className="m-auto" width={400} viewBox="0 0 687 155" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" strokeWidth={7} fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M20 58c27-13.33333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.66666667 80.5 20" opacity=".1" /><path d="M20 78c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" opacity=".2" /><path d="M20 98c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" opacity=".6" /><path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" /></g></svg>
      <Contact />
    </main>
  )
}
