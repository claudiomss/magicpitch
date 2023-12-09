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
    <main className=" grid-cols-2 gap-40 px-6 mt-16">
      <section>
        <h2 className="text-[24px] text-[#353434] font-bold text-center">
          How it Works
        </h2>
        <main>
          <section className="bg-[#FAF9FF] rounded-2xl p-6  my-4">
            <article className="flex gap-4">
              <Image src={iconuser} width={23} height={23} alt="iconuser" />
              <p className="text-[16px] text-[#3D3D3D] font-semibold">
                Client Consultation
              </p>
            </article>
            <p className="text-[14px] text-[#474646] ml-10">
              The Power of Data and AI With acces Power of Data and AI With
              access
            </p>
          </section>
          <section className="grid gap-4 pl-6 my-8">
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
          className="bg-[#E8E2F4]  rounded-[50px]"
          src={imagevideo}
          width={491.14}
          height={574.64}
          alt="imagevideo"
        />
        <Image
          className="absolute  top-[800%] left-[50%] translate-x-[-50%]"
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
      <p className="text-[14px] text-[#3D3D3D] font-medium">{title}</p>
    </main>
  )
}
