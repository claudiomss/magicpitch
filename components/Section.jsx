import Image from 'next/image'
import arrowright from '@/assets/arrowright.svg'
import number1 from '@/assets/01.svg'
import frame1 from '@/assets/frame1.svg'
import number2 from '@/assets/02.svg'
import frame2 from '@/assets/frame2.svg'
import number3 from '@/assets/03.svg'
import frame3 from '@/assets/frame3.svg'
import number4 from '@/assets/04.svg'
import frame4 from '@/assets/frame4.svg'
import number5 from '@/assets/05.svg'
import frame5 from '@/assets/frame5.svg'

export function Section() {
  return (
    <main>
      <Sect
        number={number1}
        title=" Prospect Intelligence"
        bgcolor="#8551F1"
        bgcolorAll="#753EE9"
        isFrame={true}
        frame={frame1}
      />
      <Sect
        number={number2}
        title=" Data Sourcing"
        bgcolor="#B84FF9"
        bgcolorAll="#A83EE9"
        isFrame={true}
        frame={frame2}
      />
      <Sect
        number={number3}
        title=" Outreach Intelligence"
        bgcolor=""
        bgcolorAll="#FF916E"
        isFrame={false}
        frame={frame3}
      />
      <Sect
        number={number4}
        title=" Servers, Warm - Up And Deliverability"
        bgcolor="#A146FD"
        bgcolorAll="#933EE9"
        isFrame={true}
        frame={frame4}
      />
      <Sect
        number={number5}
        title=" Campaign
        Management"
        bgcolor="#6E85FF"
        bgcolorAll="#617AFF"
        isFrame={true}
        frame={frame5}
      />
    </main>
  )
}

const Sect = ({ number, title, bgcolorAll, bgcolor, isFrame, frame }) => {
  return (
    <main
      style={{
        backgroundColor: bgcolorAll,
        marginTop: '-3rem',
      }}
      className="lg:grid p-8 lg:pl-36 pt-16 text-center lg:text-start place-items-center grid-cols-2 w-full h-[60rem]  text-white  rounded-2xl   even:translate-y-[-20px] first:rounded-none  "
    >
      <section>
        <p>
          <Image src={number} width={85} height={125} alt="number 1" />
        </p>
        <h2 className="font-bold  text-[24px] md:text-4xl lg:text-[64px] mt-[50px] lg:leading-tight">
          {title}
        </h2>
        <p className="text-[16px] xl:text-lg  mt-[20px] mb-[55px]">
          Dive deep into AI-powered precision with our unique ICP scoring
          mechanism. We meticulously match the Ideal Customer Profile (ICP) of
          our clients to every company within our extensive database of 70
          Million+ companies using advanced AI algorithms .
        </p>
        <button className="text-[16px] xl:text-lg  flex items-center gap-4 mb-8 transition-all  hover:underline">
          Learn More
          <Image src={arrowright} width={10.53} height={14.03} alt="frame" />
        </button>
      </section>
      <section
        style={{
          backgroundColor: isFrame ? bgcolor : '',
        }}
        className="grid place-items-center  rounded-xl"
      >
        <Image
          className="p-8"
          src={frame}
          width={361}
          height={239}
          alt="frame"
        />
      </section>
    </main>
  )
}
