import "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captainData = {
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    console.log(captainData);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/captain/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);

      navigate("/captain-home");
    }

    setEmail("");
    setPassword("");
    setfirstName("");
    setlastName("");
    setVehicleCapacity("");
    setVehicleType("");
    setVehiclePlate("");
    setVehicleColor("");
  };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className=" w-20 h-12  mb-5"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-base font-medium mb-2">
            {"What's our Captain's Name?"}
          </h3>
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              value={firstName}
              className="bg-[#eeeeee] py-4 px-2  rounded w-1/2 text-base placeholder:text-sm outline-none"
              required
              placeholder="Captain's First Name"
            />

            <input
              type="text"
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              value={lastName}
              className="bg-[#eeeeee] py-4 px-2  w-1/2 rounded text-base placeholder:text-sm outline-none"
              required
              placeholder="Your Last Name "
            />
          </div>

          <h3 className="text-base font-medium mb-2">
            {"What's our Captain's Email?"}
          </h3>

          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="bg-[#eeeeee] py-4 px-2 mb-5 rounded w-full text-base placeholder:text-sm outline-none"
            required
            placeholder="email@example.com"
          />

          <h3 className="text-base font-medium mb-2">Enter Password</h3>

          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="bg-[#eeeeee] py-4 px-2 mb-5 font-semibold rounded w-full text-base placeholder:text-sm outline-none"
            required
            placeholder="Password"
          />

          <h3 className="text-base font-medium mb-2">Vehicle Details</h3>

          <div className="flex gap-2">
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] py-4 px-2 mb-5 rounded w-1/2 text-base outline-none"
              required
            >
              <option value="">Vehicle Type</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
              <option value="Scooter">Scooter</option>
            </select>

            <input
              type="text"
              onChange={(e) => setVehicleColor(e.target.value)}
              value={vehicleColor}
              className="bg-[#eeeeee] py-4 px-2 mb-5 rounded w-1/2 text-base placeholder:text-sm outline-none"
              required
              placeholder="Vehicle Color"
            />
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              onChange={(e) => setVehiclePlate(e.target.value)}
              value={vehiclePlate}
              className="bg-[#eeeeee] py-4 px-2 mb-5 rounded w-1/2 text-base placeholder:text-sm outline-none"
              required
              placeholder="Vehicle Plate Number"
            />

            <input
              type="number"
              onChange={(e) => setVehicleCapacity(e.target.value)}
              value={vehicleCapacity}
              className="bg-[#eeeeee] py-4 px-2 mb-5  rounded w-1/2 text-base placeholder:text-sm outline-none"
              required
              placeholder="Vehicle Capacity"
            />
          </div>

          <button className="bg-[#111] text-white rounded-2xl py-4 px-2 mb-3  w-full ">
            Register As Captain
          </button>
        </form>
        <p className="text-center ">
          Already have an account?{" "}
          <Link to={"/captain-login"} className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight m-5">
          By proceeding you consent to get messages, including by automated
          means, from Uber and its affilates to the email provided
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
