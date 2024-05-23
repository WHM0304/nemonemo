import React, { useEffect } from "react";
import Image from "next/image";
import smile from "@/img/smile.png";
import fish from "@/img/fish.png";
import jellyfish from "@/img/jellyfish.png";
import whale from "@/img/whale.png";
import question from "@/img/question.png";
import completeImg from "@/img/complete_img.png";
import exMark from "@/img/ex-mark.png";

const LEVEL = ({ clearData, onLevelClick }) => {
  useEffect(() => {
    const handleAnimationEnd = () => {
      const images = document.querySelectorAll(".YS_picture_c");
      images.forEach((image) => {
        image.classList.add("next_level5");
      });
      for (let i = 1; i <= 4; i++) {
        const levelElement = document.getElementById(`LEVEL${i}`);
        if (levelElement) {
          levelElement.remove();
        }
      }
      const exMark = document.querySelector(".ex-mark");
      if (exMark) {
        exMark.classList.remove("hidden");
      }
    };

    const level4Element = document.getElementById("LEVEL4");
    if (level4Element) {
      level4Element.addEventListener(
        "animationend",
        handleAnimationEnd
      );
    }

    return () => {
      if (level4Element) {
        level4Element.removeEventListener(
          "animationend",
          handleAnimationEnd
        );
      }
    };
  }, []);

  return (
    <>
      {clearData.length < 5 || clearData[4].c_clear !== 1 ? (
        <>
          <div>
            <div
              id="LEVEL3"
              className="YS_p_div"
              onClick={() => onLevelClick(3)}
            >
              {clearData[2] && clearData[2].c_clear === 1 ? (
                <Image
                  className={`YS_picture_c ${
                    clearData[0]?.c_clear === 1 &&
                    clearData[1]?.c_clear === 1 &&
                    clearData[2]?.c_clear === 1 &&
                    clearData[3]?.c_clear !== 1
                      ? "fade-in"
                      : ""
                  }`}
                  src={jellyfish}
                  alt="Jellyfish Image"
                  width={250}
                  priority={true}
                />
              ) : (
                <Image
                  className={`YS_picture ${
                    clearData[0]?.c_clear === 1 &&
                    clearData[1]?.c_clear === 1 &&
                    clearData[3]?.c_clear !== 1
                      ? "next_level"
                      : ""
                  }`}
                  src={question}
                  alt="Question Image"
                  width={250}
                  priority={true}
                />
              )}
            </div>
            <div
              id="LEVEL1"
              className="YS_p_div"
              onClick={() => onLevelClick(1)}
            >
              {clearData[0] && clearData[0].c_clear === 1 ? (
                <Image
                  className={`YS_picture_c ${
                    clearData[0]?.c_clear === 1 &&
                    clearData[1]?.c_clear !== 1 &&
                    clearData[2]?.c_clear !== 1 &&
                    clearData[3]?.c_clear !== 1
                      ? "fade-in"
                      : ""
                  }`}
                  src={smile}
                  alt="Smile Image"
                  width={250}
                  priority={true}
                />
              ) : (
                <Image
                  className={`YS_picture ${
                    clearData[1]?.c_clear !== 1 &&
                    clearData[2]?.c_clear !== 1 &&
                    clearData[3]?.c_clear !== 1
                      ? "next_level"
                      : ""
                  }`}
                  src={question}
                  alt="Question Image"
                  width={250}
                  priority={true}
                />
              )}
            </div>
          </div>
          <div>
            <div
              id="LEVEL4"
              className="YS_p_div"
              onClick={() => onLevelClick(4)}
            >
              {clearData[3] && clearData[3].c_clear === 1 ? (
                <Image
                  className={`YS_picture_c ${
                    clearData[0]?.c_clear === 1 &&
                    clearData[1]?.c_clear === 1 &&
                    clearData[2]?.c_clear === 1 &&
                    clearData[3]?.c_clear === 1
                      ? "fade-in"
                      : ""
                  }`}
                  src={whale}
                  alt="Whale Image"
                  width={250}
                  priority={true}
                />
              ) : (
                <Image
                  className={`YS_picture ${
                    clearData[0]?.c_clear === 1 &&
                    clearData[1]?.c_clear === 1 &&
                    clearData[2]?.c_clear === 1
                      ? "next_level"
                      : ""
                  }`}
                  src={question}
                  alt="Question Image"
                  width={250}
                  priority={true}
                />
              )}
            </div>
            <div
              id="LEVEL2"
              className="YS_p_div"
              onClick={() => onLevelClick(2)}
            >
              {clearData[1] && clearData[1].c_clear === 1 ? (
                <Image
                  className={`YS_picture_c ${
                    clearData[0]?.c_clear === 1 &&
                    clearData[1]?.c_clear === 1 &&
                    clearData[2]?.c_clear !== 1 &&
                    clearData[3]?.c_clear !== 1
                      ? "fade-in"
                      : ""
                  }`}
                  src={fish}
                  alt="Fish Image"
                  width={250}
                  priority={true}
                />
              ) : (
                <Image
                  className={`YS_picture ${
                    clearData[0]?.c_clear === 1 &&
                    clearData[2]?.c_clear !== 1 &&
                    clearData[3]?.c_clear !== 1
                      ? "next_level"
                      : ""
                  }`}
                  src={question}
                  alt="Question Image"
                  width={250}
                  priority={true}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="complete_img_box">
          <Image
            className="YS_picture fade-in"
            src={completeImg}
            alt="Complete Image"
            width={700}
            priority={true}
          />
        </div>
      )}
      <section className="ex-mark hidden" id="LEVEL5">
        <Image
          className="YS_picture next_level"
          src={exMark}
          onClick={() => onLevelClick(5)}
          alt="Exclamation Mark"
          width="100%"
          priority={true}
        />
      </section>
    </>
  );
};

export const getServerSideProps = async () => {
  const clearData = await Clear_SelectAll();

  return {
    props: {
      clearData,
    },
  };
};

export default LEVEL;
