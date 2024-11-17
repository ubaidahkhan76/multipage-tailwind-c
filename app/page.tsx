import About from "@/app/about/page";
import React from "react";
import MyFooter from "./footer/page";

export default function Home(){
  return(
    <div id="home" className="flex flex-col items-center mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
      <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">home page</h1>
      <p>this is home page</p>
    </div>
  )
}
