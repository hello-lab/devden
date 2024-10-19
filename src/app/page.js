"use client";

import Image from "next/image";

import sam from "./images/DEVDEN.png";
import register from "./images/register.png";
import info from "./images/info.png";
import Link from "next/link"
import { useRef, useEffect, useState } from "react";

export default function Home() {
 
  return (
    <div className="main" >
      <div  className="maa">
        <div>
        <Image className="oldman" src={sam}></Image>
        
        </div>
       <div className="forms">
       <Link target="_blank" href="https://forms.gle/KdriE7MhUhjA7eW38">
       <Image className="register" src={register}></Image>
       </Link>
       <Link target="_blank" href="https://drive.google.com/file/d/1fu7lfTomrGil5gE8b7zQj0BHWnLBUd-V/view?usp=sharing">
           
              <Image className="info" src={info} />
            
          </Link>
       </div>

       
        
        

       
      </div>
    </div>
  );
}
