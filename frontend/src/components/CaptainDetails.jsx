import "react";
import { MdOutlineTimer } from "react-icons/md";
import { IoMdSpeedometer } from "react-icons/io";
import { LuNotebook } from "react-icons/lu";

const CaptainDetails = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <img
            src="https://imgs.search.brave.com/7X6LbkIGdSn8dongwIvfqKmyE_FCAc9XrKVg487t-jE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA4/OTU2NjQ0L3Bob3Rv/L3ByZXR0eS1jb2xv/bWJpYW4td29tYW4u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWpFd1RDTUtTcGpZ/c2FTZmlGSWxpZllu/ZVVwY3p1cmVRRmw4/bzU0M19aakU9"
            alt=""
            className="w-15 object-cover h-15 rounded-full"
          />
          <h4 className="text-lg font-semibold">{"Eliza Beth"}</h4>
        </div>

        <div>
          <h5 className="text-lg font-bold">{"Rs.295.40"}</h5>
          <p className="text-sm font-medium text-gray-600">Earned</p>
        </div>
      </div>

      <div className="flex justify-center gap-5 items-start p-5 mt-5 bg-gray-200 rounded-full">
        <div className="text-center">
          <MdOutlineTimer className="text-3xl mb-2 font-extralight inline-block" />
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-xs text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <IoMdSpeedometer className="text-3xl mb-2 font-extralight inline-block" />
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-xs text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <LuNotebook className="text-3xl mb-2 font-extralight inline-block" />
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-xs text-gray-600">Hours Online</p>
        </div>
      </div>
    </>
  );
};

export default CaptainDetails;
