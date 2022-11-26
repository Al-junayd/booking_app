import React from "react";
import Featured from "../components/Featured";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PropertyList from "../components/PropertyList";

const homeContainer = "mt-12 flex flex-col items-center gap-8 ";
const homeTitle = "w-[1024px] text-xl ";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className={homeContainer}>
        <Featured />
        <h1 className={homeTitle}>Browse by property type</h1>
        <PropertyList />
        <h1 className={homeTitle}>Home guests love</h1>
      </div>
    </div>
  );
};

export default Home;
