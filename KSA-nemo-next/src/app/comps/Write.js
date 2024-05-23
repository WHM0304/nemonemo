import React from "react";

const Write = ({ clearData }) => {
  return (
    <>
      <h1
        className={`clear_msg ${
          clearData[4]?.c_clear === 1 ? "show_clear fade-in" : ""
        }`}
      >
        <span>C</span>
        <span>L</span>
        <span>E</span>
        <span>A</span>
        <span>R</span>
        <span>!</span>
      </h1>

      <div className="HM-home_diary">
        {clearData[0]?.c_clear === 1 && (
          <section className="YS_border-bottom">
            <h2
              className={`YS_diary_row ${
                clearData[0]?.c_clear === 1 &&
                clearData[1]?.c_clear !== 1 &&
                clearData[2]?.c_clear !== 1 &&
                clearData[3]?.c_clear !== 1
                  ? "fade-in"
                  : ""
              }`}
            >
              "어제 수족관에 놀러갔었다!"
            </h2>
          </section>
        )}

        {clearData[0]?.c_clear !== 1 && (
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
        )}

        {clearData[1]?.c_clear === 1 && (
          <section className="YS_border-bottom">
            <h2
              className={`YS_diary_row ${
                clearData[1]?.c_clear === 1 &&
                clearData[0]?.c_clear === 1 &&
                clearData[1]?.c_clear === 1 &&
                clearData[2]?.c_clear !== 1 &&
                clearData[3]?.c_clear !== 1
                  ? "fade-in"
                  : ""
              }`}
            >
              "작고 귀여운 흰 동가리도 보고"
            </h2>
          </section>
        )}

        {clearData[1]?.c_clear !== 1 && (
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
        )}

        {clearData[2]?.c_clear === 1 && (
          <section className="YS_border-bottom">
            <h2
              className={`YS_diary_row ${
                clearData[2]?.c_clear === 1 &&
                clearData[0]?.c_clear === 1 &&
                clearData[1]?.c_clear === 1 &&
                clearData[2]?.c_clear === 1 &&
                clearData[3]?.c_clear !== 1
                  ? "fade-in"
                  : ""
              }`}
            >
              "알록달록한 조명빛을 받는 해파리와"
            </h2>
          </section>
        )}
        {clearData[2]?.c_clear !== 1 && (
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
        )}

        {clearData[3]?.c_clear === 1 && (
          <section className="YS_border-bottom">
            <h2
              className={`YS_diary_row ${
                clearData[3]?.c_clear === 1 &&
                clearData[0]?.c_clear === 1 &&
                clearData[1]?.c_clear === 1 &&
                clearData[2]?.c_clear === 1 &&
                clearData[3]?.c_clear === 1 &&
                clearData[4]?.c_clear !== 1
                  ? "fade-in"
                  : ""
              }`}
            >
              "멋진 흰돌고래를 보고"
            </h2>
          </section>
        )}
        {clearData[3]?.c_clear !== 1 && (
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
        )}

        {clearData[4]?.c_clear === 1 && (
          <section className="YS_border-bottom">
            <h2
              className={`YS_diary_row ${
                clearData[4]?.c_clear === 1 &&
                clearData[0]?.c_clear === 1 &&
                clearData[1]?.c_clear === 1 &&
                clearData[2]?.c_clear === 1 &&
                clearData[3]?.c_clear === 1 &&
                clearData[4]?.c_clear === 1
                  ? "fade-in"
                  : ""
              }`}
            >
              "엄청 커다란 문어를 만났다!"
            </h2>
          </section>
        )}

        {clearData[4]?.c_clear === 1 && (
          <section className="YS_border-bottom">
            <h2
              className={`YS_diary_row ${
                clearData[4]?.c_clear === 1 &&
                clearData[0]?.c_clear === 1 &&
                clearData[1]?.c_clear === 1 &&
                clearData[2]?.c_clear === 1 &&
                clearData[3]?.c_clear === 1 &&
                clearData[4]?.c_clear === 1
                  ? "fade-in"
                  : ""
              }`}
            >
              "참 재밌었다!"
            </h2>
          </section>
        )}

        {clearData[4]?.c_clear !== 1 && (
          <section className="YS_border-bottom">
            <h2 className="YS_diary_row_n">　</h2>
          </section>
        )}
      </div>
    </>
  );
};

export default Write;
