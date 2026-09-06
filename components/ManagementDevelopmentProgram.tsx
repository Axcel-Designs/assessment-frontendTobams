import { assetImg } from "@/public/images/imgs";
import Image from "next/image";
import { BsLightningChargeFill } from "react-icons/bs";

const MDPList = [
  "Enhanced Leadership Skills",
  "Improved Employee Engagement",
  "Stronger Organizational Culture",
  "Sustainable Growth",
]

export default function ManagementDevelopmentProgram() {
  return (
    <section className='py-10 xl:p-16 text-[#151515]'>
      <div className="max-lg:mx-6 bg-[#2C0922] h-fit xl:h-179.75 px-5 py-4 xl:p-10 rounded-[20px] flex flex-col lg:flex-row justify-between gap-5 xl:gap-12 text-[#F5F5F5]">
        <h2 className='text-xl lg:hidden block'>Management Development Program</h2>
        <div className="max-h-159.75 shrink-0 w-auto">
          <Image src={assetImg.managementProgram}
            alt="Management Development Program"
            placeholder="blur"
            className="object-cover rounded-t-lg rounded-bl-lg"
          />
        </div>
        <article className='rounded-lg flex flex-col justify-between gap-8'>
          <div className="grid gap-5">
            <h2 className='text-[40px] hidden lg:block font-semibold'>Management Development Program</h2>
            <p>Tobams Group offers a comprehensive Management
              Development Program designed to equip corporate
              organisations with the high
              - performing leaders they need to
              thrive.
              <br />
              <br />
              Our program includes workshops, seminars, coaching
              sessions, online courses, and experiential learning
              opportunities designed to improve leadership, strategic
              thinking, communication, and other essential managerial
              competencies for corporate organisations.</p>
          </div>
          <div className='grid'>
            <ul className='gap-6.25 flex flex-wrap px-4 py-2'>
              {MDPList.map((benefit, i) => <li key={i} className='flex items-center gap-2 bg-[#8F6182] px-2 py-1 rounded-lg w-full min-h-10'>
                <BsLightningChargeFill />
                {benefit}
              </li>)}
            </ul>
          </div>
        </article>
      </div>
    </section>);
}


