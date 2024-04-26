document?.addEventListener("DOMContentLoaded", () => {
  const form_container = document.querySelector(".main-input-box");
  const input_check_all = document.querySelectorAll(
    "input[type='checkbox']"
  );
  const _hint_div = document.querySelector(".main-column-hint");
  const hint_div = _hint_div.querySelectorAll("div");
  const row_hint = [];
  const column_hint = [];
  for (let i = 0; i < hint_div.length; i++) {
    row_hint[i] = document.querySelector(`#row${i + 1}-hint`);
    column_hint[i] = document.querySelector(`#column${i + 1}-hint`);
  }

  // 정답정보를 2차원배열로 변환하는 코드
  const MAKE_CLEAR_ARRAY = (LEVEL, row) => {
    // 문자열(데이터베이스에서 가져온 정답 테이블)을 2차원배열로 변환하는 코드
    let LEVEL_CLEAR = [];

    // 문자열에서 n_block 값만 추출
    let matches = LEVEL.match(/n_block\d+=(\d+)/g);

    // 추출된 값들을 2차원 배열로 변환
    for (let i = 0; i < matches.length; i++) {
      let value = matches[i].match(/n_block\d+=(\d+)/)[1]; // 숫자 부분 추출
      if (i % row === 0) {
        LEVEL_CLEAR.push([]); // 새로운 배열 추가
      }
      LEVEL_CLEAR[LEVEL_CLEAR.length - 1].push(parseInt(value)); // 정수로 변환하여 배열에 추가
    }
    return LEVEL_CLEAR;
  };

  // 사용자 2차배열 만드는 함수
  const Get_Play_Arr = (PLAYER, row) => {
    let USER = [];

    let later = PLAYER.match(/p_block\d+=(\d+)/g);
    for (let i = 0; i < later.length; i++) {
      let value = later[i].match(/p_block\d+=(\d+)/)[1];
      if (i % row === 0) {
        USER.push([]);
      }
      USER[USER.length - 1].push(parseInt(value));
    }
    return USER;
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
    for (let i = 0; i < LEVEL_CLEAR.length; i++) {
      // console.log("로우 표기", row);
      // console.log("I 변수확인", i);

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

  // 정답테이블 가져와서 2차배열로 만들기
  const CORRECT = MAKE_CLEAR_ARRAY(STEP, row_hint.length);
  // 2차배열만든것으로 힌트 만들기
  if (STEP) {
    for (let i = 0; i < row_hint.length; i++) {
      HINT_ROW_MAKE(CORRECT, i, row_hint[i]);
      HINT_COLUMN_MAKE(CORRECT, i, column_hint[i]);
    }
  }
  // 사용자 2차배열 만들기
  const PLAYER = Get_Play_Arr(PLAY, row_hint.length);
  // console.log(PLAYER);
  const input_container = document.querySelector(".main-input-box");
  const _div = input_container.querySelectorAll("div");

  // PLAYER 정보가 있으면 사용자 2차배열 들을 input 에 집어넣기
  if (PLAYER) {
    for (let i = 0; i < row_hint.length; i++) {
      for (let j = 0; j < column_hint.length; j++) {
        _div[i].querySelectorAll('input[type="checkbox"]')[j].value =
          PLAYER[i][j];
        if (
          _div[i].querySelectorAll('input[type="checkbox"]')[j]
            .value == 1
        ) {
          _div[i].querySelectorAll('input[type="checkbox"]')[
            j
          ].checked = "checked";
        } else {
          _div[i].querySelectorAll('input[type="checkbox"]')[
            j
          ].checked = "";
        }
      }
    }
  }

  // 플레이어체크 박스 확인
  // const inputs = document.querySelectorAll('input[type="checkbox"]');
  // console.log(PLAYER);
  // console.log(inputs[6].value);

  // 그 데이터가 맞는지 체크
  // console.log(CORRECT);
  // console.log(PLAYER);
  // console.log(CLEAR);

  form_container?.addEventListener("click", (e) => {
    const target = e.target;
    const find = target.closest("div");
    const p_row_num = find.className.substr(9) - 1;
    const p_block = target.name.substr(7) - 1;
    target.value = 1;
    if (target.checked === "checked") {
      target.value = 1;
    }
    if (target.checked === false) {
      target.value = 0;
    }
    // console.log(p_row_num, p_block);

    // 클릭한 input 에 value 집어 넣기
    PLAYER[p_row_num][p_block] = Number(target.value);
    //

    // console.log(PLAYER[p_row_num][p_block].value);
    // console.log(PLAYER);
    // console.log(CORRECT);

    // console.log(target.value);
    // console.log(CLEAR);

    // 클리어 여부확인

    const CLEAR = areArrayEqual(CORRECT, PLAYER);
    console.log(CLEAR);
    //
  });
});
