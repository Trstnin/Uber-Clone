import "react";
import PropTypes from 'prop-types';
import { MdShareLocation } from "react-icons/md";

export const LocationSerachPanel = (props) => {
 

  //sample location array
  const location = [
    "Mahamanjushree, Changunarayan-8,Bhaktapur",
    "Majuwa, Changunarayan-7,Bhaktapur",
    "Nagarkot, Changunarayan-6,Bhaktapur",
    "Duwakot, Changunarayan-1,Bhaktapur",
  ];

  return (
    <div>
      {/* this is just a sample data */}
      {location.map((loc) => {
        return (
          <div onClick={
            () =>{
             props.setVehiclePanel(true)
             props.setPanel(false)
            }
          } key={loc} className="flex my-6 active:border-2 p-2 rounded-2xl">
            <MdShareLocation className="text-4xl mr-2 bg-[#eee] h-12 w-12 rounded-full" />
            <h4 className="font-medium">
              {loc}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

LocationSerachPanel.propTypes = {
  setVehiclePanel: PropTypes.func.isRequired,
  setPanel: PropTypes.func.isRequired
};
