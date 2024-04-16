// 게임을 시작했을때부터
document?.addEventListener("DOMContentLoaded", () => {
  const row_hint = document.querySelector("#row-hint");
  const colunm_hint = document.querySelector("#column-hint");

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

  // 문자열(데이터베이스에서 가져온 정답 테이블)을 2차원배열로 변환하는 코드
  var LEVEL1_CLEAR = [];

  // 문자열에서 n_block 값만 추출
  var matches = LEVEL1.match(/n_block\d+=(\d+)/g);

  // 추출된 값들을 2차원 배열로 변환
  for (var i = 0; i < matches.length; i++) {
    var value = matches[i].match(/n_block\d+=(\d+)/)[1]; // 숫자 부분 추출
    if (i % 5 === 0) {
      LEVEL1_CLEAR.push([]); // 새로운 배열 추가
    }
    LEVEL1_CLEAR[LEVEL1_CLEAR.length - 1].push(parseInt(value)); // 정수로 변환하여 배열에 추가
  }

  let USERLEVEL1 = getArray(5, 5);
  const form_box = document.querySelector(".HM-game_board");

  // 힌트만들기

  //
  //
  let count = 0;

  console.log(LEVEL1_CLEAR[1][1]);
  for (let i = 0; i < LEVEL1_CLEAR.length; i++) {
    for (let j = 0; j < LEVEL1_CLEAR.length; j++) {
      if (LEVEL1_CLEAR[i][j] === 0) {
        // row_hint.innerHTML += count;
        count = 0;
      }
      if (LEVEL1_CLEAR[i][j] === 1) {
        count++;
        console.log(count);
      }
      row_hint.innerHTML += count;
    }

    row_hint.innerHTML += "<br>";
  }

  //

  //
  //
  colunm_hint.innerHTML = LEVEL1_CLEAR;

  // if (colunm_hint.innerHTML.length % 10 === 0) {
  //   colunm_hint.innerHTML += "<br>";
  // }

  // 힌트만들기 끝

  form_box?.addEventListener("click", (e) => {
    const target = e.target;
    const input_value = target.value;

    if (target.tagName === "INPUT") {
      if (input_value === "" || input_value === "0") {
        target.value = "1";
        target.style.backgroundColor = "black";
        target.style.color = "white";
      }
      if (input_value === "1") {
        target.value = "0";
        target.style.backgroundColor = "#ddd";
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
    let cut_row = row.substr(10) - 1;
    let cut_column = column.substr(7) - 1;
    // console.log(LEVEL1);
    // console.log(column);
    // console.log(cut_row);
    // console.log(cut_column);
    if (USERLEVEL1[cut_row][cut_column] === 1) {
      USERLEVEL1[cut_row][cut_column] = 0;
    } else {
      USERLEVEL1[cut_row][cut_column] = 1;
    }
    let clear = areArrayEqual(LEVEL1_CLEAR, USERLEVEL1);
    // console.log(USERLEVEL1);
    // console.log(LEVEL1_CLEAR);
    // console.log(clear);
    if (clear === true) {
      const clear_div = document.querySelector("#clear");
      // alert("clear");
      clear_div.innerHTML = "성공!";
    }

    // 마지막 데이터를 전달
    // form_box.submit();
    // console.log(target.name);
    const play = document.querySelector("#play");
    play.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        play.innerHTML += USERLEVEL1[i][j] + "";
      }
      play.innerHTML += "<br>";
    }

    // console.log(USERLEVEL1[0].length);
    // console.log(USERLEVEL1.length);
    // console.log(_data);
  });
});
