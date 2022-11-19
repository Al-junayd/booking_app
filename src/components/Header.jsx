import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const headerData = [
  {
    title: "Stays",
    icon: faBed,
    isActive: true,
  },
  {
    title: "Flights",
    icon: faPlane,
    isActive: false,
  },
  {
    title: "Car Rentals",
    icon: faCar,
    isActive: false,
  },
  {
    title: "Attractions",
    icon: faBed,
    isActive: false,
  },
  {
    title: "Airports taxis",
    icon: faTaxi,
    isActive: false,
  },
];

const header = "bg-primary text-white flex justify-center ";
const headerContainer = "w-full max-w-[1024px] mt-4 mb-20 ";
const headerList = "flex gap-10";
const headerListItem = " flex items-center gap-2.5";
const activeItem = "border-solid border-2 divide-white rounded-full p-2.5";

const Header = () => {
  return (
    <div className={header}>
      <div className={headerContainer}>
        <div className={headerList}>
          {headerData.map((item, id) => {
            return !item.isActive ? (
              <div index={id} className={headerListItem}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.title}</span>
              </div>
            ) : (
              <div className={`${headerListItem}  ${activeItem}`}>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
