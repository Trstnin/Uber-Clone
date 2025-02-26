import "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainLogin = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState("");


const navigate = useNavigate()

 const handleSubmit = async (e) =>{
      e.preventDefault();
      const captainData = {
        email:email,
        password:password
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/captain/login`, captainData);

      if(response.status === 200){
        const data = response.data;
         localStorage.setItem('token' , data.token);

         navigate('/captain-home');
      }

      setEmail('');
      setPassword('')
 }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <Link to={'/'}>
        <h3 className="w-16 absolute left-3 mb-2 top-1 text-zinc-950 text-xl font-extrabold">YATRI</h3>
       </Link>
       
       
        <form onSubmit={handleSubmit} className="mt-3">
          <h3 className="text-lg font-medium mb-2">{"What's your Email?"}</h3>

          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="bg-[#eeeeee] py-4 px-2 mb-7 rounded w-full text-lg placeholder:text-base outline-none"
            required
            placeholder="email@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>

          <input
            type="password"
            value={password}
            onChange={(e) =>{
               setPassword(e.target.value)
            }}
            className="bg-[#eeeeee] py-4 px-2 mb-7 font-semibold rounded w-full text-lg placeholder:text-base outline-none"
            required
            placeholder="Password"
          />

          <button className="bg-[#111] text-white rounded-2xl py-4 px-2 mb-3  w-full ">
            Login as Captain
          </button>

        </form>
        <p className="text-center ">Join a fleet? <Link to={'/captain-signup'} className="text-blue-600" >Register as a Captain</Link></p>

      </div>

      <div>
        <Link to={'/login'} className="bg-[#d5622d] flex justify-center items-center text-white rounded-2xl py-4 px-2 mb-7  w-full ">Sign in as User</Link>
      </div>
    </div>
    
  );
};

export default CaptainLogin;
