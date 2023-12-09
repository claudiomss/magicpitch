import Image from 'next/image'
import iconuser from '@/assets/iconuser.svg'
import iconworks1 from '@/assets/iconworks1.svg'
import iconworks2 from '@/assets/iconworks2.svg'
import iconworks3 from '@/assets/iconworks3.svg'
import iconworks4 from '@/assets/iconworks4.svg'
import play from '@/assets/play.svg'
import imagevideo from '@/assets/imagevideo.svg'

export function Subsection() {
  return (
    <main className="grid-cols-2 gap-40 px-6 lg:px-28  mt-16 lg:mt-28 md:grid">
      <section>
        <h2 className="text-2xl lg:text-[45px] text-[#353434] font-bold text-center lg:text-start   md:translate-x-52 lg:translate-x-0 md:mb-8">
          How it Works
        </h2>
        <main>
          <section className="bg-[#FAF9FF] rounded-2xl p-6 lg:w-[25rem]  my-4">
            <article className="flex gap-4">
              <Image src={iconuser} width={23} height={23} alt="iconuser" />
              <p className="text-base lg:text-xl text-[#3D3D3D] font-semibold">
                Client Consultation
              </p>
            </article>
            <p className="text-[14px] lg:text-base text-[#474646] ml-10">
              The Power of Data and AI With acces Power of Data and AI With
              access
            </p>
          </section>
          <section className="grid gap-4 pl-6 my-8 ">
            <Topic icon={iconworks1} title="Comprehensive Analysis" />
            <Topic icon={iconworks2} title="Human-Centered Approach" />
            <Topic icon={iconworks3} title="Personalised Outreach" />
            <Topic icon={iconworks4} title="Campaign Management" />
          </section>
        </main>
      </section>
      {/* <section className="w-[491.14px] h-[574.64px]"> */}
      <section className="">
        <Image
          className="bg-[#E8E2F4] m-auto  rounded-[50px] md:mt-28"
          src={imagevideo}
          width={491.14}
          height={574.64}
          alt="imagevideo"
        />
        <Image
          // className="absolute  top-[800%] mobileL:top-[808%] mobileML:top-[818%] sm:top-[830%] md:top-[757%] left-[50%] md:left-[80%] translate-x-[-50%]"
          className="relative translate-x-[30vw] translate-y-[-55vw] 
          mobileL:translate-x-[35vw] mobileL:translate-y-[-60vw] sm:translate-x-[40vw] sm:translate-y-[-55vw] 
          md:translate-x-[15vw] md:translate-y-[-25vw]
          lg:translate-x-[12vw] lg:translate-y-[-22vw]"
          src={play}
          width={84.64}
          height={80.54}
          alt="play"
        />
      </section>
    </main>
  )
}

const Topic = ({ icon, title }) => {
  return (
    <main className="flex gap-4 items-center">
      <Image
        className="bg-[#FAF9FF] p-3 box-content rounded-xl"
        src={icon}
        width={24}
        height={24}
        alt="icon topic"
      />
      <p className="text-sm lg:text-xl text-[#3D3D3D] font-medium">{title}</p>
    </main>
  )
}
