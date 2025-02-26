import "react";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const [ridePopup, setRidePopup] = useState(true);
  const ridePopupRef = useRef(null);
  const [confirmRidePopup, setConfirmRidePopup] = useState(true);
  const confirmRidePopupRef = useRef(null);

  useGSAP(() => {
    if (ridePopup) {
      gsap.to(ridePopupRef.current, {
        transform: "translateY(100%)",
      });
    } else {
      gsap.to(ridePopupRef.current, {
        transform: "translateY(0%)",
      });
    }
  }, [ridePopup]);

  useGSAP(() => {
    if (confirmRidePopup) {
      gsap.to(confirmRidePopupRef.current, {
        transform: "translateY(100%)",
      });
    } else {
      gsap.to(confirmRidePopupRef.current, {
        transform: "translateY(0%)",
      });
    }
  }, [confirmRidePopup]);

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

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/736x/1b/af/a1/1bafa1872f09a318f36eddc6c538c0c8.jpg"
          alt=""
        />
      </div>

      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      <div
        ref={ridePopupRef}
        className=" z-10 fixed bottom-0 translate-y-full px-3 py-6 bg-white w-full pt-10"
      >
        <RidePopup
          setRidePopup={setRidePopup}
          setConfirmRidePopup={setConfirmRidePopup}
        />
      </div>

      <div
        ref={confirmRidePopupRef}
        className=" z-10 fixed bottom-0 translate-y-full px-3 py-6 bg-white w-full pt-10"
      >
        <ConfirmRidePopup
          setConfirmRidePopup={setConfirmRidePopup}
          setRidePopup={setRidePopup}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
