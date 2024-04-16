document?.addEventListener("DOMContentLoaded", () => {
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
  const form_box = document.querySelector(".HM-game_board");
  form_box?.addEventListener("click", (e) => {
    const target = e.target;
    const input_value = target.value;
    let dataString = "data";
    // DB 에서 가져온 데이터 변수하나에 넣기
    for (let i = 0; i < LEVEL1.length; i++) {
      dataString += LEVEL1[i];
    }
    // alert(dataString);

    // 문자열을 JavaScript 객체로 변환하는 함수
    function parseDataString(dataString) {
      var regex = /GameLevel1VO\([^)]+\)/g;
      var matches = dataString.match(regex);
      var dataArray = [];

      matches.forEach(function (match) {
        var values = match.match(/(\w+)\=([^,]+)/g);
        var dataObj = {};

        values.forEach(function (value) {
          var pair = value.split("=");
          dataObj[pair[0]] = isNaN(pair[1])
            ? pair[1]
            : parseFloat(pair[1]);
        });

        dataArray.push(dataObj);
      });

      return dataArray;
    }

    // 문자열을 JavaScript 객체로 파싱
    var dataObjects = parseDataString(dataString);

    // console.log(dataObjects[0].n_num);
    // console.log(dataObjects);

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

    const array = getArray(5, 5);
    let row = target.closest("DIV").className;
    const cut = "n_block";
    let column = target.name.substring(7);

    console.log(column);
    console.log(row);
    // console.log(array);
  });
});
