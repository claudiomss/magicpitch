import iconplane from '@/assets/iconplane.svg'
import avatargroup1 from '@/assets/avatargroup1.svg'
import avatargroup2 from '@/assets/avatargroup2.svg'
import Image from 'next/image'

export function Header() {
  return (
    <main className="text-center px-4 md:px-[8vw] ">
      <h1 className="text-[#753EE9] font-bold text-[24px] md:text-[40px] lg:text-[64px] lg:px-[10vw]">
        Revolutionize your Outreach with AI enhanced precision
      </h1>
      {/* <p className="text-[#555555] font-medium text-[17px] my-8 px-[22vw]"> */}
      <p className="text-[#555555] font-medium text-[14px] my-8 px-[10vw] md:text-[16px] lg:text-[17px] lg:px-[18vw]">
        Grow your business by acquiring high quality leads through AI-powered,
        hyper personalized effective
      </p>
      <button className="flex text-[12px] md:text-sm lg:text-base gap-2 bg-[#753EE9] text-white items-center px-3 py-2 md:px-6 md:py-4 rounded-full m-auto">
        <Image
          className="absolute w-24 md:w-48  left-2 lg:left-8 mt-[-60px] mobileM:mt-[-30px] md:mt-[130px] lg:mt-[80px]"
          src={avatargroup1}
          alt="avatar group"
        />
        Find your Product
        <div className="w-4 md:w-5 lg:w-6">
          <Image src={iconplane} alt="iconplane" />
        </div>
        <Image
          className="absolute w-24 md:w-48 right-2 mt-[-60px] mobileM:mt-[-30px] md:mt-[0px] lg:mt-[-150px]"
          src={avatargroup2}
          alt="avatar group"
        />
      </button>
    </main>
  )
}
