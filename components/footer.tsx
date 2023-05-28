export default function Footer() {
  const linkStyle = 'mx-2 text-gray-400 hover:text-gray-200 transition-all duration-300 ease-in cursor-pointer'
  
  return (
    <footer className="body-font w-full flex flex-wrap p-5 flex-row items-center justify-center md:justify-end">
      <a className={linkStyle} target="_blank" rel="noreferrer noopener" href="https://twitter.com/pranshuj73">twitter</a>
      <a className={linkStyle} target="_blank" rel="noreferrer noopener" href="https://github.com/pranshuj73">github</a>
      <a className={linkStyle} target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/pranshuj73/">linkedin</a>
      <a className={linkStyle} target="_blank" rel="noreferrer noopener" href="https://pranshujha.hashnode.dev/">blog</a>
    </footer>
  )
}