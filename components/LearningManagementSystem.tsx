import Button from './ui/button'
import { FiArrowUpRight } from 'react-icons/fi'
import Image from 'next/image'
import { assetImg } from '@/public/images/imgs'
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

const courses = ['Business Analysis', 'Design Thinking', 'Effective Communication', 'Entrepreneurship', 'Career Development', 'Business Model']

export default function LearningManagementSystem() {
  return (
    <section className="py-10 text-[#151515]">
      <div className="bg-[#571244]/10 flex flex-col xl:flex-row xl:h-166 p-6 gap-6 lg:gap-20 xl:px-12 xl:py-16 items-center justify-center">
        <h2 className={`${nunito.className} text-[#571244] font-semibold text-xl block xl:hidden`}>Learning Management System</h2>
        <div className="relative w-81.27 h-81.75 xl:w-auto xl:h-full aspect-square rounded-full overflow-hidden shrink-0">
          <Image
            src={assetImg.lms}
            alt="Learning Management System image"
            placeholder="blur"
            fill
            className="object-cover"
          />
        </div>
        <article className='rounded-lg flex flex-col gap-6 xl:gap-8'>
          <div className='xl:gap-5 gap-6 grid'>
            <h2 className={`${nunito.className} text-[#571244] text-[40px] hidden xl:block font-semibold`}>Learning Management System</h2>
            <div className='bg-[#571244]/10 p-6 rounded-lg gap-5 grid'>
              <p>TG Academy is a hub of knowledge and skill-building resources designed to empower tech talents on their learning journey. From technical courses covering the latest programming languages and development frameworks to soft skills training in leadership, effective communication and project management, TG Academy offers a wide range of courses to cater to diverse learning needs. With accessible and interactive learning materials, individuals can enhance their skills and stay ahead in today&apos;s competitive tech landscape.</p>
              <div className='gap-3 grid'>
                <h3 className='text-[#571244] text-xl font-bold'>Some of our courses include:</h3>
                <ul className='list-disc list-outside gap-3 flex flex-wrap max-lg:flex-col'>
                  {courses.map((course, i) => <li key={i} className='ml-6'>{course}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <Button title='Learn More' point={<FiArrowUpRight />} />
          </div>
        </article>
      </div>
    </section>
  )
}
