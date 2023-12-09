import Image from 'next/image'
import iconemail1 from '@/assets/iconemail1.svg'

export function Finalsection() {
  return (
    <main className="lg:grid grid-cols-2  px-8 lg:px-20 md:px-20 text-center lg:text-start mt-16  overflow-hidden">
      <section className="grid content-center gap-8">
        <h2 className="text-[24px] lg:text-[55px] text-[#353434] font-bold">
          The Magicpitch Edge
        </h2>
        <p className="text-[17px] text-[#474646]">
          The Power of Data and AI With access to an exclusive database of 750M+
          contacts and 70M+ companies, our AI-driven approach ensures precision
          in every prospect selection.
        </p>
      </section>
      <section
        className="grid max-w-sm lg:max-w-none m-auto lg:m-0 gap-4 lg:py-16 lg:pl-16 lg:pr-[25%]  
      lg:w-[140%] lg:translate-x-10  mt-8 p-8 content-center lg:content-start  bg-[#F5F5F5] 
      rounded-[50px]  border-2 lg:border-[4rem] border-[#753EE9] "
      >
        <article className=" bg-[#E5E3E3] px-3 py-4 box-content w-[20px] m-auto lg:m-0 rounded-full">
          <Image src={iconemail1} width={30} height={30} alt="icon email" />
        </article>
        <h2 className="text-xl lg:text-3xl text-[#383838] font-bold">
          Impressive Outreach Success Rates
        </h2>
        <p className="text-sm lg:text-[17px] text-[#383838]">
          Our commitment to excellence reflects in our numbers - an astounding
          82% open rate and a 10% reply rate. Outreach was never this effective.
        </p>
      </section>
    </main>
  )
}
