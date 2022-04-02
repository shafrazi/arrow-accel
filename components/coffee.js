import React from "react";

function coffee() {
  return (
    <div className="bg-black w-full  py-16 px-24 flex flex-col">
      <div>
        <h1 className="text-white text-4xl w-3/4">Let's do coffee</h1>
        <p className="text-white flex justify-end text-sm">We love a good cup of coffee, on a sunny<br/> terrace in Amsterdam Centre for instance!<br/> Let's discuss your bold ideas or outrageous<br/> plans and determine your new course of<br/> action from there. </p>
        <div class="flex flex-col">
        <button className="text-white mt-18 border uppercase text-xs w-3/12 p-2 ">book appointment</button>
        <button className="text-white mt-18 border uppercase text-xs w-3/12 p-2 mt-6 ">call us</button>
    </div>
       
        
        
      </div>
    </div>
  );
}

export default coffee;
