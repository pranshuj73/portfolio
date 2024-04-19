'use client';

import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Tooltip} from "@nextui-org/tooltip";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { useState } from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { CopyIcon } from "@/components/Icons";

export default function Header() {
  const linkClasses = "text-sm sm:text-md md:text-base border-b-large border-dashed border-foreground border-opacity-0 hover:border-opacity-70 hover:text-heading duration-400 transition-all ease-in-out"

  const [isOpen, setIsOpen] = useState(false);
  const navAnimProps = {initial:{ opacity: 0, y: -20 }, animate:{ opacity: 1, y: 0 }, transition:{ duration: 0.5, delay: 0.25 }}

  return (
    <Navbar shouldHideOnScroll className="w-full uppercase font-semibold lg:px-4" maxWidth="2xl" motionProps={navAnimProps}>
      {/* <Divider orientation="horizontal" className="w-full absolute right-0 md:block -z-10"/> */}
          <NavbarBrand className="text-lg lg:hidden"> <Link color="foreground" href="#hey">PJ</Link> </NavbarBrand>
          <NavbarContent className="hidden lg:flex lg:data-[justify=start]:justify-start data-[justify=start]:justify-end data-[justify=start]:flex-grow data-[justify=start]:basis-0">
            <NavbarItem className="mr-12 hidden lg:block"> <Link className="text-lg text-heading" color="foreground" href="#hey">Pranshu Jha</Link> </NavbarItem>
            <NavbarItem> <Link className={linkClasses} color="foreground" href="#about">About</Link> </NavbarItem>
            <NavbarItem> <Link className={linkClasses} color="foreground" href="#projects">Projects</Link> </NavbarItem>
            <NavbarItem> <Link className={linkClasses} color="foreground" href="#contact">Contact</Link> </NavbarItem>
          </NavbarContent>
          
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex items-center justify-center">
            <span>Let's Connect 👉</span>
            <Tooltip isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} defaultOpen={false} isDisabled={!isOpen} placement="bottom" content="Email Copied!" color="foreground">
              <Button className="bg-background ml-6" variant="ghost" endContent={<CopyIcon/>} onPress={() => {navigator.clipboard.writeText("hello@pranshujha.com"); setIsOpen(true)}}>
                hello@pranshujha.com
              </Button>
            </Tooltip>
          </NavbarItem>
          <NavbarItem className="-mr-2 lg:mr-0">
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}