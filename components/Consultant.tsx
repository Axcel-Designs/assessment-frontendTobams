import Button from "./ui/button";
import { FiArrowUpRight } from "react-icons/fi";

const consultList = [
  {
    title: 'Expert-Led Training', desc: 'Gain insight from seasoned professionals in the field as they mentor you through the subtleties of business analysis.'
  },
  { title: 'Interactive Workshops', desc: 'Engage in hands-on workshops designed to enhance your training capabilities and provide practical insights.' },
  { title: 'Comprehensive Curriculum', desc: 'Access a robust curriculum that covers fundamental principles and advanced methodologies, ensuring a well-rounded understanding.' },
  { title: 'Global Recognition', desc: 'You will attain a globally recognized certification, opening doors to new career opportunities and industry recognition.' },
]

export default function Consultant() {
  return (
    <section className='py-10 text-[#151515]'>
      <div className="bg-[#571244]/10 xl:h-160.5 py-12 px-16 max-lg:p-6 rounded-[5px] flex flex-col justify-between gap-8 text-[#F5F5F5]">
        <div className="grid gap-5 xl:gap-5">
          <div className="grid gap-3">
            <h2 className='text-xl xl:text-[40px] text-[#571244] font-semibold'>Training The Consultants</h2>
            <p className="text-[#571244] font-semibold">Maximise Your Potential as a Certified Trainer:</p>
          </div>
          <p className="text-black">
            With the help of our Training Consultants program, take a revolutionary step toward becoming a distinguished certified training consultant. Learn from professionals in the field, immerse yourself in a thorough curriculum, and hone your training methods through interactive workshops. Participating in our program will enable you to gain expertise in diverse courses while also developing the abilities to mentor and encourage others in their career advancement.</p>
          <article className="w-full h-full xl:h-63.5 flex flex-col xl:flex-row justify-between gap-5 bg-[#571244] rounded-lg p-6">
            <ul className='gap-5 grid grid-cols-1 md:grid-cols-2'>
              {consultList.map((item, i) => <li key={i} className='flex items-center rounded-lg w-full'>
                <div className="grid gap-3">
                  <h3 className='font-bold text-lg'>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </li>)}
            </ul>
          </article>
        </div>
        <div>
          <Button title='Learn More' point={<FiArrowUpRight />} />
        </div>
      </div>
    </section>);
}

