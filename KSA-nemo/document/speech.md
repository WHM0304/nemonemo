# speech

```javascript
const speechParts = document.querySelectorAll(".speech-part");
const avatar = document.querySelector(".avatar");
const nextButton = document.getElementById("nextButton");
const skipButton = document.getElementById("skipButton");
const speechend = document.querySelector(".conversationBox-back");
let currentLevel = 1; // 현재 표시 중인 레벨
let currentSpeechIndex = 0; // 현재 표시 중인 대화 인덱스

// 대화 내용 표시 함수
function displayConversation(level) {
  // 대화창 초기화
  speechParts.forEach(function (speech) {
    speech.style.display = "none";
  });

  // 해당 레벨의 대화만 표시
  speechParts.forEach(function (speech) {
    if (parseInt(speech.querySelector(".num").innerText) === level) {
      speech.style.display = "block";
    }
  });

  // 대화창 표시
  speechend.style.display = "block";
}

// 대화창 초기화 함수
function resetConversation() {
  currentSpeechIndex = 0;
  displayConversation(currentLevel);
}

// 다음 버튼 클릭 시 대화 진행
nextButton.addEventListener("click", () => {
  currentSpeechIndex++;

  // 다음 대화로 이동
  if (
    currentSpeechIndex >= speechParts.length ||
    parseInt(
      speechParts[currentSpeechIndex].querySelector(".num").innerText
    ) !== currentLevel
  ) {
    currentSpeechIndex = 0;
    currentLevel++;
  }

  // 현재 표시 중인 레벨의 대화 표시
  displayConversation(currentLevel);
});

// 클릭된 레벨에 대한 이벤트 핸들러 추가
const levels = document.querySelectorAll(
  ".HM-home_picture > div > div"
);
levels.forEach(function (level) {
  level.addEventListener("click", function () {
    currentLevel = parseInt(this.id.replace("LEVEL", ""));
    resetConversation();
  });
});

// 스킵 버튼 클릭 시 대화 완료 처리
skipButton.addEventListener("click", () => {
  // 대화 창 숨기기
  speechend.style.display = "none";
});

// 엔터 키 이벤트 핸들러 추가
document.addEventListener("keydown", function (event) {
  // 키보드 이벤트에서 엔터 키의 키코드는 13입니다.
  if (event.key === "13" || event.key === "Enter") {
    // 다음 대화로 이동
    currentSpeechIndex++;

    // 대화가 끝났는지 확인
    if (
      currentSpeechIndex >= speechParts.length ||
      parseInt(
        speechParts[currentSpeechIndex].querySelector(".num")
          .innerText
      ) !== currentLevel
    ) {
      currentSpeechIndex = 0;
      currentLevel++;
    }

    // 현재 표시 중인 레벨의 대화 표시
    displayConversation(currentLevel);
  }
});

// 페이지 로드 시 대화창 숨기기
window.addEventListener("load", function () {
  speechend.style.display = "none";
});

// 초기에는 첫 번째 레벨의 대화를 표시합니다.
resetConversation();
```

```javascript
const speechParts = document.querySelectorAll(".speech-part");
let currentSpeechIndex = 0;

//대화 내용 표시 함수
function displayConversation() {
  // 현재 대화 인덱스에 해당하는 대화만 표시하고 나머지는 숨김
  speechParts.forEach(function (speech, index) {
    if (index === currentSpeechIndex) {
      speech.style.display = "block"; // 현재 대화 메시지만 표시
    } else {
      speech.style.display = "none"; // 나머지는 숨김
    }
  });

//level을 클릭하는 이벤트 핸들러를 추가합니다.
levelElements.forEach(function (levelElement) {
  levelElement.addEventListener("click", function () {
    const level = parseInt(levelElement.id.replace("LEVEL", ""));
    showSpeechByLevel(level);
  });
});

// 특정 레벨에 해당하는 대화만 표시하는 함수
function showSpeechByLevel(level) {
    const speechParts = document.querySelectorAll(".speech-part");
    speechParts.forEach(part => {
        const numElement = part.querySelector(".num");
        if (numElement) {
            const num = parseInt(numElement.textContent.trim());
            if (num === level) {
                part.style.display = "block";
            } else {
                part.style.display = "none";
            }
        }
    });
}

```