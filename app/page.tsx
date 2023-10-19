import ParallaxText from '@/components/ParallaxText';
import Scaffold from '@/components/Scaffold'
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Landing from '@/sections/Landing';
import Projects from '@/sections/Projects';


export default function Home() {

  return (
    <Scaffold>
      <Landing />
      <ParallaxText />
      <About />
      <Projects />
      <Contact />
    </Scaffold>
  )
}
