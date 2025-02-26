import "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { BiCurrentLocation } from "react-icons/bi";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to={'/home'} className="fixed right-2  h-10 w-10 bg-white flex items-center justify-center rounded-full m-2" >
            <MdHome className="text-xl font-bold" />
        </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://i.pinimg.com/736x/1b/af/a1/1bafa1872f09a318f36eddc6c538c0c8.jpg"
          alt=""
        />
      </div>

      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between text-right -mt-1 -mb-1">
          <img
            src="https://imgs.search.brave.com/9Iwc76zV-f3oBSpMhCfkqszkiPnNb6dGixbc0a35BvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzIwMS0yMDEx/NzQ0X2h5YnJpZC1j/YXItcG5nLWNoZXZy/b2xldC1tYWxpYnUt/MjAxNC13aGl0ZS5w/bmc"
            alt=""
            className="h-12"
          />
          <div>
            <h2 className="text-lg font-medium">Trishtan</h2>
            <h4 className="text-xl font-semibold">MP04 TI 1234</h4>
            <p className="text-sm text-gray-600">Mercedes G-WAGON AMG</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center gap-3 mt-6">
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
          </div>
        </div>

        <button className=" height-15 bg-green-400 w-full p-2 mt-5  rounded-xl text-20 font-medium">Make A Payment</button>
      </div>
    </div>
  );
};

export default Riding;
