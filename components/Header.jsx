import iconplane from '@/assets/iconplane.svg'
import avatargroup1 from '@/assets/avatargroup1.svg'
import avatargroup2 from '@/assets/avatargroup2.svg'
import Image from 'next/image'

export function Header() {
  return (
    <main className="text-center px-[10vw]">
      <h1 className="text-[#753EE9] font-bold text-[64px]">
        Revolutionize your Outreach with AI enhanced precision
      </h1>
      <p className="text-[#555555] font-medium text-[17px] my-8 px-[22vw]">
        Grow your business by acquiring high quality leads through AI-powered,
        hyper personalized effective
      </p>
      <button className="flex gap-2 bg-[#753EE9] text-white items-center px-6 py-3 rounded-full m-auto">
        <Image
          className="absolute left-44 mt-20"
          src={avatargroup1}
          width={193.35}
          height={110.79}
          alt="avatar group"
        />
        Find your Product
        <Image src={iconplane} width={26.15} height={26.15} alt="iconplane" />
      </button>
      <Image
        className="absolute right-28 mt-[-10rem]"
        src={avatargroup2}
        width={193.35}
        height={110.79}
        alt="avatar group"
      />
    </main>
  )
}
