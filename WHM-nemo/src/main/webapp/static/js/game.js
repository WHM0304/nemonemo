document?.addEventListener("DOMContentLoaded", () => {
  const form_box = document.querySelector(".HM-game_board");
  form_box?.addEventListener("click", (e) => {
    const target = e.target;
    const input_value = target.value;
    let dataString = "data";
    // DB 에서 가져온 데이터 변수하나에 넣기
    for (let i = 0; i < LEVEL1.length; i++) {
      dataString += LEVEL1[i];
    }
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

    // JavaScript 객체를 JSON 문자열로 변환
    var jsonData = JSON.stringify(dataObjects);

    console.log(jsonData);
    alert(jsonData[n_num]);

    // alert(target.tagName);
    if (target.tagName === "INPUT") {
      if (input_value === "" || input_value === "O") {
        target.value = "X";
      }
      if (input_value === "X") {
        target.value = "O";
      }
    }
  });
});
