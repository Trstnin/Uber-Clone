import "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState("");
 const [captainData, setCaptainData] = useState({});


 const handleSubmit = (e) =>{
      e.preventDefault();
      setCaptainData({
        email:email,
        password:password
      })
      setEmail('');
      setPassword('')
 }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className=" w-20 h-15  mb-5"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form onSubmit={handleSubmit}>
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
