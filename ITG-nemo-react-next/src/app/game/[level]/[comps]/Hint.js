"use client";
import { nemo_select } from "@/app/api/game";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "@/css/hint.css";

const Hint = forwardRef(({ p_num, nemo, arr }, ref) => {
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
  const [check, setCheck] = useState([]);
  const [play, setPlay] = useState(() => {
    return Array.from({ length: row }, () => Array(row).fill(0));
  });

  // console.log(ref);
  useImperativeHandle(ref, () => ({
    compareArrays,
  }));
  const compareArrays = () => {
    if (check.length !== hint.length) return false;
    for (let i = 0; i < check.length; i++) {
      if (check[i].length !== hint[i].length) return false;
      for (let j = 0; j < check[i].length; j++) {
        if (check[i][j] !== hint[i][j]) return false;
      }
    }
    return true;
  };
  // alert(compareArrays());
  // console.log(hint);
  // console.log(nemo);
  // console.log(check);

  // console.log(play);
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

  const columnHints = calculateColumnHints();

  //
  useEffect(() => {
    if (arr.length > 0) {
      const keys = Object.keys(arr[0]);
      //allKeys.map((key) => obj[key] ?? null).filter((value) => value !== null)
      const convertedArray = arr.map((obj) =>
        keys.map((key) => obj[key] ?? null).filter((value) => value !== null)
      );
      setCheck(convertedArray);
    }
  }, [arr]);
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
  // console.log(check);

  // 가장긴것만 표기

  const longestArray = rowHints.reduce((prevArray, currArray) => {
    return currArray.length > prevArray.length ? currArray : prevArray;
  }, []);
  console.log(longestArray);

  return (
    <div className="display">
      <div className="blank">
        {longestArray.map((item, index) => (
          <div key={index}>{`${item}`}</div>
        ))}
      </div>
      <div className="column">
        {columnHints.map((hints, index) => (
          <div key={index}>
            {hints.map((hint, hintIndex) => (
              <div key={hintIndex}>{hint}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Hint;
