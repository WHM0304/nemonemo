import React, { useEffect, useState } from "react";

import sun from "@/img/sun.png";
import cloud from "@/img/cloud.png";
import rainy from "@/img/rainy.png";
import snow from "@/img/snow.png";

import "@/css/main.css";
import "@/css/main_screen.css";

import LEVEL from "./Level";
import WRITE from "./Write";
import SPEECH from "./Speech";
import Image from "next/image";

const MainHome = () => {
  const [currentLevel, setCurrentLevel] = useState(null); // 현재 레벨을 상태로 유지합니다.
  const [speeches, setSpeeches] = useState([]);
  useEffect(() => {
    const fetchSpeeches = async () => {
      try {
        const response = await fetch("/api/speeches");
        const data = await response.json();
        setSpeeches(data);
      } catch (error) {
        console.error("Error fetching speeches:", error);
      }
    };
    fetchSpeeches();
  }, []);

  const handleLevelClick = (levelNumber) => {
    setCurrentLevel(levelNumber);
  };

  return (
    <>
      <div class="HM-home_container">
        <div class="HM-home_top">
          <div class="HM-home_first_menu">
            <div class="HM-home_weather">
              <label>
                <span>날씨</span>
              </label>
            </div>
            <div class="HM-home_img">
              <Image src={sun} alt="sun" width={50} />
              <Image src={cloud} alt="cloud" width={50} />
              <Image src={rainy} alt="rainy" width={50} />
              <Image src={snow} alt="snow" width={50} />
            </div>
            <div>
              <label class="HM-home_cal">
                <span>년</span> <span>월</span> <span>일</span>
              </label>
            </div>
          </div>
          <div class="HM-home_second_menu">
            <label>제목 : 수족관을 다녀왔다!</label>
          </div>
        </div>
        <div className="HM-home_picture">
          <LEVEL onLevelClick={handleLevelClick} />
        </div>
        <WRITE />
        {currentLevel !== null && (
          <SPEECH speeches={speeches} currentLevel={currentLevel} />
        )}
      </div>
    </>
  );
};
export default MainHome;
