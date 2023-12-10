import { Banner } from '@/components/Banner'
import { Depositions } from '@/components/Depositions'
import { Finalsection } from '@/components/Finalsection'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import { Section } from '@/components/Section'
import { Subheader } from '@/components/Subheader'
import { Subsection } from '@/components/Subsection'

import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <ChakraProvider>
      <main className="max-w-[1440px] m-auto">
        <Navbar />
        <Header />
        <Subheader />
        <Section />
        <Subsection />
        <Finalsection />
        <Depositions />
        <Banner />
        <Footer />
      </main>
    </ChakraProvider>
  )
}
