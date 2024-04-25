// 게임을 시작했을때부터
document?.addEventListener("DOMContentLoaded", () => {
  const _hint_div = document?.querySelector(".main-column-hint");
  const hint_div = _hint_div?.querySelectorAll("div");
  const row_hint = [];
  const column_hint = [];
  for (let i = 0; i < hint_div.length; i++) {
    row_hint[i] = document.querySelector(`#row${i + 1}-hint`);
    column_hint[i] = document.querySelector(`#column${i + 1}-hint`);
  }

  // console.log(PLAY);

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

    // console.log("정답 배열", LEVEL_CLEAR.length);
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
  const form_box = document.querySelector(".HM-game_board");

  // PLAYDATA 배열을 2차원 배열로 변환

  // let USERLEVEL = getArray(row_hint.length, column_hint.length);
  // PLAY 데이터에서 가져온 LEVEL1 사용자 테이블 함수를 이용해 2차원배열로 만들기
  let PLAYER = Get_Play_Arr(PLAY, row_hint.length);
  // console.log(PLAYER_EX);

  // 사용자 2차배열을 이용해서 태그들에다가 그 값들 집어넣기
  const input_box = document.querySelector(".HM-game-input_box");
  const _qwer = input_box.querySelectorAll("div");
  // console.log(_qwer[5].children[0].name);
  // console.log(_qwer[5].querySelectorAll("input")[4].name);
  // console.log(_qwer[5].className);

  for (let i = 0; i < row_hint.length; i++) {
    for (let j = 0; j < column_hint.length; j++) {
      _qwer[i + 1].querySelectorAll("input")[j].value = PLAYER[i][j];
    }
  }
  // console.log(PLAYER[1][1]);
  // console.log(_qwer);

  // STEP데이터에서 가져온 LEVEL1 정답 테이블을 함수를 통해 2차원배열로 만들기
  const LEVEL_CLEAR = MAKE_CLEAR_ARRAY(STEP, row_hint.length);
  // console.log(LEVEL_CLEAR);
  // const USER_2A = MAKE_2Arr(PLAY, row_hint.length);
  // console.log(USER_2A);

  // console.log(LEVEL1_CLEAR);
  // 2차원 정답배열을 넣어서 힌트 만들기
  // console.log(row_hint.length);
  // console.log("ROW 길이", row_hint.length);
  for (let i = 0; i < row_hint.length; i++) {
    HINT_ROW_MAKE(LEVEL_CLEAR, i, row_hint[i]);
  }

  // HINT_ROW_MAKE(LEVEL_CLEAR, 1, row_hint[0]);

  for (let i = 0; i < column_hint.length; i++) {
    HINT_COLUMN_MAKE(LEVEL_CLEAR, i, column_hint[i]);
  }

  /// 힌트 만들기 끝

  const input_all = form_box.querySelectorAll("input");
  // console.log(input_all);
  for (let i = 0; i < input_all.length; i++) {
    if (input_all[i].value == 0) {
      input_all[i].style.backgroundColor = "white";
      input_all[i].style.color = "white";
    } else if (input_all[i].value == 1) {
      input_all[i].style.backgroundColor = "black";
      input_all[i].style.color = "black";
    }
  }

  // clear 여부 확인
  const clear_div = document.querySelector("#clear");
  let clear = areArrayEqual(LEVEL_CLEAR, PLAYER);

  // 클리어 패치 함수
  const clear_fetch = async (c_id, c_level) => {
    try {
      const res = await fetch(
        `${rootPath}/game/clear/${c_id},${c_level}`
      );
      const result = await res.json();
      return result.toString();
    } catch (error) {}
  };
  // console.log(USERLEVEL1);
  // console.log(LEVEL1_CLEAR);
  // console.log(clear);
  if (clear === true) {
    clear_div.innerHTML = "클리어";
    clear_fetch("1", p_num);
    if (!confirm("클리어했습니다. 이대로있겠습니까?")) {
      document.location.replace(`${rootPath}`);
    } else {
      return false;
    }
  }

  console.log(clear);

  form_box?.addEventListener("click", (e) => {
    const target = e.target;
    const input_value = target.value;
    const _p_row_num = target.closest("DIV").className;
    const p_row_num = _p_row_num.split("p_row_num=")[1];
    const input_p_row_num = target.closest("DIV");

    // alert(target.name);

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

    // if (USERLEVEL[cut_row][cut_column] === 1) {
    //   USERLEVEL[cut_row][cut_column] = 0;
    // } else {
    //   USERLEVEL[cut_row][cut_column] = 1;
    // }

    // 마지막 데이터를 전달
    // form_box.submit();
    // console.log(target.name);

    // 실시간 플레이 2차배열
    // const play = document.querySelector("#play");
    // play.innerHTML = "";
    // for (let i = 0; i < row_hint.length; i++) {
    //   for (let j = 0; j < column_hint.length; j++) {
    //     play.innerHTML += USERLEVEL[i][j] + "";
    //   }
    //   play.innerHTML += "<br>";
    // }

    // console.log(USERLEVEL1[0].length);
    // console.log(USERLEVEL1.length);
    // console.log(_data);
    // const div_input_box = document.querySelector(
    //   ".HM-game-input_box"
    // );
    // const div_inputs = div_input_box.childNodes[3];

    // const div_inputs = div_input_box.querySelector("#_ww");

    // const input_p_blocks = input_p_row_num.querySelectorAll("input");
    // alert(input_p_blocks[0].className);
    // console.log(input_p_blocks[0].name);
    // const input_p_blocks = document.querySelector(".1");

    // 클릭했을때 , 그 클릭한 정보만 보내서 submit 해버리기
    const submit_form = document.createElement("form");
    submit_form.method = "POST";
    const input_row_num = document.createElement("input");
    input_row_num.name = "p_row_num";
    const input_p_num = document.createElement("input");
    input_p_num.name = "p_num";

    input_p_num.value = p_num;
    input_row_num.value = p_row_num;
    submit_form.appendChild(input_row_num);
    submit_form.appendChild(input_p_num);

    // submit_form.append(input_p_blocks);
    // // console.log(input_p_blocks);
    // for (let i = 0; i < input_p_blocks.length; i++) {
    //  submit_form.appendChild(input_p_blocks[i]);
    //  input_p_blocks[i].type = "";
    //}
    const update_name = document.createElement("input");
    const _export = document.createElement("input");
    _export.name = "p_block_value";
    _export.value = target.value;
    _export.type = "";
    update_name.name = "p_block_name";
    update_name.value = target.name;
    submit_form.appendChild(_export);
    submit_form.appendChild(update_name);
    submit_form.style.display = "none";

    const play = document.querySelector("#play");
    play.style.display = "none";
    play.appendChild(submit_form);
    // console.log(submit_form); ////
    // console.log(input_p_blocks[2].value);

    // console.log(input_p_blocks);

    submit_form?.submit();
  });
});
