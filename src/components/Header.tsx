import React from "react";
import NavBar from "./NavBar";
import {  Globe } from "lucide-react";
import img from "../assets/Vector.png"
import { Link } from "react-router-dom";
import search from "../assets/search.png"

function Header() {
  return (
    <div className="flex justify-around">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="hidden md:block">
        <div className="rounded-full w-[300px] h-[40px] border border-black ">
          <div className="flex flex-col-3  divide-x pt-2  ">
            <p className="w-1/3 pl-2 mr-3">Anywhere</p>
            <p className="w-1/3 pl-2 mr-2 ">Anyweek</p>

            <div className="flex gap-3 justify-around">
              <div>
                <form action="" className="  ">
                  <input
                    type="text"
                    placeholder="Add guests"
                    className=" h-full w-full pl-1 rounded-md bg-transparent "
                  />
                </form>
              </div>
              <div>
                <img src={search} className="w-[60px]" alt="" />
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  gap-10 hidden md:block">
        <div className=" flex gap-5  ">
          <Link to="/airbnb">Airbnb your home</Link>
          <Globe />
        </div>
       {/* <div>
       <NavBar />
       </div> */}
      </div>
      <NavBar />
    </div>
  );
}

export default Header;
