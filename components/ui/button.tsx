
interface ButtonProps {
  icon?: React.ReactNode;
  title: string;
  point?: React.ReactNode;
  style?:string;
  width?:string;
}

export default function Button({ icon, title, point, width, style='bg-[#571244]' }: ButtonProps) {
  return (
    <button className={`${style} ${width} text-white py-2 px-4 flex items-center justify-center gap-3 rounded-sm cursor-pointer h-12 font-semibold text-lg`}>
      {icon && <div>{icon}</div>}
      <div className="flex gap-1 items-center justify-center">
      <div>{title}</div>
        {point && <div>{point}</div>}
      </div>
    </button>
  );
}
