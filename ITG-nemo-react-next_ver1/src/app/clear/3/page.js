"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreateClearData } from "@/app/api/clear.js";

const clearpage = () => {
  const router = useRouter();

  // 이미지 클릭했을때 주소이동용
  const handleClick = async () => {
    // 클리어데이터 만드는것도 그냥 여기다가..
    try {
      CreateClearData(3); // 3레벨화면
    } catch (error) {
      console.error("Error fetching clear data:", error);
      console.log("사진 또 누른경우");
    }
    //-- 그리고 홈으로 돌아가게
    router.push("/");
  };

  // 크레용 애니메이션 후 삭제용
  const [isCrayonVisible, setIsCrayonVisible] = useState(true);
  const handleAnimationEnd = () => {
    setIsCrayonVisible(false); // 애니메이션 끝나면 안보이게
  };

  return (
    <div className="HM-main_body">
      <div className="clear_picture">
        <img
          className="fade-in"
          src="/img/jellyfish.png"
          alt="jellyfish"
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
