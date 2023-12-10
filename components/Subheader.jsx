import Image from 'next/image'
import screenweb from '@/assets/screenweb.svg'
import arrow from '@/assets/arrow.svg'
import iconemail1 from '@/assets/iconemail1.svg'
import iconemail2 from '@/assets/iconemail2.svg'
import painel from '@/assets/painel.svg'

export function Subheader() {
  return (
    <>
      <main className="px-4 mobileL:px-6 lg:px-9 mt-8 md:mt-28 lg:mt-36">
        <Image
          className="m-auto max-w-[75rem] w-[75vw] sm:w-[82vw]"
          src={screenweb}
          alt="screenweb"
        />
        <section
          className="grid  place-content-center bg-[#753EE9] m-auto w-full h-[8rem]  rounded-3xl 
          mt-[-8rem] mobileM:mt-[-9rem] mobileL:mt-[-10rem] mobileML:mt-[-12rem]  
          sm:mt-[-18rem] sm:h-[15rem] sm:pt-12 md:mt-[-22rem] md:h-[18rem] md:pt-20
          lg:mt-[-28rem] lg:h-[28rem] lg:pt-36 xl:mt-[-40rem] xl:h-[37rem] xl:pt-56"
        >
          <div className="grid ">
            {/* <span className="bg-[#905CFF]  w-[2rem] h-[2rem] rounded-full  translate-x-[23rem] translate-y-[5rem] absolute z-10 " /> */}
            <h3 className="font-bold text-[0.8rem] sm:text-[1rem] md:text-xl lg:text-5xl text-white px-20 text-center mt-12 lg:px-60 z-20">
              Get your ideal Customers
            </h3>
          </div>
        </section>
        <section className="grid justify-center md:flex md:gap-4 lg:gap-8 mt-[1rem] mb-[5rem] md:mt-20 md:mb-40 lg:mt-32 lg:mb-56">
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
    <main className="grid gap-2 xl:gap-8  place-items-center bg-[#F7F5FE]   p-12 md:p-8 lg:p-12 xl:p-20 rounded-2xl odd:translate-y-10">
      <Image
        style={{ background: color }}
        className="w-[40px] h-[40px]  p-2 xl:p-4 xl:box-content rounded-xl"
        src={icon}
        alt="icon"
      />
      <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
        {percentage}
      </p>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl text-[#474646] text-center">
        {title}
      </p>
    </main>
  )
}
