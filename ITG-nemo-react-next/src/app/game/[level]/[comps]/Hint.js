"use client";
import { nemo_select } from "@/app/api/game";
import { useEffect, useState } from "react";
import "@/css/hint.css";

const Hint = ({ p_num, nemo }) => {
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

  const [play, setPlay] = useState(() => {
    return Array.from({ length: row }, () => Array(row).fill(0));
  });
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

  const calculateColumnHintsByColumn = (columnIndex) => {
    const hints = [];
    let count = 0;

    hint.forEach((row) => {
      if (row[columnIndex] !== 0) {
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
  const calculateColumnHints = () => {
    const columnHints = [];
    const numberOfColumns = row;

    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      columnHints.push(calculateColumnHintsByColumn(columnIndex));
    }

    return columnHints;
  };

  const rowHints = hint.map(calculateRowHints);
  const columnHints = calculateColumnHints();

  console.log(columnHints);
  //   console.log(rowHints);

  return (
    <div>
      <div className="column">
        {columnHints.map((hints, index) => (
          <div key={index} className="aa">
            {hints.map((hint, hintIndex) => (
              <div key={hintIndex}>{hint}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hint;
