import React from "react";

const featured = "w-100 max-w-[1024] flex justify-between gap-5 -z-10";
const featuredImg = "w-full h-full object-cover";
const featuredItem =
  "relative text-white h-[250px] w-[325px] rounded-lg overflow-hidden";
const featuredTitles = "absolute bottom-5 left-6";

const Featured = () => {
  return (
    <div className={featured}>
      <div className={featuredItem}>
        <img
          className={featuredImg}
          src="https://cf.bstatic.com/xdata/images/hotel/square600/84981921.webp?k=993c6738a93492a86b224b2d0d99bd4880b8a47f1d64d8daf5b38e2fd44464b1&o=&s=1"
          alt="Dublin"
        />
        <div className={featuredTitles}>
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className={featuredItem}>
        <img
          className={featuredImg}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwBfrs4e8itwiS9ehUDdOW1VxyjzFG5mtgA&usqp=CAU"
          alt="Dublin"
        />
        <div className={featuredTitles}>
          <h1>Yankee</h1>
          <h2>563 Properties</h2>
        </div>
      </div>
      <div className={featuredItem}>
        <img
          className={featuredImg}
          src="https://cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1"
          alt="Dublin"
        />
        <div className={featuredTitles}>
          <h1>Qatar</h1>
          <h2>437 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
