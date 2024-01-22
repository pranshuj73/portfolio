import Section from "@/components/Section";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

const TwitterIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
    </svg>
  )
}

const LinkedInIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  )
}

const GitHubIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}

const BlogIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
      <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208H1ZM15 0H1v1.89h14V0Z" />
    </svg>
  )
}

export default function Contact() {
  return (
    <Section id="contact">
      <span className="absolute -left-60 mt-28 text-[8rem] font-bold -rotate-90 -z-50 opacity-10">CONTACT</span>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 uppercase text-center mt-32">
        Let's get in touch!
      </h1>
      <span className="mt-4">Drop me an email:</span>
      <Link className="text-lg xs:text-xl font-medium border-b-large border-dashed border-foreground border-opacity-30 hover:border-opacity-80 duration-400 transition-all ease-in-out" href="mailto:hello@pranshujha.com" color="foreground" isExternal showAnchorIcon>
        <span className="mt-1 mr-1 text-heading">hello@pranshujha.com</span>
      </Link>
      <span className="mt-8 mb-2">Or, find me at</span>
      <div className="flex flex-row items-center justify-center gap-4">
        <Button as={Link} href="https://twitter.com/pranshuj73" aria-label="X (Twitter)" isIconOnly variant="ghost" isExternal> <TwitterIcon /> </Button>
        <Button as={Link} href="https://www.linkedin.com/in/pranshuj73/" aria-label="LinkedIn" isIconOnly variant="ghost" isExternal> <LinkedInIcon /> </Button>
        <Button as={Link} href="https://github.com/pranshuj73" aria-label="GitHub" isIconOnly variant="ghost" isExternal> <GitHubIcon /> </Button>
        <Button as={Link} href="https://pranshujha.com/blog" aria-label="My Blog" isIconOnly variant="ghost" isExternal> <BlogIcon /> </Button>
      </div>
    </Section>
  )
}