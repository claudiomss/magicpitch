import Image from 'next/image'
import logo2 from '@/assets/logo2.svg'
import insta from '@/assets/insta.svg'
import linkedin from '@/assets/linkedin.svg'
import twitter from '@/assets/twitter.svg'
import corporation from '@/assets/corporation.svg'

export function Footer() {
  return (
    <main className="grid grid-cols-7 px-20 py-16">
      <section className="col-span-3">
        <article className="flex items-center gap-4">
          <Image src={logo2} width={28.23} height={22.06} alt="logo" />
          <span className="font-extrabold text-[18px] text-[#753EE9]">
            magicpitch
          </span>
        </article>
        <p className="mt-16 text-[16px] text-[#353434]">
          One Central, The Offices 4 Dubai, United Arab Emirates
        </p>
        <p className="mt-2 mb-24 text-[16px] text-[#353434]">
          info@magicpitch.ai
        </p>
        <article className="flex gap-3 mb-8">
          <button>
            <Image src={insta} width={18} height={18} alt="social" />
          </button>
          <button>
            <Image src={linkedin} width={23} height={23} alt="social" />
          </button>
          <button>
            <Image src={twitter} width={18} height={18} alt="social" />
          </button>
        </article>
        <p className="flex gap-2 text-[14px] text-[#353434] ">
          <Image src={corporation} width={16} height={16} alt="c corporation" />
          2023 Magicpitch All Right Reversed
        </p>
      </section>
      <section className="text-[14px] font-semibold text-[#353434]">
        Plataform
      </section>
      <section className="text-[14px] font-semibold text-[#353434]">
        Solution
      </section>
      <section className="flex flex-col gap-4 text-[14px] text-[#353434]">
        <p className="text-[14px] font-semibold text-[#353434]">Company</p>
        <p>About us</p>
        <p>Blog</p>
        <p>Careers</p>
      </section>
      <section className="flex flex-col gap-4 text-[14px] text-[#353434]">
        <p className="text-[14px] font-semibold text-[#353434]">Resources</p>
        <p>Contact</p>
        <p>Terms of service</p>
        <p>Privacy Policy</p>
      </section>
    </main>
  )
}
