import smile from "@/img/smile.png";
import fish from "@/img/fish.png";
import jellyfish from "@/img/jellyfish.png";
import whale from "@/img/whale.png";
import question from "@/img/question.png";
import completeImg from "@/img/complete_img.png";
import exMark from "@/img/ex-mark.png";

import React from "react";
import Image from "next/image";

const LEVEL = ({ onLevelClick }) => {
  const handleClick = (levelNumber) => {
    onLevelClick(levelNumber);
  };

  const clear_data1 = { c_clear: 1 }; // 예시 데이터
  const clear_data2 = { c_clear: 0 }; // 예시 데이터
  const clear_data3 = { c_clear: 1 }; // 예시 데이터
  const clear_data4 = { c_clear: 0 }; // 예시 데이터
  const clear_data5 = { c_clear: 0 }; // 예시 데이터

  return (
    <>
      {clear_data5.c_clear !== 1 && (
        <>
          <div>
            <div
              id="LEVEL3"
              className="YS_p_div"
              onClick={() => handleClick(3)} // LEVEL3 이미지를 클릭했을 때 3번 레벨 정보를 전달합니다.
            >
              {clear_data3.c_clear === 1 ? (
                <Image
                  className={`YS_picture_c ${
                    clear_data1.c_clear === 1 &&
                    clear_data2.c_clear === 1 &&
                    clear_data3.c_clear === 1 &&
                    clear_data4.c_clear !== 1
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
                    clear_data1.c_clear === 1 &&
                    clear_data2.c_clear === 1 &&
                    clear_data4.c_clear !== 1
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
              onClick={() => handleClick(1)} // LEVEL1 이미지를 클릭했을 때 1번 레벨 정보를 전달합니다.
            >
              {clear_data1.c_clear === 1 ? (
                <Image
                  className={`YS_picture_c ${
                    clear_data1.c_clear === 1 &&
                    clear_data2.c_clear !== 1 &&
                    clear_data3.c_clear !== 1 &&
                    clear_data4.c_clear !== 1
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
                    clear_data2.c_clear !== 1 &&
                    clear_data3.c_clear !== 1 &&
                    clear_data4.c_clear !== 1
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
              onClick={() => handleClick(4)} // LEVEL4 이미지를 클릭했을 때 4번 레벨 정보를 전달합니다.
            >
              {clear_data4.c_clear === 1 ? (
                <Image
                  className={`YS_picture_c ${
                    clear_data1.c_clear === 1 &&
                    clear_data2.c_clear === 1 &&
                    clear_data3.c_clear === 1 &&
                    clear_data4.c_clear === 1
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
                    clear_data1.c_clear === 1 &&
                    clear_data2.c_clear === 1 &&
                    clear_data3.c_clear === 1
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
              onClick={() => handleClick(2)} // LEVEL2 이미지를 클릭했을 때 2번 레벨 정보를 전달합니다.
            >
              {clear_data2.c_clear === 1 ? (
                <Image
                  className={`YS_picture_c ${
                    clear_data1.c_clear === 1 &&
                    clear_data2.c_clear === 1 &&
                    clear_data3.c_clear !== 1 &&
                    clear_data4.c_clear !== 1
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
                    clear_data1.c_clear === 1 &&
                    clear_data3.c_clear !== 1 &&
                    clear_data4.c_clear !== 1
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
      )}
      {clear_data5.c_clear === 1 && (
        <div className="complete_img_box">
          <Image
            className="YS_picture fade-in"
            src={completeImg}
            alt="Complete Image"
            width={250}
            priority={true}
          />
        </div>
      )}
      <section className="ex-mark hidden" id="LEVEL5">
        <Image
          className="YS_picture next_level"
          src={exMark}
          alt="Exclamation Mark"
          width="100%"
          priority={true}
        />
      </section>
    </>
  );
};

export default LEVEL;
