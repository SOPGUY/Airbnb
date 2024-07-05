import React from "react";
import face from "../assets/facebook.png";
import gog from "../assets/google.png";
import app from "../assets/apple.png";
import mai from "../assets/mail.png";
function Links() {
  return (
    <div>
      <div className="pt-5 flex flex-col gap-5">
        <div className="flex border border-black rounded-md gap-10 justify-around w-[300px] sm:w-full">
          <div className="pl-4">
            <img src={face} className="h-[50px]" alt="facebookIcon" />
          </div>
          <p className="mx-auto text-center py-4">Continue with Facebook</p>
        </div>
        <div className="flex border border-black rounded-md gap-10 justify-around w-[300px] sm:w-full">
          <div className="pl-4">
            <img src={gog} className="h-[50px]" alt="facebookIcon" />
          </div>
          <p className="mx-auto text-center py-4">Continue with Google</p>
        </div>
        <div className="flex border border-black rounded-md gap-10 justify-around w-[300px] sm:w-full">
          <div>
            <img src={app} className="h-[50px]" alt="facebookIcon" /> 
          </div>
          <p className="mx-auto text-center py-4">Continue with Apple</p>
        </div>
        <div className="flex border border-black rounded-md gap-10 justify-around w-[300px] sm:w-full">
          <div className="pl-4">
            <img src={mai} className="h-[50px]" alt="facebookIcon" />
          </div>
          <p className="mx-auto text-center py-4">Continue with email</p>
        </div>
      </div>
    </div>
  );
}

export default Links;
