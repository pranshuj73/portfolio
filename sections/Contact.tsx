import Section from "@/components/Section";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { TwitterIcon, LinkedInIcon, GitHubIcon, BlogIcon } from "@/components/Icons";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export default function Contact() {
  return (
    <Section className="items-center justify-center mt-0" id="contact">
      <div className="flex flex-col lg:flex-row items-stretch mt-16">
        <section className="flex flex-col lg:w-7/12 xl:w-8/12">
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold md:w-10/12">
            I love creating unforgettable digital experiences and websites with people like you.
          </span>
          <div className="mt-6 lg:mt-auto">
            <p className="text-lg">So, let's get in touch!</p>
            <Link className="text-xl md:text-2xl lg:text-3xl font-semibold" href="mailto:hello@pranshujha.com" color="foreground" isExternal>
              hello@pranshujha.com
            </Link>
          </div>
        </section>

        <section className="lg:w-5/12 xl:w-4/12 mt-12 lg:mt-0">
          <Card>
            <CardBody>
                <div className="flex flex-row items-center justify-center gap-4">
                  <span className="w-full text-lg md:text-xl lg:text-2xl font-semibold text-heading whitespace-nowrap mr-4">Socials</span>
                  <Button as={Link} href="https://x.com/pranshuj73" aria-label="X (Twitter)" isIconOnly variant="ghost" isExternal> <TwitterIcon /> </Button>
                  <Button as={Link} href="https://www.linkedin.com/in/pranshuj73/" aria-label="LinkedIn" isIconOnly variant="ghost" isExternal> <LinkedInIcon /> </Button>
                  <Button as={Link} href="https://github.com/pranshuj73" aria-label="GitHub" isIconOnly variant="ghost" isExternal> <GitHubIcon /> </Button>
                  <Button as={Link} href="https://pranshujha.com/blog" aria-label="My Blog" isIconOnly variant="ghost" isExternal> <BlogIcon /> </Button>
                </div>
            </CardBody>
          </Card>
          <Card className="mt-8 p-6 lg:p-12">
            <CardBody className="text-center">
              <span className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3">Ready to get started?</span>
              <span className="text-lg mb-12">Let's jump on a quick call to find out how I can help you the best!</span>
              <Button as={Link} size="lg" href="https://cal.com/pranshuj73" isExternal>
                Schedule a call
              </Button>
            </CardBody>
          </Card>
        </section>
      </div>
    </Section>
  )
}