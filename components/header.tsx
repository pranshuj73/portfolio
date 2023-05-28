export default function Header() {
  const linkStyle = 'mx-2 text-gray-400 hover:text-gray-200 transition-all duration-300 ease-in cursor-pointer'

  return (
    <header className="body-font w-full flex p-5 flex-row items-baseline justify-between">
      <a className="flex title-font font-medium items-center mb-4 md:mb-0" href="/">
        <span className="text-xl">pranshu jha.</span>
      </a>
      <nav className="md:ml-auto text-sm md:text-base flex flex-wrap items-center justify-center -mr-2">
        <a className={linkStyle} href="/about">about</a>
        <a className={linkStyle} href="/projects">projects</a>
        <a className={linkStyle} href="/contact">contact</a>
      </nav>
    </header>

  )
}