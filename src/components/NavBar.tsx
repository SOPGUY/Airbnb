import { Menu, X, CircleUserRound } from "lucide-react";
import { useState } from "react";
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
    <div onClick={handleToggle}className="flex gap-5 rounded-full w-[90px] h-[40px]  border border-black justify-around py-2">
      <div >
        {" "}
        {/* <Menu /> <CircleUserRound /> */}
        <div>
          {toggle ? <X /> : <Menu />}
          {toggle ? (
            <div className=" h-[100px] w-[150px] bg-white z-10 absolute shadow-xl pl-2 mt-5">
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
