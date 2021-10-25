import useDarkMode from '../hooks/useDarkMode.js';
import { IoSunny, IoMoon } from 'react-icons/io5';

export default function Navbar() {
  return (
    <nav className="flex flex-row p-5 font-semibold fixed z-50 w-full items-center justify-center sm:justify-start shadow bg-white dark:bg-primary">
      <a href="#main" className="mx-4 sm:mr-auto">Pranshu Jha</a>
      <a href="#about" className="hidden hover:text-accent-blue transition-colors duration-200 ease-in-out sm:block mx-4">About</a>
      <a href="#projects" className="hidden hover:text-accent-green transition-colors duration-200 ease-in-out sm:block mx-4">Projects</a>
      <a href="#contact" className="hidden hover:text-accent-red transition-colors duration-200 ease-in-out sm:block mx-4">Contact</a>
      <ToggleDarkMode />
    </nav>
  )
}

const ToggleDarkMode = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <button className="ml-auto sm:mx-4" onClick={handleMode}>
      { darkTheme ? <IoSunny size="1.3em" /> :  <IoMoon size="1.3em" /> }
    </button>
  )
}