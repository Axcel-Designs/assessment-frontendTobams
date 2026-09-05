import { Nunito } from "next/font/google";
import Button from "./ui/button";

const nunito = Nunito({
  subsets: ["latin"],
});
export default function Hero() {
  return (
    <section
      className="relative bg-[url('/images/banner.png')] bg-cover bg-no-repeat bg-center w-full  bg-gray-500 text-white flex items-center justify-center h-127.75 max-md:h-79.25"
    >
      <div className="bg-black/50 inset-0 w-full h-full flex flex-col justify-around items-center py-28 px-16">
        <div className="relative z-10 grid w-full text-center gap-10 max-md:gap-4">
          <div className='flex flex-col justify-around items-center gap-3'>
          <button className="bg-black/70 text-white text-sm font-s py-3 px-12 flex items-center gap-2 rounded-4xl cursor-pointer h">
            <div>WHAT WE DO</div>
          </button>
          <div className="grid gap-3.75">
              <h1 className={`${nunito.className} text-xl lg:text-[56px] font-bold`}>
            Training and Development
          </h1>
              <p className="text-sm lg:text-lg max-w-269.25 font-semibold">
            Our comprehensive range of programs and resources is designed to
            enhance skills, broaden knowledge, and propel careers forward in
            today&apos;s ever-evolving landscape.
          </p>
          </div>
          </div>

          <Button title="Book consultation" width="m-auto w-[214px]"/>
        </div>

      </div>
    </section>
  );
}