import logo from '@/assets/logo.svg'
import arrowdown from '@/assets/arrowdown.svg'
import Image from 'next/image'

export function Navbar() {
  return (
    <>
      <main className="text-[#2E2E2E] flex items-center justify-around px-16 pt-4">
        <section className="flex items-center gap-4">
          <Image src={logo} width={34.78} height={34.78} alt="logo" />
          <span className="font-bold text-[18px]">magicpitch</span>
        </section>
        <ul className="flex gap-8">
          <Nav title="Service" icon={true} />
          <Nav title="Product" icon={true} />
          <Nav title="Pricing" />
          <Nav title="Company" icon={true} />
        </ul>
        <section className="flex items-center gap-12">
          <p className="font-semibold text-[14px]">Book a Demo</p>
          <button className="bg-[#753EE9] text-white font-medium text-[16px] py-3 px-12 rounded-2xl">
            Get Started
          </button>
        </section>
      </main>
    </>
  )
}

const Nav = ({ title, icon }) => {
  if (icon)
    return (
      <>
        <li className="flex gap-4 font-semibold text-[14px]">
          {title} <Image src={arrowdown} width={16} height={15} alt="icone" />
        </li>
      </>
    )
  return (
    <>
      <li className="flex gap-4 font-semibold text-[14px]">{title}</li>
    </>
  )
}
