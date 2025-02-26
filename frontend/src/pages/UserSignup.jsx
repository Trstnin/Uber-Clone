import "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { UserDataContext } from "../context/userContext";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setPassword] = useState("");

  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser ={
  
        firstName: firstName,
        lastName: lastName,
      
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/register`, newUser);
   
    if(response.status == 200){
      const data = response.data
     setUser(data.user) 
     localStorage.setItem('token' , data.token)
     navigate('/home')
    }

    setEmail("");
    setPassword("");
    setfirstName("");
    setlastName("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
      <Link to={'/'}>
       <h3 className="w-16 absolute left-3 mb-2 top-1 text-zinc-950 text-xl font-extrabold">YATRI</h3>
       </Link>
        <form onSubmit={handleSubmit} className="mt-2">
          <h3 className="text-base font-medium mb-2">{"What's your Name?"}</h3>
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              value={firstName}
              className="bg-[#eeeeee] py-4 px-2  rounded w-1/2 text-base placeholder:text-sm outline-none"
              required
              placeholder="Your First Name"
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

          <h3 className="text-base font-medium mb-2">{"What's your Email?"}</h3>

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

          <button className="bg-[#111] text-white rounded-2xl py-4 px-2 mb-3  w-full ">
            Register
          </button>
        </form>
        <p className="text-center ">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-600">
            Login Here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-[10px] leading-tight">
          By proceeding you consent to get messages, including by automated
          means, from Uber and its affilates to the email provided
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
