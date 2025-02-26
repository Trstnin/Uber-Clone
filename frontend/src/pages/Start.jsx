import "react";
import {Link} from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";


const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1566243052021-d39ace07c392?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen  w-full flex justify-between flex-col pt-2 ">
       <Link to={'/'}>
       <h3 className="w-16 absolute left-5 top-5 text-white text-xl font-extrabold">YATRI</h3>
       </Link>
        
        <div className="bg-white py-4 px-4 pb-7">
          <h1 className="text-3xl font-bold">Get started with Yatri</h1>
          <Link to={'/login'} className=" flex items-center w-full bg-black py-3 text-white rounded-xl mt-5 text-2xl justify-between"
          
          >
           <p className="ml-6">Continue</p>  
            <HiArrowRight className="mr-5 text-2xl"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
