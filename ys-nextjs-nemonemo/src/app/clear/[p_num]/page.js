"use client";
import { useEffect } from "react";
import { findClearData } from "@/app/api/clear.js";
// import { useRouter } from "next/router";
// 할일 : 클리어주소에서 p_num 가져오고 그걸로 화면이미지 보여주기

const clearpage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllClearData();
        setClearData(data);
      } catch (error) {
        console.error("Error fetching clear data:", error);
      }
    };
    fetchData();
  }, []);

  // 클리어데이터가져오기
  const fetchAllClearData = async () => {
    const clearData = [];
    for (let i = 1; i <= 5; i++) {
      try {
        const data = await findClearData("11", i);
        if (data) clearData.push(data);
      } catch (error) {
        console.error(
          `Error fetching clear data for level ${i}:`,
          error
        );
      }
    }
    console.log("클리어데이터", clearData);
    return clearData;
  };
  return (
    <body className="HM-main_container">
      <div className="clear_picture">
        <img src="/img/smile.png" alt="smile" />
      </div>
    </body>
  );
};
export default clearpage;
