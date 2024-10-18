"use client";
import Image from "next/image";
import phonehand from "./../../app/images/phonehand.png";
import Link from "next/link";
import redmi from "./../../app/images/redmi-removebg-preview.png";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import gitg from "./../../app/images/gitg.png";
import hyper from "./../../app/images/hyper.png";
import back from "./../../app/images/back.png";
const Card = ({ img, tit, desc, git, link, x }) => {
  // components/Draggable.js

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const MAX_HEIGHT = 0;
  const min = -650;
  const handleMouseDown = (e) => {
    setIsDragging(true);

    setStartY(e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const dy = e.clientY - startY;

    if (dy + currentY < MAX_HEIGHT && dy + currentY > min) {
      setCurrentY(dy + currentY);
    }

    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, startY, currentX, currentY]);

  return (
    <div>
      <div className="handphone">
        <Image
          className="phonehand1"
          src={phonehand}
          alt="hand
      "
        />
      </div>

      <div
        className="phone"
        onMouseDown={handleMouseDown}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
         <div>
          <Link href={git} target="_blank">
            <div className="git">
              <Image src={gitg} width={35} />
            </div>
          </Link>

          <Link target="_blank" href={link}>
            <div className="link">
              <Image src={hyper} width={32} />
            </div>
          </Link>
          <div className="back" onClick={x}>
            <Image src={back} width={35} />
          </div>
        </div>
        <Image
          className="redmi"
          src={redmi}
          alt="phone
        
      "
          draggable="false"
        />
      </div>
      <div className="phonebg" >
        <div className="inside">
          <div
            className="phweb"
            style={{ transform: `translate(0, ${currentY}px)` }}
          >
            <div className="phwebb">
              <div className="titp">NIYOGI CaRds WIki</div>
              <div className="phweb">
                <div className="tit">{tit}</div>
                <Image
                  className="crdimg"
                  src={`/images/${img}.png`}
                  width={1000}
                  height={1000}
                  alt="img"
                />

                <div className="desc">{desc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
