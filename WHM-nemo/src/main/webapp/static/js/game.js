// 게임을 시작했을때부터
document?.addEventListener("DOMContentLoaded", () => {
  const row1_hint = document.querySelector("#row1-hint");
  const row2_hint = document.querySelector("#row2-hint");
  const row3_hint = document.querySelector("#row3-hint");
  const row4_hint = document.querySelector("#row4-hint");
  const row5_hint = document.querySelector("#row5-hint");
  const row6_hint = document.querySelector("#row6-hint");
  const row7_hint = document.querySelector("#row7-hint");
  const row8_hint = document.querySelector("#row8-hint");
  const row9_hint = document.querySelector("#row9-hint");
  const row10_hint = document.querySelector("#row10-hint");
  const row11_hint = document.querySelector("#row11-hint");
  const row12_hint = document.querySelector("#row12-hint");
  const row13_hint = document.querySelector("#row13-hint");
  const row14_hint = document.querySelector("#row14-hint");
  const row15_hint = document.querySelector("#row15-hint");
  const column1_hint = document.querySelector("#column1-hint");
  const column2_hint = document.querySelector("#column2-hint");
  const column3_hint = document.querySelector("#column3-hint");
  const column4_hint = document.querySelector("#column4-hint");
  const column5_hint = document.querySelector("#column5-hint");
  const column6_hint = document.querySelector("#column6-hint");
  const column7_hint = document.querySelector("#column7-hint");
  const column8_hint = document.querySelector("#column8-hint");
  const column9_hint = document.querySelector("#column9-hint");
  const column10_hint = document.querySelector("#column10-hint");
  const column11_hint = document.querySelector("#column11-hint");
  const column12_hint = document.querySelector("#column12-hint");
  const column13_hint = document.querySelector("#column13-hint");
  const column14_hint = document.querySelector("#column14-hint");
  const column15_hint = document.querySelector("#column15-hint");

  // 사용자 2차배열 만드는 함수
  const getArray = (ROW, COLUMN) => {
    const result = [];
    for (let i = 0; i < ROW; i++) {
      const _arr = [];
      for (let j = 0; j < COLUMN; j++) {
        _arr.push(0);
      }
      result.push(_arr);
    }
    return result;
  };
  // 2개의 배열을 비교하는 함수
  const areArrayEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i].length !== arr2[i].length) {
        return false;
      }
      for (let j = 0; j < arr1[i].length; j++) {
        if (arr1[i][j] !== arr2[i][j]) {
          return false;
        }
      }
    }

    return true;
  };
  // ROW 힌트 만들기 함수
  const HINT_ROW_MAKE = (LEVEL_CLEAR, row, where) => {
    let count = 0;
    row = row - 1;
    for (let i = 0; i < LEVEL_CLEAR.length; i++) {
      if (LEVEL_CLEAR[row][i] !== 0) {
        count++;
      }
      if (LEVEL_CLEAR[row][i] === 0) {
        if (count !== 0) {
          where.innerHTML += count + "  ";
          count = 0;
        }
      }
      if (i === LEVEL_CLEAR.length - 1 && count !== 0) {
        where.innerHTML += count;
      }
    }
    if (!where.innerHTML) {
      where.innerHTML = 0;
    }
  };
  // 칼럼 힌트 함수
  const HINT_COLUMN_MAKE = (LEVEL_CLEAR, column, where) => {
    let count = 0;
    column = column - 1;
    for (let i = 0; i < LEVEL_CLEAR.length; i++) {
      if (LEVEL_CLEAR[i][column] !== 0) {
        count++;
      }
      if (LEVEL_CLEAR[i][column] === 0) {
        if (count !== 0) {
          where.innerHTML += count + "<br>";
          count = 0;
        }
      }
      if (i === LEVEL_CLEAR.length - 1 && count !== 0) {
        where.innerHTML += count;
      }
    }
    if (!where.innerHTML) {
      where.innerHTML = 0;
    }
  };

  // 정답정보를 2차원배열로 변환하는 코드
  const LEVEL_CLEAR_MAKE = (LEVEL, row) => {
    // 문자열(데이터베이스에서 가져온 정답 테이블)을 2차원배열로 변환하는 코드
    var LEVEL_CLEAR = [];

    // 문자열에서 n_block 값만 추출
    var matches = LEVEL.match(/n_block\d+=(\d+)/g);

    // 추출된 값들을 2차원 배열로 변환
    for (var i = 0; i < matches.length; i++) {
      var value = matches[i].match(/n_block\d+=(\d+)/)[1]; // 숫자 부분 추출
      if (i % row === 0) {
        LEVEL_CLEAR.push([]); // 새로운 배열 추가
      }
      LEVEL_CLEAR[LEVEL_CLEAR.length - 1].push(parseInt(value)); // 정수로 변환하여 배열에 추가
    }
    return LEVEL_CLEAR;
  };

  let USERLEVEL = getArray(15, 15);
  const form_box = document.querySelector(".HM-game_board");

  // 데이터에서 가져온 LEVEL1 정답 테이블을 함수를 통해 2차원배열로 만들기
  const LEVEL1_CLEAR = LEVEL_CLEAR_MAKE(LEVEL5, 15);
  console.log(LEVEL1_CLEAR);
  // console.log(LEVEL1_CLEAR);
  // 2차원 정답배열을 넣어서 힌트 만들기
  HINT_ROW_MAKE(LEVEL1_CLEAR, 1, row1_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 2, row2_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 3, row3_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 4, row4_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 5, row5_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 6, row6_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 7, row7_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 8, row8_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 9, row9_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 10, row10_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 11, row11_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 12, row12_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 13, row13_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 14, row14_hint);
  HINT_ROW_MAKE(LEVEL1_CLEAR, 15, row15_hint);

  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 1, column1_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 2, column2_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 3, column3_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 4, column4_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 5, column5_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 6, column6_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 7, column7_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 8, column8_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 9, column9_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 10, column10_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 11, column11_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 12, column12_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 13, column13_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 14, column14_hint);
  HINT_COLUMN_MAKE(LEVEL1_CLEAR, 15, column15_hint);

  /// 힌트 만들기 끝

  const input_all = form_box.querySelectorAll("input");
  console.log(input_all);
  for (let i = 0; i < 225; i++) {
    input_all[i].value = "0";
    input_all[i].style.color = "white";
  }

  form_box?.addEventListener("click", (e) => {
    const target = e.target;
    const input_value = target.value;
    const clear_div = document.querySelector("#clear");
    clear_div.innerHTML = "";
    if (target.tagName === "INPUT") {
      if (input_value === "" || input_value === "0") {
        target.value = "1";
        target.style.backgroundColor = "black";
        target.style.color = "black";
      }
      if (input_value === "1") {
        target.value = "0";
        target.style.backgroundColor = "white";
        target.style.color = "white";
      }
    }
    // console.log(target.name);
    // console.log(target.value);
    // const n_num = target.closest("DIV").className;
    // console.log(n_num);

    // console.log(LEVEL1);

    // 결과 출력 (여기까지가 전환)
    // console.log(LEVEL1_CLEAR);

    // 여기서부터는 클릭했을때 유저의 배열을 바꾸기
    let row = target.closest("DIV").className;
    let column = target.name;
    const str_row = "p_row_num=";
    const str_column = "p_block";
    let cut_column = column.split(str_column)[1] - 1;
    let cut_row = row.split(str_row)[1] - 1;
    // console.log(cut_column);
    // console.log(cut_row);

    // console.log(LEVEL1);
    // console.log(column);
    // console.log(cut_row);
    // console.log(cut_column);

    if (USERLEVEL[cut_row][cut_column] === 1) {
      USERLEVEL[cut_row][cut_column] = 0;
    } else {
      USERLEVEL[cut_row][cut_column] = 1;
    }
    let clear = areArrayEqual(LEVEL1_CLEAR, USERLEVEL);
    // console.log(USERLEVEL1);
    // console.log(LEVEL1_CLEAR);
    // console.log(clear);
    if (clear === true) {
      // alert("clear");
      clear_div.innerHTML = "성공!";
    }

    console.log(clear);

    // 마지막 데이터를 전달
    // form_box.submit();
    // console.log(target.name);

    // 실시간 플레이 2차배열
    const play = document.querySelector("#play");
    play.innerHTML = "";
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        play.innerHTML += USERLEVEL[i][j] + "";
      }
      play.innerHTML += "<br>";
    }

    // console.log(USERLEVEL1[0].length);
    // console.log(USERLEVEL1.length);
    // console.log(_data);
  });
});
