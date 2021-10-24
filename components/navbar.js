import useDarkMode from '../hooks/useDarkMode.js';
import { IoSunny, IoMoon } from 'react-icons/io5';

export default function Navbar() {
  return (
    <nav className="flex flex-row p-5 font-semibold fixed w-full items-center justify-center sm:justify-start shadow">
      <a className="mx-4 sm:mr-auto">Pranshu Jha</a>
      <a className="hidden hover:text-accent-blue sm:block mx-4">About</a>
      <a className="hidden hover:text-accent-green sm:block mx-4">Projects</a>
      <a className="hidden hover:text-accent-red sm:block mx-4">Contact</a>
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