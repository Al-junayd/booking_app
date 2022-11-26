import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";

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

const header = "bg-primary text-white flex justify-center relative ";
const headerContainer = "w-full max-w-[1024px] mt-4 mb-20 ";
const headerList = "flex gap-10 mb-12";
const headerListItem = " flex items-center gap-2.5";
const activeItem = "border-solid border-2 divide-white rounded-full p-2.5";
const headerTitle = "";
const headerDescription = "my-5 ";
const headerBtn =
  "bg-[#0071c2] text-white fw-500 p-2.5 cursor-pointer border-none";
const headerSearch =
  "h-8 bg-white border-main border-solid border-2 p-6 flex items-center absolute -bottom-6 w-full max-w-[1024px] rounded justify-around";
const headerSearchItem = "flex items-center gap-2.5 ";
const headerIcon = "text-lightGray";
const headerSearchInput = "border-none outline-none text-primary";
const headerSearchText = "text-lightGray";
const dateStyles = "absolute top-14";
const optionsList =
  "text-lightGray absolute top-12 bg-white drop-shadow-xl rounded ";
const optionsItem = "w-[200px] flex justify-between m-3";
const optionsText = "";
const optionCounterButton =
  "text-primary w-8 h-8 border border divide-primary bg-white";
const optionCounterNum = "";
const optionCounter = "flex items-center gap-3 color-dark text-xs";
const listMode = "";

const Header = ({ type }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState([
    {
      title: "Adults",
      count: 0,
    },
    {
      title: "Children",
      count: 1,
    },
    {
      title: "rooms",
      count: 0,
    },
  ]);

  const handleAdd = (index) => () => {
    let tempOptions = options.slice();
    tempOptions[index].count += 1;
    setOptions(tempOptions);
  };

  const handleSubtract = (index) => () => {
    let tempOptions = options.slice();
    tempOptions[index].count -= 1;
    setOptions(tempOptions);
  };
  // // const handleSubtract = (index) => {
  //   setOptions((prevOptions) => ({ ...prevOptions, options[index].count :options[index].count -= 1  }))

  // };

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className={header}>
      <div
        className={`${type} === "list" ? ${headerContainer} ${listMode}: ${headerContainer} `}
      >
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
        {type !== "list" && (
          <>
            <h1 className={headerTitle}>
              A lifetime of discounts? It's Genius
            </h1>
            <p className={headerDescription}>
              Get rewarded for your travels - unlock instant savings of 10% or
              more with a free Easytrip account
            </p>
            <button className={headerBtn}>Sign in / Register</button>

            <div className={headerSearch}>
              <div className={headerSearchItem}>
                <FontAwesomeIcon icon={faBed} className={headerIcon} />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className={headerSearchInput}
                />
              </div>
              <div className={headerSearchItem}>
                <FontAwesomeIcon icon={faCalendarDays} className={headerIcon} />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className={headerSearchText}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}  `}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className={dateStyles}
                  />
                )}
              </div>
              <div className={headerSearchItem}>
                <FontAwesomeIcon icon={faPerson} className={headerIcon} />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className={headerSearchText}
                >{`${options[0].count} adult · ${options[1].count} children · ${options[2].count} rooms`}</span>
                <div className={optionsList}>
                  {openOptions &&
                    options.map((item, index) => {
                      return (
                        <div key={index} className={optionsItem}>
                          <div className={optionsText}>{item.title}</div>
                          <div className={optionCounter}>
                            <button
                              // disabled={}
                              className={optionCounterButton}
                              onClick={handleSubtract(index)}
                              name={item.title}
                            >
                              -
                            </button>
                            <span className={optionCounterNum}>
                              {options[index].count}
                            </span>
                            <button
                              // disabled={}
                              className={optionCounterButton}
                              onClick={handleAdd(index)}
                              name={item.title}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className={headerSearchItem}>
                <button className={headerBtn}>Search</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
