import { testimonialData } from "@/data/data";
import Image from "next/image";

    export default function Testimonials() {
    return (
      <section className='xl:py-16 bg-[#C4C4C44D]30 text-[#151515]'>
        <div className="px-16 p-6 grid">
          <h2 className="text-center text-xl xl:text-[40px]">Testimonial</h2>
          <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5.75">
            {testimonialData.map((testimonial, i) => (
              <div key={i} className="p-6 rounded-lg gap-5 grid my-6 border-l-4 border-[#EF4353] bg-white">
                <div className="grid grid-cols-4 grid-row-2 items-center ">
                  <Image src={testimonial.img} alt={testimonial.name} className="w-16 h-16 rounded-full row-span-2" />
                  <p className="text-left text-base col-span-3">{testimonial.name}</p>
                  <p className="text-sm text-gray-700 text-left col-span-3">{testimonial.title}</p>
                </div>
                <p>{testimonial.message}</p>
              </div>
            ))}
          </article>
        </div>
      </section>
    );
  }
