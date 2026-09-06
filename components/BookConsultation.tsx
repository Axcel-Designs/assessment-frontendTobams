import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});
export default function BookConsultation() {

    return (
      <>
        <section className="mx-auto bg-[#571244] text-white px-16 py-8 gap-8 rounded-lg flex flex-col items-center justify-around text-center xl:w-283.5 xl:h-51">
          <p className={`font-semibold text-xl ${nunito.className}`}>Want to accelerate professional growth and development at your organisation?
            <br />
            See how we can help.
          </p>
          <button className="text-[#571244] font-semibold bg-white py-3 px-6 flex items-center gap-2.5 rounded-sm cursor-pointer w-fit h-12">
            Book a Consultation
          </button>
        </section >
      </>
    )
  }

