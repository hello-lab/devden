"use client";
import stuff from "./data.json";
import Card from "./card";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { stringify } from "postcss";
import Ward from "./phoenuii";
import hand1 from "./../../app/images/hand2.png";
import hand2 from "./../../app/images/hand1.png";

export default function Cards({ kyss }) {
  const [degree, setDeg] = useState(-15);
  let degarr = [];
  function rot() {
    const len = stuff.length;
    console.log(len);
    for (let i = 0; i < len; i++) {
      degarr.push(degree + 5 * i);
    }
    console.log(degarr);
  }

  rot();
  const [tit, settit] = useState(0);
  const [des, setdes] = useState(0);
  const [git, setgit] = useState("google.com");
  const [link, setlink] = useState("google.com");
  const [img, setimg] = useState("");
  let vari = 0;
  let height = -4;
  function kyspt2() {
    if (hando.current) hando.current.classList.add("up");
  }
  function kyspt3() {
    if (hando.current) hando.current.classList.remove("up");
    if (hando.current) hando.current.classList.add("upp");
  }
  function kys() {
    if (deckk.current) {
      // Access the div element using myDivRef.current
      console.log(deckk.current);
      deckk.current.classList.add("down");
      setTimeout(kyspt2, 1000);
      setTimeout(kyspt3, 3000);
    }
  }
  function kyspt4() {
    if (hando.current) hando.current.classList.add("downsynd");
    if (deckk.current) deckk.current.classList.add("up");
    setTimeout(() => {
      if (hando.current) {
        hando.current.classList.remove("downsynd");
        hando.current.classList.remove("upp");
      }
    }, 2000);
    setTimeout(() => {
      if (deckk.current) deckk.current.classList.remove("up");
    }, 2500);
    setTimeout(() => {
      if (deckk.current) deckk.current.classList.remove("down");
    }, 2500);
  }

  const hando = useRef(null);
  const deckk = useRef(null);
  const [B, setB] = useState(0);
  console.log(kyss);
  return (
    <div>
      {" "}
      <div ref={hando} className="handd ">
        <Ward img={img} tit={tit} desc={des} git={git} link={link} x={kyspt4} />
      </div>
      <div className="wholehand " ref={deckk}>
        <div className="hand">
          <Image className="hand1" src={hand1} alt="cardimg" />
        </div>
        <div className="deck">
          <div>
            {stuff.map((card) => {
              console.log(card.tit);
              return (
                <div
                  onClick={() => {
                    setdes(card.des);
                    setgit(card.git);
                    setlink(card.link);
                    setimg(card.id);
                    settit(card.tit);
                    console.log(des);
                  }}
                >
                  <Card
                    img={card.id}
                    deg={`${degarr[vari]}deg`}
                    height={`${height}vh`}
                    lang={`${card.lang}`}
                    kyss={kys}
                    title={card.tit}
                  />
                  <div style={{ display: "none" }}>
                    {(vari += 1)}
                    {(height -= 1)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="backhand">
          <Image className="hand2" src={hand2} alt="cardimg" priority />
        </div>
      </div>
    </div>
  );
}
