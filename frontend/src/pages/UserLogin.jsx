import "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState("");
 const [userData, setUserData] = useState({});


 const handleSubmit = (e) =>{
      e.preventDefault();
      setUserData({
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
          className=" w-20 h-12  mb-5"
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC9lZFwvNTUwOVwvNmNmOGVmM2YzMjFkMTA3YThmZGVjNjY1NjJlMmVmMzctMTYyMDM3Nzc0OC5haSJ9:postmates:9KZWqmYNXpeGs6pQy4UCsx5EL3qq29lhFS6e4ZVfQrs?width=2400"
          alt=""
        />
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium mb-2">{"What's Your Name?"}</h3>

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
            Login
          </button>

        </form>
        <p className="text-center ">New here? <Link to={'/signup'} className="text-blue-600" >Create New Account</Link></p>

      </div>

      <div>
        <Link to={'/captain-login'} className="bg-[#10b461] flex justify-center items-center text-white rounded-2xl py-4 px-2 mb-7  w-full ">Sign in as Captain</Link>
      </div>
    </div>
    
  );
};

export default UserLogin;
