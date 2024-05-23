import React, { useEffect, useState } from "react";
import { Speech_SelectAll } from "../api/speeches";
import { Clear_SelectAll } from "../api/clear";

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
  const [speeches, setSpeeches] = useState([]); // 데이터를 저장할 state 추가
  const [clearData, setClearData] = useState([]); // 클리어 데이터를 저장할 상태 추가
  const [currentDate, setCurrentDate] = useState({
    year: "",
    month: "",
    day: "",
  });

  useEffect(() => {
    const fetchClearData = async () => {
      try {
        const data = await Clear_SelectAll();
        setClearData(data);
      } catch (error) {
        console.error("Error fetching clear data:", error);
      }
    };

    fetchClearData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Speech_SelectAll(); // 모든 데이터 가져오기
        setSpeeches(data); // 가져온 데이터를 speeches state에 설정
      } catch (error) {
        console.error("Error fetching speeches:", error);
      }
    };

    fetchData(); // 데이터 가져오기 함수 호출
  }, []); // 컴포넌트가 마운트될 때 한 번만 호출

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0");
    setCurrentDate({ year, month, day });
  }, []); // 컴포넌트가 마운트될 때 한 번만 호출

  const handleLevelClick = (levelNumber) => {
    setCurrentLevel(levelNumber);
  };

  return (
    <>
      <div className="HM-home_container">
        <div className="HM-home_top">
          <div className="HM-home_first_menu">
            <div className="HM-home_weather">
              <label>
                <span>날씨</span>
              </label>
            </div>
            <div className="HM-home_img">
              <Image src={sun} alt="sun" width={50} priority={true} />
              <Image
                src={cloud}
                alt="cloud"
                width={50}
                priority={true}
              />
              <Image
                src={rainy}
                alt="rainy"
                width={50}
                priority={true}
              />
              <Image
                src={snow}
                alt="snow"
                width={50}
                priority={true}
              />
            </div>
            <div>
              <label className="HM-home_cal">
                <span>{currentDate.year} 년</span>
                <span>{currentDate.month} 월</span>
                <span>{currentDate.day} 일</span>
              </label>
            </div>
          </div>
          <div className="HM-home_second_menu">
            <label>제목 : 수족관을 다녀왔다!</label>
          </div>
        </div>
        <div className="HM-home_picture">
          <LEVEL
            clearData={clearData}
            onLevelClick={handleLevelClick}
          />
        </div>
        <WRITE clearData={clearData} />
        {currentLevel !== null && (
          <SPEECH speeches={speeches} currentLevel={currentLevel} />
        )}
      </div>
    </>
  );
};

export default MainHome;
