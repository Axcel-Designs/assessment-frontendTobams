import Button from "./ui/button";
import { FaAngleDown} from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export function MenuButtons() {
  return (
    <div className="flex gap-6 items-center w-93.5 justify-around">
      <Button
      width="w-[167px]"
        icon={
          <div className="rounded-full bg-white flex justify-around items-center h-full text-[#571244] p-1.75">
            <FiUser />
          </div>
        }
        title={"Account"}
        point={<FaAngleDown className="flex justify-around items-center font-light"/>}
      />
      <Button style="bg-[#EF4353] w-[183px]" title={"Take Assessment"}  />
    </div>
  );
}