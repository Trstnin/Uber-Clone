import { BsBoxArrowInDown } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { BiCurrentLocation } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import PropTypes from "prop-types";

export const WaitingForDriver = (props) => {
  return (
    <div>
      <BsBoxArrowInDown
        className="text-3xl absolute top-0 left-[45%]"
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
      />

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
            <div>
              <h3 className="text-lg font-medium">Rs.193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Bhaktapur,Bagmati</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WaitingForDriver.propTypes = {
  setWaitingForDriver: PropTypes.func.isRequired,
};
