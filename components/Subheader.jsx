import Image from 'next/image'
import screenweb from '@/assets/screenweb.svg'
import arrow from '@/assets/arrow.svg'
import iconemail1 from '@/assets/iconemail1.svg'
import iconemail2 from '@/assets/iconemail2.svg'
import painel from '@/assets/painel.svg'

export function Subheader() {
  return (
    <>
      <main className="px-4 mt-8">
        <Image className="m-auto w-[15rem]" src={screenweb} alt="screenweb" />
        <section className="grid place-content-center bg-[#753EE9] m-auto w-full h-[9rem]  rounded-3xl mt-[-8rem]">
          <h3 className="font-bold text-[0.8rem] text-white px-20 text-center mt-12 ">
            {/* <span className="bg-[#905CFF] w-[2rem] h-[2rem] rounded-full absolute ml-[-1rem]"></span> */}
            Get your ideal Customers
          </h3>
        </section>
        <section className="grid mt-[1rem] mb-[5rem]">
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
    <main className="grid gap-2 place-items-center bg-[#F7F5FE]   p-12 rounded-2xl odd:translate-y-10">
      <Image
        style={{ background: color }}
        className="w-[40px] h-[40px] p-3 rounded-xl"
        src={icon}
        alt="icon"
      />
      <p className="text-[18px] font-bold">{percentage}</p>
      <p className="text-[12px] text-[#474646]">{title}</p>
    </main>
  )
}
