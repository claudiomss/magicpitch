/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image'
import avatar1 from '@/assets/avatar1.svg'
import avatar2 from '@/assets/avatar2.svg'
import avatar3 from '@/assets/avatar3.svg'

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react'

export function Depositions() {
  return (
    <main className="px-8 lg:px-16 my-16 lg:my-40">
      <h2 className="text-[#353434] text-2xl lg:text-[55px]  font-bold text-center lg:leading-none">
        Discover the Reasons Behind Our Clients Enthusiasm for MagicPitch
      </h2>
      <p className="text-[#474646] text-base lg:text-xl text-center my-8 md:mb-16">
        Delve into the MagicPitch Experience: Client Testimonials
      </p>

      <Tabs className="flex" position="relative" variant="unstyled">
        <div className="grid justify-center my-4 ">
          <TabList>
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="5px"
            bg="blue.500"
            borderRadius="1px"
          />
        </div>
        <TabPanels>
          <TabPanel>
            <Reviews />
          </TabPanel>
          <TabPanel>
            <Reviews2 />
          </TabPanel>
          <TabPanel>
            <Reviews3 />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  )
}

const Reviews = () => {
  return (
    <main>
      <section className="flex flex-col gap-4 justify-center md:flex-row">
        <Card
          avatar={avatar1}
          name="John Doe"
          job="CEO at TechForward"
          description=' "Magicpitch has truly transformed our outreach campaigns. The precision
        they bring with their AI and the level of personalization is simply
        unmatched. Our B2B sales have soared like never before"'
        />
        <Card
          avatar={avatar2}
          name="Sophie Turner"
          job="Head of Sales at InnovateNow"
          description='"Never did I believe that outreach could be this effective. With Magicpitch, every email feels like its tailor-made, and the results speak for themselves. Its pure magic!"'
        />
        <Card
          avatar={avatar3}
          name="Liam O'Neil"
          job="CEO at TechForward"
          description=' "Data compliance was always a concern for us. But with Magicpitch, we sleep easy. Not only do they ensure our outreach is top-notch, but they also handle our data with utmost responsibility. A big thumbs up!"'
        />
      </section>
    </main>
  )
}

const Reviews2 = () => {
  return (
    <main>
      <section className="flex flex-col gap-4 justify-center md:flex-row">
        <Card
          avatar={avatar3}
          name="Liam O'Neil"
          job="CEO at TechForward"
          description=' "Data compliance was always a concern for us. But with Magicpitch, we sleep easy. Not only do they ensure our outreach is top-notch, but they also handle our data with utmost responsibility. A big thumbs up!"'
        />
        <Card
          avatar={avatar2}
          name="Sophie Turner"
          job="Head of Sales at InnovateNow"
          description='"Never did I believe that outreach could be this effective. With Magicpitch, every email feels like its tailor-made, and the results speak for themselves. Its pure magic!"'
        />
        <Card
          avatar={avatar1}
          name="John Doe"
          job="CEO at TechForward"
          description=' "Magicpitch has truly transformed our outreach campaigns. The precision
        they bring with their AI and the level of personalization is simply
        unmatched. Our B2B sales have soared like never before"'
        />
      </section>
    </main>
  )
}

const Reviews3 = () => {
  return (
    <main>
      <section className="flex flex-col gap-4 justify-center md:flex-row">
        <Card
          avatar={avatar2}
          name="Sophie Turner"
          job="Head of Sales at InnovateNow"
          description='"Never did I believe that outreach could be this effective. With Magicpitch, every email feels like its tailor-made, and the results speak for themselves. Its pure magic!"'
        />
        <Card
          avatar={avatar1}
          name="John Doe"
          job="CEO at TechForward"
          description=' "Magicpitch has truly transformed our outreach campaigns. The precision
        they bring with their AI and the level of personalization is simply
        unmatched. Our B2B sales have soared like never before"'
        />
        <Card
          avatar={avatar3}
          name="Liam O'Neil"
          job="CEO at TechForward"
          description=' "Data compliance was always a concern for us. But with Magicpitch, we sleep easy. Not only do they ensure our outreach is top-notch, but they also handle our data with utmost responsibility. A big thumbs up!"'
        />
      </section>
    </main>
  )
}

const Card = ({ avatar, name, job, description }) => {
  return (
    // <main className="grid gap-2 p-8 w-[382.48px] bg-[#F9F9F9] rounded-xl">
    <main className="grid gap-2 p-8  bg-[#F9F9F9] rounded-xl">
      <Image src={avatar} width={48} height={48} alt="avatar" />
      <h4 className="text-[#101828] text-base lg:text-lg font-semibold">
        {name}
      </h4>
      <p className="text-[#6D7882] text-[13px] lg:text-[15px] ">{job}</p>
      <p className="text-[#101828] text-[13px] lg:text-[15px]">{description}</p>
    </main>
  )
}
