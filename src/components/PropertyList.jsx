import React from "react";

const pList = "w-full max-w-[1024px] flex justify-between gap-4";
const pListItem = "rounded-md overflow-hidden cursor-pointer flex-1 ";
const pListTitles = "";
const h2 = "font-light text-sm";
const h1 = "text-lg";
const pListImg = "w-full h-[150px] object-cover";

const PropertyList = () => {
  return (
    <div className={pList}>
      <div className={pListItem}>
        <img
          className={pListImg}
          src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
          alt=""
        />
        <div className={pListTitles}>
          <h1 className={h1}>Hotels</h1>
          <h2 className={h2}>233 Hotels</h2>
        </div>
      </div>

      <div className={pListItem}>
        <img
          className={pListImg}
          src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="
          alt=""
        />
        <div className={pListTitles}>
          <h1 className={h1}>Apartments</h1>
          <h2 className={h2}>868 Apartments</h2>
        </div>
      </div>
      <div className={pListItem}>
        <img
          className={pListImg}
          src="https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
          alt=""
        />
        <div className={pListTitles}>
          <h1 className={h1}>Resorts</h1>
          <h2 className={h2}>180 Resorts</h2>
        </div>
      </div>
      <div className={pListItem}>
        <img
          className={pListImg}
          src="https://cf.bstatic.com/xdata/images/hotel/square600/109319008.webp?k=b8fc6fbc8d874cffedf49c0080f14933a20995b040dc02aeaee3afad1e79c670&o=&s=1"
          alt=""
        />
        <div className={pListTitles}>
          <h1 className={h1}>Villas</h1>
          <h2 className={h2}>466 Villas</h2>
        </div>
      </div>
      <div className={pListItem}>
        <img
          className={pListImg}
          src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1"
          alt=""
        />
        <div className={pListTitles}>
          <h1 className={h1}>Cabins</h1>
          <h2 className={h2}>466 Cabins</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
