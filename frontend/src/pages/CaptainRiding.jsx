import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { FaArrowsLeftRightToLine } from "react-icons/fa6";
import { AiOutlineCaretUp } from "react-icons/ai";
import { useState,useRef } from "react";
import FinishRide from "../components/FinishRide";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";


const CaptainRiding = () => {
  
  const [finishRide, setFinishRide] = useState(true)
  const finishRideRef = useRef(null)

  useGSAP(() => {
    if (finishRide) {
      gsap.to(finishRideRef.current, {
        transform: "translateY(100%)",
      });
    } else {
      gsap.to(finishRideRef.current, {
        transform: "translateY(0%)",
      });
    }
  }, [finishRide]);
  return (
    <div className="h-screen">
      <div>
        <h3 className="w-16 absolute left-3 mb-2 top-3 text-zinc-950 text-xl font-extrabold">
          YATRI
        </h3>
        <Link
          to={"/captain-logout"}
          className="fixed right-2  h-10 w-10 bg-white flex items-center justify-center rounded-full m-2"
        >
          <IoIosLogOut className="text-2xl font-bold" />
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/736x/1b/af/a1/1bafa1872f09a318f36eddc6c538c0c8.jpg"
          alt=""
        />
      </div>

      <div className="h-1/5  p-6 bg-yellow-300 relative " onClick={() =>{
        setFinishRide(false)
      }}>
        <AiOutlineCaretUp className="text-3xl absolute top-0 left-[45%]" />

        <div className="smPanel mt-5 flex justify-between">
          <h4 className="text-xl font-semibold">4 K.M Away</h4>
          <FaArrowsLeftRightToLine className="text-4xl inline-block " />
          <Link className="flex justify-center items-center bg-green-500 px-2 h-10 py-2 rounded-lg  text-zinc-950 font-semibold">
            Complete Ride
          </Link>
        </div>
      </div>

      <div
        ref={finishRideRef}
        className=" z-10 fixed bottom-0 translate-y-full px-3 py-6 bg-white w-full pt-10"
      >
        <FinishRide setFinishRide={setFinishRide} />
      </div>
    </div>
  );
};

export default CaptainRiding;
