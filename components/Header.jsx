import iconplane from '@/assets/iconplane.svg'
import avatargroup1 from '@/assets/avatargroup1.svg'
import avatargroup2 from '@/assets/avatargroup2.svg'
import Image from 'next/image'

export function Header() {
  return (
    // <main className="text-center px-[10vw]">
    <main className="text-center px-4">
      {/* <h1 className="text-[#753EE9] font-bold text-[64px]"> */}
      <h1 className="text-[#753EE9] font-bold text-[24px]">
        Revolutionize your Outreach with AI enhanced precision
      </h1>
      {/* <p className="text-[#555555] font-medium text-[17px] my-8 px-[22vw]"> */}
      <p className="text-[#555555] font-medium text-[14px] my-8 px-[10vw]">
        Grow your business by acquiring high quality leads through AI-powered,
        hyper personalized effective
      </p>
      <button className="flex text-[12px] gap-2 bg-[#753EE9] text-white items-center px-3 py-2 rounded-full m-auto">
        <Image
          className="absolute w-[6rem] left-2 mt-[-60px]"
          src={avatargroup1}
          alt="avatar group"
        />
        Find your Product
        <div className="w-[1rem]">
          <Image src={iconplane} alt="iconplane" />
        </div>
        <Image
          className="absolute w-[6rem] right-2 mt-[-60px]"
          src={avatargroup2}
          alt="avatar group"
        />
      </button>
    </main>
  )
}
