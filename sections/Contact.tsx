import Section from "@/components/Section";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { TwitterIcon, LinkedInIcon, GitHubIcon, BlogIcon } from "@/components/Icons";
import Hello from "@/components/Hello";

export default function Contact() {
  return (
    <Section id="contact">
      <span className="absolute -left-60 mt-28 text-[8rem] font-bold -rotate-90 -z-50 opacity-5">CONTACT</span>
      <Hello />
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