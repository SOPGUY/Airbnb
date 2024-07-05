import React from "react";
import { Sailboat, Piano, HandPlatter, House, Castle } from "lucide-react";
import { MdPool } from "react-icons/md";
import Products from "./Products";
import Frame from "./Frame";

function Hero() {
  return (
    <div className="bg-[rgb(255,255,255)]">
      <Frame />
      <Products />
      <div className="mx-auto pl-[90px] flex  flex-row justify-center">
        <p className="text-xl font-bold pb-5 ">
          Continue exploring amazing views
        </p>{" "}
        <br />
      </div>
      <div className="flex justify-center pb-10">
        {" "}
        <button className="h-[50px] w-[200px] rounded-md bg-black text-white  ">
          show more{" "}
        </button>
      </div>
    </div>
  );
}

export default Hero;
