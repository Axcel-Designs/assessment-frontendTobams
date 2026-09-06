import { trainingData } from "@/data/data";
import Image from "next/image";
import { BsLightningChargeFill } from "react-icons/bs";

export default function Training() {
  return (
    <section className='grid gap-6 xl:gap-30 xl:p-16 text-[#151515]'>
      {trainingData.map((training, i) => (
        <div key={i} className={`flex flex-col xl:flex-row xl:max-h-101.25 p-6 xl:p-0 gap-6 xl:gap-16 rounded-lg items-center justify-center ${i % 2 === 1 ? 'xl:flex-row-reverse ' : ''}`}>
          <h2 className='text-[#151515] text-[20px] md:text-normal block xl:hidden font-semibold'>{training.title}</h2>
          <div className="order-3 xl:gap-5.25 xl:order-0 grid xl:max-h-101.25">
            <h2 className='text-[#151515] text-[40px] xl:block hidden font-semibold'>{training.title}</h2>
            <div className='grid xl:gap-4.75 gap-5.25'>
              <p className='text-lg text-[#696969]'>{training.desc}</p>
              <ul className=' flex flex-wrap 2xl:gap-2.5'>
                {training.lists.map((benefit, i) => <li key={i} className='flex items-center gap-3.5 w-full px-7.5'>
                  <BsLightningChargeFill className='text-[#1D0617]' />
                  <span className='text-[#696969]'>{benefit}</span>
                </li>)}
              </ul>
            </div>
          </div>
          <div className="relative w-full aspect-square xl:h-full xl:w-full xl:min-w-150 order-2 xl:order-1 overflow-hidden lg:rounded-tl-[56px] lg:rounded-bl-xl rounded-tl-[30px] rounded-tr-3xl rounded-br-[23px] rounded-bl-[40px] xl:aspect-auto">
            <Image src={training.img} alt={training.title} className='w-full h-full object-cover' fill placeholder="blur" />
          </div>
        </div>
      ))}
    </section>);
}
