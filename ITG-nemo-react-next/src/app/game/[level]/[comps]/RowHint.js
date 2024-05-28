"use client";
import { nemo_select } from "@/app/api/game";
import { useEffect, useState } from "react";
import "@/css/hint.css";

const RowHint = ({ p_num, nemo }) => {
  let row;

  if (p_num == 1) {
    row = 5;
  } else if (p_num == 2) {
    row = 7;
  } else if (p_num == 3) {
    row = 9;
  } else if (p_num == 4) {
    row = 11;
  } else if (p_num == 5) {
    row = 15;
  }

  const [hint, setHint] = useState([]);

  useEffect(() => {
    let allKeys = new Set();
    nemo.forEach((obj) => {
      Object.keys(obj).forEach((key) => {
        allKeys.add(key);
      });
    });
    allKeys = Array.from(allKeys); // Set을 배열로 변환

    // 2단계: 2차원 배열로 변환
    const twoDArray = nemo.map((obj) =>
      allKeys.map((key) => obj[key] ?? null).filter((value) => value !== null)
    );

    setHint(twoDArray);
  }, [nemo]);
  const calculateRowHints = (row) => {
    const hints = [];
    let count = 0;

    row.forEach((cell) => {
      if (cell !== 0) {
        // 숫자 '0'을 문자열로 비교하지 않도록 수정
        count++;
      } else {
        if (count !== 0) {
          hints.push(count);
          count = 0;
        }
      }
    });

    if (count !== 0) {
      hints.push(count);
    } else if (hints.length === 0) {
      hints.push(0);
    }

    return hints;
  };

  const rowHints = hint.map(calculateRowHints);

  // console.log(rowHints);

  return (
    <div className="row_box">
      <div>
        {rowHints.map((hints, index) => (
          <div key={index}>{hints.join(", ")}</div>
        ))}
      </div>
    </div>
  );
};

export default RowHint;
