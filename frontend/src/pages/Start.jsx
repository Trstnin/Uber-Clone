import "react";
import {Link} from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";


const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1566243052021-d39ace07c392?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen  w-full flex justify-between flex-col pt-2 ">
        <img
          className="w-18 ml-2"
          src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoicG9zdG1hdGVzXC9hY2NvdW50c1wvODRcLzQwMDA1MTRcL3Byb2plY3RzXC8yN1wvYXNzZXRzXC8xN1wvNTUxMFwvMmM3MTkyZDM1NGQ0YjA2YWFhZTgzZDc5Yzc2MzYwNWMtMTYyMDM3Nzc0OC5haSJ9:postmates:cvkkT2vHrzRiGiujqpqbVFn9z8dn773yTgVOCePXowk?width=2400"
          alt=""
        />
        <div className="bg-white py-4 px-4 pb-7">
          <h1 className="text-3xl font-bold">Get started with Uber</h1>
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
