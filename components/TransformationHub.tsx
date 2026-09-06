import Image from "next/image";
import { BsLightningCharge, } from "react-icons/bs";
import Button from "./ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import { assetImg } from "@/public/images/imgs";
import { Nunito } from "next/font/google";

const nunito =Nunito({
  subsets:['latin']
})

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
    <section className='py-10 p-6 xl:p-16 text-[#151515]'>
      <div className="bg-[#EF4353]/20 xl:h-163 xl:p-10 py-6 px-4 rounded-xl xl:rounded-2xl flex flex-col justify-between xl:gap-16">
        <div className="grid xl:gap-6 gap-5">
          <div className="grid gap-2">
            <p className={`text-[#1671D9] italic ${nunito.className} font-semibold text-[20px]`}>Learning With Our CEO</p>
            <h2 className={`text-xl xl:text-[32px] text-[#571244] font-semibold italic ${nunito.className}`}>Transformation Hub With Jite Newton</h2>
          </div>
          <div>
          <p className=" text-lg">Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you&apos;re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.</p>
          </div>
          <div className="w-full h-full flex flex-col xl:flex-row justify-between xl:gap-8">
            <div className="relative xl:w-full xl:max-w-140 xl:h-85 lg:h-70 h-58 xl:aspect-auto shrink-0 rounded-lg overflow-hidden">
              <Image src={assetImg.trans}
                alt="Chief Executive Officer"
                placeholder="blur"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden h-16 w-full max-xl:block"></div>
            <article className='xl:py-8 xl:px-5 p-5 rounded-lg flex flex-col justify-between gap-6 bg-[#FFFFFF]/30'>
              <ul className='gap-x-6 gap-3 grid grid-cols-1 md:grid-cols-2 '>
                {MDPList.map((benefit, i) => <li key={i} className='flex items-center gap-2.5 bg-[#FFFFFF] p-4 rounded-xl w-full text-[#571244] 2xl:text-lg'>
                  <BsLightningCharge className="font-semibold" />
                  {benefit}
                </li>)}
              </ul>
              <div>
                <Button title='Learn More' point={<FiArrowUpRight />} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>);
}
