import Image from 'next/image'
import screenweb from '@/assets/screenweb.svg'
import arrow from '@/assets/arrow.svg'
import iconemail1 from '@/assets/iconemail1.svg'
import iconemail2 from '@/assets/iconemail2.svg'
import painel from '@/assets/painel.svg'

export function Subheader() {
  return (
    <>
      <main>
        <Image
          className="m-auto"
          src={screenweb}
          width={1040.1}
          height={1032.74}
          alt="screenweb"
        />
        <section className="grid place-content-center bg-[#753EE9] m-auto w-[1272.57px] h-[592.64px]  rounded-3xl mt-[-35rem]">
          <h3 className="font-bold text-[64px] text-white px-64 text-center mt-64">
            <span className="bg-[#905CFF] w-[108.45px] h-[108.45px] rounded-full absolute ml-[-1rem]"></span>
            Get your ideal Customers
          </h3>
        </section>
        <section className="flex gap-8 justify-center mt-[241px] mb-[188px]">
          <Card
            icon={iconemail1}
            color="#7569FF"
            percentage="98%"
            title="Delivery Rate"
          />
          <Card
            icon={iconemail2}
            color="#FF9F81"
            percentage="70%"
            title="Avg. Open Rate"
          />
          <Card
            icon={arrow}
            color="#914EFF"
            percentage="3%"
            title="Avg. Lead Rate"
          />
          <Card
            icon={painel}
            color="#FF9F81"
            percentage="0.001%"
            title="Bounce Rate"
          />
        </section>
      </main>
    </>
  )
}

const Card = ({ icon, color, percentage, title }) => {
  return (
    <main className="grid gap-2 place-items-center bg-[#F7F5FE] w-[228.01px] h-[226.32px] p-12 rounded-2xl odd:translate-y-10">
      <Image
        style={{ background: color }}
        className="w-[50px] h-[50px] p-3 rounded-xl"
        src={icon}
        width={30}
        height={30}
        alt="icon"
      />
      <p className="text-[36px] font-bold">{percentage}</p>
      <p className="text-[16px] text-[#474646]">{title}</p>
    </main>
  )
}
