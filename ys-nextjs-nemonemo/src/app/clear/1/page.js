"use client";
// import { useEffect, useState } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { findClearData } from "@/app/api/clear.js";
import { CreateClearData } from "@/app/api/clear.js";

const clearpage = () => {
  const router = useRouter();

  // 이미지 클릭했을때 주소이동용
  const handleClick = async () => {
    // 클리어데이터 만드는것도 그냥 여기다가..
    try {
      CreateClearData(1); // 레벨에 맞는 클리어 정보 생성 : 레벨별 수동설정요구..
    } catch (error) {
      console.error("Error fetching clear data:", error);
      console.log("사진 또 누른경우");
    }
    //-- 그리고 홈으로 돌아가게
    router.push("/");
  };
  //-----------
  // const [clearData, setClearData] = useState([]);

  // 크레용 애니메이션 후 삭제용
  const [isCrayonVisible, setIsCrayonVisible] = useState(true);
  const handleAnimationEnd = () => {
    setIsCrayonVisible(false); // 애니메이션 끝나면 안보이게
  };

  // 화면뜰때 처리
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchAllClearData();
  //       setClearData(data);
  //     } catch (error) {
  //       console.error("Error fetching clear data:", error);
  //     }
  //   };
  //   fetchData();
  //   // 레벨에 맞는 클리어 정보 생성
  //   // CreateClearData(1);
  // }, []);

  // 클리어데이터가져오기
  // const fetchAllClearData = async () => {
  //   const clearData = [];
  //   for (let i = 1; i <= 5; i++) {
  //     try {
  //       const data = await findClearData("11", i);
  //       if (data) clearData.push(data);
  //     } catch (error) {
  //       console.error(
  //         `Error fetching clear data for level ${i}:`,
  //         error
  //       );
  //     }
  //   }
  //   console.log("클리어데이터", clearData);
  //   return clearData;
  // };
  // -------------------
  return (
    <div className="HM-main_body">
      <div className="clear_picture">
        <img
          className="fade-in"
          src="/img/smile.png"
          alt="smile"
          onClick={handleClick}
        />
      </div>
      {isCrayonVisible && (
        <img
          className="crayon"
          src="/img/crayon.png"
          onAnimationEnd={handleAnimationEnd}
        />
      )}
      <div className="clear_page_msg_box">
        <h1 className="clear_msg_new">
          <span>완</span>
          <span>성</span>
          <span>했</span>
          <span>어</span>
          <span>!</span>
          <span>!</span>
        </h1>
      </div>
    </div>
  );
};
export default clearpage;
