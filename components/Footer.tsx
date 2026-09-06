import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Button from "./ui/button";
import { AiFillInstagram } from "react-icons/ai";
import { companyData, solutionsData, WhatWeDoData } from "@/data/data";
import Image from "next/image";
import logo from "../app/favicon.ico";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function FooterFinal() {
  const socialLinks = [
    { icon: <FaLinkedinIn />, id: "linkedin" },
    { icon: <AiFillInstagram />, id: "instagram" },
    { icon: <FaXTwitter />, id: "twitter" },
  ];
  return (
    <footer className="font-light">
      {/* footer top */}
      <section className="flex flex-col lg:flex-row justify-between p-6 lg:py-10 lg:px-16 items gap-6 lg:gap-2.5 border-b-2 border-b-[#C4C4C4] bg-[#1D0617] text-white text-sm">
        <div className="grow grid gap-4 lg:gap-2.5">
          <p>Ready to be a part of something extraordinary?</p>
          <b className="font-semibold lg:text-2xl">Let’s work together to create a difference</b>
        </div>
        <div>
          <Button title="Get In Touch" />
        </div>
      </section>

      <section className="grid p-6 xl:py-10 xl:px-16 items gap-6 xl:gap-5 items-center bg-[#11040E] text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:py-5 gap-10">
          <div className="flex flex-col gap-6">
            <Image src={logo} alt="logo" placeholder="blur" height={72.61} />
            <p className="text-sm">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>

            <ul className="flex gap-6">
              {socialLinks.map((social) => (
                <li
                  key={social.id}
                  className="w-8 h-8 bg-white text-[#151515] rounded-full flex items-center justify-center"
                >
                  <span className="text-sm">{social.icon}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">What We Do</h3>
            <ul className="grid gap-3 text-sm">
              {WhatWeDoData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Company</h3>
            <ul className="grid gap-3 text-sm">
              {companyData.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold">Solutions</h3>
            <ul className="grid gap-3 text-sm">
              {solutionsData.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-5">
          <div className="bg-[#FFFFFF]/6 flex flex-col xl:flex xl:flex-row gap-6 p-4 xl:p-6 rounded-lg text-sm">
            <div className="grid gap-2.5">
              <h3 className="font-bold mb-2 text-md">Registerd Offices</h3>
              <p className="text-[#EF4353]">United Kingdom</p>
              <p>
                07451196 (Registered by Company House) Vine Cottages, 215 North
                Street, Romford, Essex, United Kingdom, RM1 4QA
              </p>
            </div>
            <div className="grid gap-2.5">
              <h3 className="font-bold invisible mb-2 text-md">What We Do</h3>
              <p className="text-[#EF4353]">Nigeria</p>
              <p>
                RC 1048722 (Registered by the Corporate Affairs Commission) 4,
                Muaz Close, Angwar-Rimi
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-md">Contact Informatiion</h3>
              <p className="text-[#EF4353] invisible">Nigeria</p>
              <ul>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-[#EF4353]" />
                  <p>theteam@tobamsgroup.com</p>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#EF4353]" />
                  <p>+447886600748</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="text-[#DDD0DA]/10" />
        <div className="flex flex-wrap max-lg:flex-col justify-around xl:justify-between text-sm gap-3 max-lg:text-center">
          <div className="max-lg:order-1">
            <p>
              Copyright ⓒ Tobams Group, {new Date().getFullYear()}. All rights
              reserved.
            </p>
          </div>
          <div className=" flex flex-wrap xl:gap-10 gap-6 justify-around">
            {["Privacy Policy", "Terms and conditions", "Cookie Policy"].map(
              (link, i) => (
                <p key={i} className="underline">{link}</p>
              ),)}
          </div>
        </div>
      </section>
    </footer>
  );
}
