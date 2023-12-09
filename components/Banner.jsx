import Image from 'next/image'
import photobanner from '@/assets/photobanner.svg'
import iconplane from '@/assets/iconplane.svg'

export function Banner() {
  return (
    <div className="px-6 ">
      <main className=" grid-cols-2 place-items-center py-12 px-8 text-center bg-[#F4F6FF]  rounded-3xl">
        <section>
          <h2 className="text-[#382E2E] text-[22px] font-bold">
            Get your Ideal Customers Convert your Leads Increase Engagement
          </h2>
          <button className="flex m-auto gap-4 text-[10px] bg-[#753EE9] text-white items-center px-3 py-1 rounded-full mt-8">
            Book A Demo
            <Image className="w-5" src={iconplane} alt="iconplane" />
          </button>
        </section>
        <Image src={photobanner} width={770.06} height={496.19} alt="avatar" />
      </main>
    </div>
  )
}
