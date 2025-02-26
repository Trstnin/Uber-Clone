import "react";
import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { BsBoxArrowInDown } from "react-icons/bs";

export const VehiclePanel = (props) => {
  return (
    <div>
      <BsBoxArrowInDown
        className="text-3xl absolute top-0 left-[45%]"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      />
      <h2 className="font-semibold text-2xl mb-5 ml-9">Choose a Vehicle :</h2>

      <div
      onClick={() =>{
        props.setConfirmPanel(true)
        props.setVehiclePanel(false);

      }}
      className="Cars flex justify-between items-center w-full p-3 active:border-2 rounded-2xl mb-2">
        <img
          src="https://imgs.search.brave.com/9Iwc76zV-f3oBSpMhCfkqszkiPnNb6dGixbc0a35BvI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzIwMS0yMDEx/NzQ0X2h5YnJpZC1j/YXItcG5nLWNoZXZy/b2xldC1tYWxpYnUt/MjAxNC13aGl0ZS5w/bmc"
          alt=""
          className="w-12 rounded-full "
        />
        <div className=" w-1/2 p-2">
          <h4 className="flex font-medium text-base">
            Cars{" "}
            <span>
              <FaUser className="text-base ml-2 mt-1" />
            </span>
            4{" "}
          </h4>
          <h5 className="font-medium text-sm">2 mins Away </h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable Cars Rides
          </p>
        </div>
        <h3 className="text-lg font-semibold "> Rs 193.00 </h3>
      </div>

      <div className="Bikes flex justify-between items-center w-full p-3 active:border-2 rounded-2xl mb-2">
        <img
          src="https://imgs.search.brave.com/1bF06VkKfFDRK4ZlP2Havbiw_G5tR-69Wx3REUKsQ_M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzI5LzAyLzU3/LzM2MF9GXzI5MDI1/NzAyX1RvUGh5TzB3/UGZXN3labHQ4VDZn/dkViendQcjRPWmlo/LmpwZw"
          alt=""
          className="w-12 rounded-full "
        />
        <div className=" ml-2 w-1/2 p-2">
          <h4 className="flex font-medium text-base">
            Moto{" "}
            <span>
              <FaUser className="text-base ml-2 mt-1" />
            </span>
            2{" "}
          </h4>
          <h5 className="font-medium text-sm">4 mins Away </h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable Bikes Rides
          </p>
        </div>
        <h3 className="text-lg font-semibold "> Rs 90.00 </h3>
      </div>

      <div className="Scooter flex justify-between items-center w-full p-3 active:border-2 rounded-2xl mb-2">
        <img
          src="https://imgs.search.brave.com/wMS78GZRdL5ydG7gNwbvkWlyLP8H6CQuCnZIiaR1r7E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI2/MjYyMzMxL3Bob3Rv/L29sZC1yZXRyby1y/ZWQtaXRhbGlhbi1z/Y29vdGVyLW9uLXdo/aXRlLWJhY2tncm91/bmQtd2l0aC1wYXRo/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz13M0tmLTIwVE1P/eXdRcnVIR1pCdGVT/SlpXT3llTUNNT1hU/XzlPNWtvTG1RPQ"
          alt=""
          className="w-12 rounded-full "
        />
        <div className=" ml-2 w-1/2 p-2">
          <h4 className="flex font-medium text-base">
            Scooter{" "}
            <span>
              <FaUser className="text-base ml-2 mt-1" />
            </span>
            1{" "}
          </h4>
          <h5 className="font-medium text-sm">5 mins Away </h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable Scooter Rides
          </p>
        </div>
        <h3 className="text-lg font-semibold "> Rs 70.00 </h3>
      </div>
    </div>
  );
};

VehiclePanel.propTypes = {
  setVehiclePanel: PropTypes.func.isRequired,
  setConfirmPanel: PropTypes.func.isRequired,

};
