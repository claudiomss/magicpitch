import Image from 'next/image'
import logo2 from '@/assets/logo2.svg'
import insta from '@/assets/insta.svg'
import linkedin from '@/assets/linkedin.svg'
import twitter from '@/assets/twitter.svg'
import corporation from '@/assets/corporation.svg'

export function Footer() {
  return (
    <>
      <main className="lg:grid grid-cols-7 px-20 py-16 text-center lg:text-start">
        <section className="col-span-3">
          <article className="flex justify-center lg:justify-start items-center gap-4 ">
            <Image src={logo2} width={28.23} height={22.06} alt="logo" />
            <span className="font-extrabold text-[18px] xl:text-2xl text-[#753EE9]">
              magicpitch
            </span>
          </article>
          <p className=" mt-16 text-[15px] xl:text-lg text-[#353434]">
            One Central, The Offices 4 Dubai, United Arab Emirates
          </p>
          <p className=" mt-2 mb-16 text-[15px] xl:text-lg text-[#353434]">
            info@magicpitch.ai
          </p>
        </section>

        <section className="text-[14px] xl:text-base font-semibold text-[#353434] ">
          <a className="transition-all hover:underline" href="#">
            Plataform
          </a>
        </section>
        <section className="text-[14px] xl:text-base my-4 lg:m-0 font-semibold text-[#353434]">
          <a className="transition-all hover:underline" href="#">
            Solution
          </a>
        </section>
        <section className="flex  flex-col gap-4 text-[14px] xl:text-base text-[#353434]">
          <a href="#" className="font-semibold transition-all hover:underline ">
            Company
          </a>
          <a className="transition-all hover:underline" href="#">
            About us
          </a>
          <a className="transition-all hover:underline" href="#">
            Blog
          </a>
          <a className="transition-all hover:underline" href="#">
            Careers
          </a>
        </section>
        <section className="flex my-4 lg:m-0 flex-col gap-4 text-[14px] xl:text-base text-[#353434]">
          <a href="#" className="font-semibold transition-all hover:underline">
            Resources
          </a>
          <a className="transition-all hover:underline" href="#">
            Contact
          </a>
          <a className="transition-all hover:underline" href="#">
            Terms of service
          </a>
          <a className="transition-all hover:underline" href="#">
            Privacy Policy
          </a>
        </section>
      </main>

      <footer className="lg:px-20">
        <article className="flex justify-center lg:justify-start    gap-3 ">
          <button>
            <Image src={insta} width={23} height={23} alt="social" />
          </button>
          <button>
            <Image src={linkedin} width={28} height={28} alt="social" />
          </button>
          <button>
            <Image src={twitter} width={23} height={23} alt="social" />
          </button>
        </article>
        <p className="flex justify-center lg:justify-start gap-2 py-8 text-[14px] xl:text-base  text-[#353434] ">
          <Image src={corporation} width={16} height={16} alt="c corporation" />
          2023 Magicpitch All Right Reversed
        </p>
      </footer>
    </>
  )
}
