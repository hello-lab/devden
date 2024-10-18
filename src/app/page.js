"use client";
import Handss from "../components/ui/hand";
import Image from "next/image";
import table from "./images/tabl1.png";
import bookcase from "./images/bookshelf.jpg";
import sam from "./images/DEVDEN.png";
import register from "./images/register.png";
import info from "./images/info.png";
import Link from "next/link"
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const scene1 = useRef(null);
  const objs = useRef(null);
  function rooms() {
    if (scene1.current) scene1.current.classList.remove("sadness2");
    if (scene1.current) scene1.current.classList.add("sadness");
    setTimeout(() => {
      if (scene1.current) {
        scene1.current.classList.add("uselessclass1");
        scene1.current.classList.remove("sadness");
      }
    }, 1400);
  }
  function roomsback() {
    if (scene1.current) scene1.current.classList.add("sadness2");
    setTimeout(() => {
      if (scene1.current) scene1.current.classList.remove("sadness");
    }, 1100);
  }

  const hando = useRef(null);
  const deckk = useRef(null);
  const [B, setB] = useState(0);

  return (
    <div className="main" ref={scene1}>
      <div ref={objs} className="maa">
        <Image className="oldman" src={sam}></Image>
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
