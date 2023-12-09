import Image from 'next/image'
import photobanner from '@/assets/photobanner.svg'
import iconplane from '@/assets/iconplane.svg'

export function Banner() {
  return (
    <div className="px-6 lg:px-16">
      <main className="md:grid  grid-cols-2 place-items-center py-12 px-8 lg:px-16 text-center lg:text-start bg-[#F4F6FF]  rounded-3xl">
        <section>
          <h2 className="text-[#382E2E] text-[22px] lg:text-[50px]  font-bold">
            Get your Ideal Customers Convert your Leads Increase Engagement
          </h2>
          <button className="flex m-auto lg:m-0 gap-4 text-[10px] md:text-[12px] lg:text-lg bg-[#753EE9] text-white items-center px-3 py-1 md:px-6 md:py-3 rounded-full mt-8">
            Book A Demo
            <Image className=" w-5 lg:w-6 lg" src={iconplane} alt="iconplane" />
          </button>
        </section>
        <Image src={photobanner} alt="avatar" />
      </main>
    </div>
  )
}
