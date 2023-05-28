export default function Header() {
  const linkStyle = 'mr-5 text-gray-400 hover:text-gray-200 transition-all duration-300 ease-in cursor-pointer'

  return (
    <header className="body-font w-full mx-auto flex p-5 flex-row items-baseline justify-between">
      <a className="flex title-font font-medium items-center mb-4 md:mb-0" href="/">
        <span className="ml-3 text-xl">pranshu jha.</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className={linkStyle} href="/about">about</a>
        <a className={linkStyle} href="/projects">projects</a>
        <a className={linkStyle} href="/contact">contact</a>
      </nav>
    </header>

  )
}