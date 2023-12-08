import Image from 'next/image'
import photobanner from '@/assets/photobanner.svg'
import iconplane from '@/assets/iconplane.svg'

export function Banner() {
  return (
    <div className="px-16 ">
      <main className="grid grid-cols-2 place-items-center bg-[#F4F6FF] pl-28 py-32 rounded-3xl">
        <section>
          <h2 className="text-[#382E2E] text-[50px] font-bold">
            Get your Ideal Customers Convert your Leads Increase Engagement
          </h2>
          <button className="flex gap-4 bg-[#753EE9] text-white items-center px-6 py-3 rounded-full mt-8">
            Book A Demo
            <Image
              src={iconplane}
              width={26.15}
              height={26.15}
              alt="iconplane"
            />
          </button>
        </section>
        <Image src={photobanner} width={770.06} height={496.19} alt="avatar" />
      </main>
    </div>
  )
}
