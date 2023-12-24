'use client';

import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
import {Tooltip} from "@nextui-org/tooltip";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const CopyIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5 ml-3"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" /> </svg>
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar shouldHideOnScroll position="static" className="w-full uppercase font-semibold" maxWidth="xl" motionProps={{initial:{ opacity: 0, y: -20 }, animate:{ opacity: 1, y: 0 }, transition:{ duration: 0.5, delay: 0.25 }}}>
      {/* <Divider orientation="horizontal" className="w-full absolute right-0 md:block -z-10"/> */}
          <NavbarBrand className="text-lg lg:hidden"> <Link color="foreground" href="#hey">PJ</Link> </NavbarBrand>
          <NavbarContent className="lg:data-[justify=start]:justify-start data-[justify=start]:justify-end data-[justify=start]:flex-grow data-[justify=start]:basis-0">
            <NavbarItem className="mr-12 hidden lg:block"> <Link className="text-lg" color="foreground" href="#hey">Pranshu Jha</Link> </NavbarItem>
            <NavbarItem> <Link className="text-sm sm:text-md md:text-base border-b-large border-dashed border-foreground border-opacity-0 hover:border-opacity-70 text-text hover:text-foreground duration-400 transition-all ease-in-out" color="foreground" href="#contact">Contact</Link> </NavbarItem>
            <NavbarItem> <Link className="text-sm sm:text-md md:text-base border-b-large border-dashed border-foreground border-opacity-0 hover:border-opacity-70 text-text hover:text-foreground duration-400 transition-all ease-in-out" color="foreground" href="#about">About</Link> </NavbarItem>
            <NavbarItem> <Link className="text-sm sm:text-md md:text-base border-b-large border-dashed border-foreground border-opacity-0 hover:border-opacity-70 text-text hover:text-foreground duration-400 transition-all ease-in-out" color="foreground" href="#projects">Projects</Link> </NavbarItem>
          </NavbarContent>
          
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex items-center justify-center">
            <h2 className="text-text">Let's Connect 👉</h2>
            <Tooltip isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)} defaultOpen={false} isDisabled={!isOpen} placement="bottom" content="Email Copied!" color="foreground">
              <Button className="bg-background ml-6" variant="ghost" endContent={<CopyIcon/>} onPress={() => {navigator.clipboard.writeText("hello@pranshujha.com"); setIsOpen(true)}}>
                hello@pranshujha.com
              </Button>
            </Tooltip>
          </NavbarItem>
          <NavbarItem>
            <ThemeSwitcher />
          </NavbarItem>
        </NavbarContent>
    </Navbar>
  )
}