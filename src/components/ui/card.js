import Image from "next/image";

const Card = ({ img, deg, height, lang, kyss, title, imeg, des, tit }) => {
  if (des) {
    console.log(des);
    des("hola");
    tit("good");
  }
  return (
    <div
      className="pcard"
      onClick={kyss}
      style={{ transform: "rotate(" + deg + ")", bottom: height }}
    >
      <div className="dards">
        <a className="cards">
          <Image
            className="language"
            src={`/images/${lang}.png`}
            width={4000}
            height={4000}
            alt="lang"
          />
          <div className="tit">{title}</div>
          <Image
            className="crdimg"
            src={`/images/${img}.png`}
            width={4000}
            height={4000}
            alt="img"
          />

          <div className="des">
            VEry unimportant description read the full desciption pls:).{"\n"}
          </div>

          <div className="des">
            Technologies: A lot of hard work{"\n"}
            Github:{"\r\n"}
            TRy it
          </div>
        </a>
      </div>
    </div>
  );
};
export default Card;
