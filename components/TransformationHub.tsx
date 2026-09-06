import Image from "next/image";
import { BsLightningCharge, } from "react-icons/bs";
import Button from "./ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import { assetImg } from "@/public/images/imgs";

const MDPList = [
  "Strategic Career Guidance",
  "Leadership Development",
  "CV Development",
  "Sustainablity Leadership",
  "Communication Skills",
  "Business Model",
]

export default function TransformationHub() {
  return (
    <section className='py-10 xl:p-16 text-[#151515]'>
      <div className="bg-[#EF435333]/20 xl:h-179.75 p-10 rounded-[5px] flex flex-col justify-between gap-5 xl:gap-14 text-[#F5F5F5]">
        <div>
          <p className="text-[#1671D9]">Learning With Our CEO</p>
          <h2 className='text-xl xl:text-[40px] text-[#571244] font-semibold'>Transformation Hub With Jite Newton</h2>
          <p className="text-black">Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.</p>
        </div>
        <div className="w-full h-full xl:h-85 flex flex-col xl:flex-row justify-between gap-10">
          <div className="relative xl:w-full xl:max-w-136.25 xl:h-85 lg:h-70 h-58 aspect-square xl:aspect-auto shrink-0 rounded-lg overflow-hidden">
            <Image src={assetImg.trans}
              alt="Chief Executive Officer"
              placeholder="blur"
              fill
              className="object-cover"
            />
          </div>
          <article className='xl:py-8 xl:px-5 rounded-lg flex flex-col justify-between gap-6 bg-[#FFFFFF]/30'>
            <ul className='gap-6.25 grid grid-cols-1 md:grid-cols-2'>
              {MDPList.map((benefit, i) => <li key={i} className='flex items-center gap-3 bg-[#FFFFFF] p-4 rounded-lg w-full text-[#571244]'>
                <BsLightningCharge />
                {benefit}
              </li>)}
            </ul>
            <div>
              <Button title='Learn More' point={<FiArrowUpRight />} />
            </div>
          </article>
        </div>
      </div>
    </section>);
}
