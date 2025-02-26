import "react";
import PropTypes from "prop-types";
import { BsBoxArrowInDown } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { BiCurrentLocation } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const ConfirmRidePopup = (props) => {
 const [OTP, setOTP] = useState("")

 const handleSubmit = (e) =>{
  e.preventDefault()
 }

  return (
    <div className="h-screen flex flex-col justify-center ">
      <BsBoxArrowInDown
        className="text-3xl absolute top-17 left-[45%]"
        onClick={() => {
          props.setConfirmRidePopup(true);
        }}
      />
      <h2 className="font-semibold text-2xl mb-5 ml-15">
        Confirm this Ride to start !
      </h2>
      <div className="flex items-center justify-between gap-4 bg-green-200 rounded-2xl p-2 mb-10">
        <div className="flex items-center">
          <img
            src="https://imgs.search.brave.com/7X6LbkIGdSn8dongwIvfqKmyE_FCAc9XrKVg487t-jE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA4/OTU2NjQ0L3Bob3Rv/L3ByZXR0eS1jb2xv/bWJpYW4td29tYW4u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWpFd1RDTUtTcGpZ/c2FTZmlGSWxpZllu/ZVVwY3p1cmVRRmw4/bzU0M19aakU9"
            alt=""
            className="w-15 object-cover h-15 rounded-full"
          />
          <h4 className="text-lg font-semibold ml-2">{"Eliza Beth"}</h4>
        </div>
        <h5 className="font-medium text-lg">2.2 K.M</h5>
      </div>
      <div className="flex flex-col justify-between items-center gap-3">
        <div className="w-full flex flex-col gap-1 ">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <IoLocationSharp className="text-lg" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Bhaktapur,Bagmati</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2  border-gray-200">
            <BiCurrentLocation className="text-lg" />
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Bhaktapur,Bagmati</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2  border-gray-200">
            <MdPayment className="text-lg" />
            <div className="mb-5">
              <h3 className="text-lg font-medium">Rs.193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Bhaktapur,Bagmati</p>
            </div>
          </div>
        </div>

        <form
          action=""
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter OTP"
            value={OTP}
            required
            onChange={(e) =>{
              setOTP(e.target.value)
            }}
            className="bg-[#eee] px-12 py-3 text-base rounded-md border-none outline-none mt-5 w-full"
          />
          <Link
            to={"/captain-riding"}
            className=" flex justify-center w-full mt-5 bg-green-500 p-2 rounded-lg text-white font-semibold-semi"
          >
            Confirm
          </Link>
          <button
            className="w-full bg-red-400  text-zinc-900 p-2 rounded-lg mt-3 font-semibold-semi"
            onClick={() => {
              props.setRidePopup(true);
              props.setConfirmRidePopup(true);
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
ConfirmRidePopup.propTypes = {
  setRidePopup: PropTypes.func.isRequired,
  setConfirmRidePopup: PropTypes.func.isRequired,
};

export default ConfirmRidePopup;
