import React, { useState } from "react";
import { Menu, X, CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  function handleToggle() {
    // if (toggle===false){
    //     setToggle(true)
    // } else if (toggle===true){
    //     setToggle(false)
    // }
    setToggle(!toggle);
  }
  return (
    <div className="flex gap-5 rounded-full w-[90px] h-[40px]  border border-black justify-around py-2">
      <div className="">
        {" "}
        {/* <Menu /> <CircleUserRound /> */}
        <div onClick={handleToggle}>
          {toggle ? <X /> : <Menu />}
          {toggle ? (
            <div className="absolute left-0 bg-red-500 h-[500px] w-[100px] top-0">
              <div className="flex flex-col">
              <Link to="signup"> Sign up</Link>
              <Link to="login">Log in</Link>
              <Link to="airbnb"> Airbnb-home</Link>
              <Link to="help">Help-center</Link>
            
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <CircleUserRound />
    </div>
  );
}

export default NavBar;
