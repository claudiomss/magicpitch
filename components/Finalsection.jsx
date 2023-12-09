import Image from 'next/image'
import iconemail1 from '@/assets/iconemail1.svg'

export function Finalsection() {
  return (
    <main className=" grid-cols-2 gap-40 px-8 text-center mt-16  overflow-hidden">
      <section className="grid content-center gap-8">
        <h2 className="text-[24px] text-[#353434] font-bold">
          The Magicpitch Edge
        </h2>
        <p className="text-[17px] text-[#474646]">
          The Power of Data and AI With access to an exclusive database of 750M+
          contacts and 70M+ companies, our AI-driven approach ensures precision
          in every prospect selection.
        </p>
      </section>
      {/* <section className="grid gap-4  pl-32 pr-80 content-center w-[110%] translate-x-40    bg-[#F5F5F5] rounded-[50px]  border-[2rem] border-[#753EE9] "> */}
      <section className="grid gap-4 mt-8 p-8 content-center  bg-[#F5F5F5] rounded-[50px]  border-2 border-[#753EE9] ">
        <article className=" bg-[#E5E3E3] px-3 py-4 box-content w-[20px] m-auto rounded-full">
          <Image src={iconemail1} width={30} height={30} alt="icon email" />
        </article>
        <h2 className="text-[20px] text-[#383838] font-bold">
          Impressive Outreach Success Rates
        </h2>
        <p className="text-[14px] text-[#383838]">
          Our commitment to excellence reflects in our numbers - an astounding
          82% open rate and a 10% reply rate. Outreach was never this effective.
        </p>
      </section>
    </main>
  )
}
