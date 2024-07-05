import React from "react";
import { X } from "lucide-react";
import Button from "../components/Button";
import Links from "../components/Links";
function SignUp() {
  return (
    <div className="px-2">
      <div className="flex pt-5 pl-5 gap-10 py-5">
        <X />
        <h1 className="font-semibold sm:mx-auto text-xl">Log in or sign up</h1>
      </div>
      <hr />
      <p className="text-xl pl-5 sm:text-3xl font-semibold pt-5 pb-5">
        Welcome to Airbnb
      </p>
      <div className="h-[100px] w-[300px] border-2 rounded-md mx-auto sm:w-full ">
        <div className="pl-3">
          <form action="">
            <input
              type="text"
              className="w-full outline-none"
              placeholder="country/region"
      
      />
            <p className="pb-2">United Kingdom (+44)</p>
          </form>
        </div>
        <hr />
        <div className="pl-3">
          <form action="">
            <input
              type="number"
              className="w-full"
              placeholder="Phone number"
            />
          </form>
        </div>
        <p className="pt-5">
          we'll call or text you to confirm your number. Standard message and
          data rates apply. <u className="font-semibold">Privacy  Policy</u>{" "}
        </p>
        <div className="flex justify-center pt-5">
          <Button />
        </div>
        <Links/>
      </div>
    
    </div>
  );
} 

export default SignUp;
