import "react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsBoxArrowInDown } from "react-icons/bs";
import { LocationSerachPanel } from "../components/LocationSerachPanel";
import { VehiclePanel } from "../components/VehiclePanel";
import { ConfirmedVehicle } from "../components/ConfirmedVehicle";
import { LookingforDriver } from "../components/LookingforDriver";
import { WaitingForDriver } from "../components/WaitingForDriver";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panel, setPanel] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const vehiclePanalRef = useRef(null);
  const [confirmPanel, setConfirmPanel] = useState(false)
  const confirmPanelRef = useRef(null)
  const [vehicleFoundPanel, setVehicleFoundPanel] = useState(false)
  const vechileFoundRef = useRef(null)
  const [waitingForDriver, setWaitingForDriver] = useState(false)
  const WaitingForDriverRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panel) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 20,
      });

      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
      });

      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panel]);

 useGSAP(() =>{
  if(vehiclePanel){
    gsap.to(vehiclePanalRef.current, {
      transform:'translateY(0)'
    })
  }else{
    gsap.to(vehiclePanalRef.current,{
      transform:'translateY(100%)'
    })
  }
 
 },[vehiclePanel])

 useGSAP(() =>{
  if(confirmPanel){
    gsap.to(confirmPanelRef.current, {
      transform:'translateY(0)'
    })
  }else{
    gsap.to(confirmPanelRef.current,{
      transform:'translateY(100%)'
    })
  }
 
 },[confirmPanel])

 useGSAP(() =>{
  if(vehicleFoundPanel){
    gsap.to(vechileFoundRef.current, {
      transform:'translateY(0)'
    })
  }else{
    gsap.to(vechileFoundRef.current,{
      transform:'translateY(100%)'
    })
  }
 
 },[vehicleFoundPanel])

 useGSAP(() =>{
  if(waitingForDriver){
    gsap.to(WaitingForDriverRef.current, {
      transform:'translateY(0)'
    })
  }else{
    gsap.to(WaitingForDriverRef.current,{
      transform:'translateY(100%)'
    })
  }
 
 },[waitingForDriver])

  return (
    <div className="h-screen relative overflow-hidden">
      
      <h3 className="w-16 absolute left-3 mb-2 top-3 text-zinc-950 text-xl font-extrabold">YATRI</h3>
     

      <div className="h-screen w-screen">

        {/* Image for temporary */}
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/62fJHBYZQFthft27Cf6cZwiXeXzXCfJDfUWj8KIy7yQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3Jvb3Z5cG9zdC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDcvR29vZ2xl/LVBob3Rvcy1tYXAt/c2VhcmNoLW1hcC12/aWV3LXpvb20tb3V0/LnBuZw"
          alt=""
        />
      </div>

      <div className=" h-screen absolute bottom-0 w-full flex flex-col justify-end ">
        <div className="h-[30%] bg-white p-5 relative">
          <BsBoxArrowInDown
            className="text-4xl ml-[150px] absolute top-0 opacity-0 "
            onClick={() => {
              setPanel(false);
            }}
            ref={panelCloseRef}
          />
          <h4 className="text-2xl font-semibold ">Find A Trip</h4>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="line w-1 absolute top-[47%] h-16 bg-gray-800 rounded-4xl left-7"></div>
            <input
              className="bg-[#eee] px-12 py-3 text-base rounded-md border-none outline-none mt-5 w-full"
              type="text"
              placeholder="Add a pick up location"
              value={pickUp}
              onChange={(e) => {
                setPickUp(e.target.value);
              }}
              onClick={() => {
                setPanel(true);
              }}
            />
            <input
              className="bg-[#eee] px-12 py-3 text-base mt-5 rounded-md border-none outline-none w-full"
              type="text"
              placeholder="Enter Your Destination"
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPanel(true);
              }}
            />
          </form>
        </div>

        <div ref={panelRef} className="h-0 bg-white ">
          <LocationSerachPanel setPanel={setPanel} setVehiclePanel={setVehiclePanel} />
        </div>
      </div>
       
      <div ref={vehiclePanalRef}   className=" z-10 fixed bottom-0 translate-y-full px-3 py-8 bg-white w-full pt-10">
       <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmPanel={setConfirmPanel}  /> 
      </div>
 
      <div ref={confirmPanelRef} className=" z-10 fixed bottom-0 translate-y-full px-3 py-6 bg-white w-full pt-10">
       <ConfirmedVehicle setConfirmPanel={setConfirmPanel} setVehicleFoundPanel={setVehicleFoundPanel}/>
      </div>

      <div ref={vechileFoundRef} className=" z-10 fixed bottom-0 translate-y-full px-3 py-6 bg-white w-full pt-10">
         <LookingforDriver setVehicleFoundPanel={setVehicleFoundPanel} />
      </div>

      <div ref={WaitingForDriverRef} className=" z-10 fixed bottom-0 translate-y-full px-3 py-6 bg-white w-full pt-10">
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>

    </div>
  );
};

export default Home;
