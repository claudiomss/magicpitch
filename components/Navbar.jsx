'use client'

import logo from '@/assets/logo.svg'
import arrowup from '@/assets/arrowup.svg'
import Image from 'next/image'

import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'

import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react'

import { useMediaQuery } from '@chakra-ui/react'

export function Navbar() {
  const [isLarge] = useMediaQuery('(min-width: 1024px)')

  if (isLarge)
    return (
      <>
        <main className="text-[#2E2E2E] flex items-center justify-around px-16 pt-8 mb-28 ">
          <section className="flex items-center gap-4">
            <Image src={logo} width={34.78} height={34.78} alt="logo" />
            <span className="font-bold text-[15.5px]  ">magicpitch</span>
          </section>
          <NavWindow />

          <section className="flex items-center gap-12">
            <p className="font-semibold text-[14px] ">Book a Demo</p>
            <button className="bg-[#753EE9] text-white font-medium text-[14px]  py-1 px-8 lg:py-3 lg:px-8 rounded-2xl">
              Get Started
            </button>
          </section>
        </main>
      </>
    )

  return (
    <>
      <main className="text-[#2E2E2E] grid justify-center  pt-4 mb-28 ">
        <section className="flex items-center gap-4">
          <Image src={logo} width={34.78} height={34.78} alt="logo" />
          <span className="font-bold text-[15.5px]  ">magicpitch</span>
        </section>
        <section className="z-10 absolute top-16 w-full left-0 bg-white">
          <NavMobile />
        </section>
      </main>
    </>
  )
}

const NavWindow = () => {
  return (
    <main>
      <Menubar title="Service" cols={4}>
        <Nav title="B2B Pitch" />
        <Nav title="B2B Pitch" />
        <Nav title="B2B Pitch" />
        <Nav title="B2B Pitch" />
        <Nav title="Sales Pitch" />
        <Nav title="Sales Pitch" />
        <Nav title="Sales Pitch" />
        <Nav title="View All Pitch" />
        <Nav title="Career Pitch" />
        <Nav title="Career Pitch" />
        <Nav title="Career Pitch" />
      </Menubar>

      <Menubar title="Product" cols={3}>
        <Nav title="Prospecting Intelligence" />
        <Nav title="Prospecting Intelligence" />
        <Nav title="Prospecting Intelligence" />
        <Nav title="Data Sourcing" />
        <Nav title="Server, Warm Up" />
      </Menubar>

      <a
        className=" text-[15px] font-semibold py-2 px-6 rounded-lg transition-all hover:bg-[#CCCCFF]"
        href="http://"
      >
        Princing
      </a>

      <Menubar title="Company" cols={4}>
        <Nav title="Why Magicpitch" />
        <Nav title="Blog" />
        <Nav title="Career" />
        <Nav title="Contact Us" />
        <Nav title="Client" />
        <Nav title="About Us" />
      </Menubar>
    </main>
  )
}

const NavMobile = () => {
  return (
    <main>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <HamburgerIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion allowToggle>
              <AcordionNav title="Service">
                <AcordionLink title="B2B Pitch" />
                <AcordionLink title=" Sales Pitch" />
                <AcordionLink title=" View All Pitch" />
                <AcordionLink title="Career Pitch" />
              </AcordionNav>
              <AcordionNav title="Product">
                <AcordionLink title="Prospecting Intelligence" />
                <AcordionLink title="Data Sourcing" />
                <AcordionLink title="Server, Warm Up" />
              </AcordionNav>
              <AcordionNav noIcon title="Princing" />
              <AcordionNav title="Company">
                <AcordionLink title="Why Magicpitch" />
                <AcordionLink title="Blog" />
                <AcordionLink title="Career" />
                <AcordionLink title="Contact Us" />
                <AcordionLink title="Client" />
                <AcordionLink title="About Us" />
              </AcordionNav>
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </main>
  )
}

const Menubar = ({ children, title, cols }) => {
  return (
    <Menu>
      <MenuButton
        fontSize={15}
        bg="none"
        as={Button}
        rightIcon={<ChevronDownIcon />}
        px={4}
        py={2}
        borderRadius="lg"
        transition="all 0.2s"
        _hover={{ bg: '#CCCCFF' }}
        _expanded={{ bg: '#CCCCFF' }}
      >
        {title}
      </MenuButton>
      <MenuList
        style={{ 'grid-template-columns': `repeat(${cols}, 1fr)` }}
        className="grid gap-6  mr-[5vw] mt-2"
      >
        {children}
      </MenuList>
    </Menu>
  )
}

const Nav = ({ title }) => {
  return (
    <main className="group bg-white">
      <MenuItem width={200}>
        <Image
          className="mb-9"
          src={arrowup}
          width={22.5}
          height={12.5}
          alt="arrow up"
        />
        <section className="grid gap-1  ml-4 text-[#555555] ">
          <h2 className="text-[17px] font-semibold group-hover:text-[#753EE9]">
            {title}
          </h2>
          <p className="text-[12px]  font-medium">
            Grow your business by acquiring high
          </p>
        </section>
      </MenuItem>
    </main>
  )
}

const AcordionNav = ({ title, children, noIcon }) => {
  if (!noIcon)
    return (
      <main>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {children}
        </AccordionItem>
      </main>
    )

  return (
    <main>
      <AccordionItem>
        <h2>
          <AccordionButton>{title}</AccordionButton>
        </h2>
        {children}
      </AccordionItem>
    </main>
  )
}

const AcordionLink = ({ title }) => {
  return (
    <main>
      <AccordionPanel
        className="transition-all  hover:bg-[#EDF2F7]"
        width={300}
        pb={4}
      >
        <div className="group flex items-center  gap-4">
          <Image
            className=""
            src={arrowup}
            width={22.5}
            height={12.5}
            alt="arrow up"
          />
          {title}
        </div>
      </AccordionPanel>
    </main>
  )
}
