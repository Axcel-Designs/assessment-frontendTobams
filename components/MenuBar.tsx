import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

const navData = [
  { title: "About", link: "", sub: true },
  { title: "What We Do", link: "", sub: true },
  { title: "Jobs", link: "", sub: true },
  { title: "Projects", link: "" },
  { title: "TG Academy", link: "" },
  { title: "Strategic Partnership", link: "" },
  { title: "Pricing", link: "" },
  { title: "Book A Consultation", link: "" },
];

export default function NavLinks() {
  return navData.map((item, i) => (
    <Link
      href={item.link}
      key={i}
      replace
      className="hover:text-[#571244] text-[#151515] border-b border-transparent transition-all duration-300 hover:border-b-[#571244] flex items-center justify-center"
    >
      <div className="text-lg">{item.title}</div>
      {item.sub && (
        <FiChevronDown className="ml-1 w-5 h-5" />
      )}
    </Link>
  ));
}