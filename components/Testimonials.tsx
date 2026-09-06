import { testimonialData } from "@/data/data";
import { Nunito } from "next/font/google";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const nunito=Nunito({
  subsets:['latin']
})
export default function Testimonials() {
  return (
    <section className='p-6 xl:px-16 py-6 xl:py-16 bg-[#C4C4C4]/30 text-[#151515] grid xl:gap-10 gap-6'>
      <div className=" grid gap-6 xl:gap-10.25">
        <h2 className={nunito.className + " text-center font-bold text-xl xl:text-[40px]"}>Testimonial</h2>
        <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5.75">
          {testimonialData.map((testimonial, i) => (
            <div key={i} className={`${i > 0 && 'max-md:hidden'} ${nunito.className} p-5 px-6 rounded-2xl gap-4 xl:gap-5 grid my-6 border-l-2 border-[#EF4353] bg-white w-full`}>
              <div className="flex items-center gap-5.25">
                <Image src={testimonial.img} alt={testimonial.name} className="w-11 h-11 rounded-full" />
                <div>
                <p className="text-left text-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-700 text-left">{testimonial.title}</p>
                </div>
              </div>
              <p>{testimonial.message}</p>
            </div>
          ))}
        </article>
      </div>
      <div className='flex justify-end gap-4 text-[#EF4353] text-xl'>
        <div className=" w-8 h-8 bg-[#F043541A] flex items-center justify-center">
          <FaAngleRight />
        </div>
        <div className=" w-8 h-8 bg-[#F043541A] flex items-center justify-center">
          <FaAngleLeft />
        </div>
      </div>
    </section>
  );
}
