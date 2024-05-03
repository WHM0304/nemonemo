const speechParts = document.querySelectorAll(".speech-part");
const avatar = document.querySelector(".avatar");
const nextButton = document.getElementById("nextButton");
const skipButton = document.getElementById("skipButton");
const speechend = document.querySelector(".conversationBox-back");
let currentSpeechIndex = 0;

function displayConversation() {
  const currentSpeech = speechParts[currentSpeechIndex];

  // 대화의 발화자가 A인 경우 텍스트 색상을 녹색으로 변경
  if (currentSpeech.querySelector(".speaker").innerText === "A") {
    currentSpeech.querySelector(".message").style.color = "green";
  } else {
    currentSpeech.querySelector(".message").style.color = "black";
  }

  // 현재 대화의 발화자가 'B'일 때만 오퍼시티를 조절
  if (currentSpeech.querySelector(".speaker").innerText === "B") {
    avatar.style.opacity = "0.5";
  } else {
    avatar.style.opacity = "1";
  }

  // 현재 대화만 표시하고 나머지는 숨김
  speechParts.forEach(function (speech) {
    speech.style.display = "none";
  });
  currentSpeech.style.display = "block";
}

// 스킵 버튼 클릭 시 대화 창 숨기기
skipButton.addEventListener("click", () => {
  // 대화 창 숨기기
  speechend.style.display = "none";
});


// 다음 버튼 클릭 시 대화 진행
nextButton.addEventListener("click", () => {
  // 다음 대화로 이동
  currentSpeechIndex++;

  // 대화가 끝났는지 확인
  if (currentSpeechIndex >= speechParts.length) {

    // 대화가 끝나면 대화 창 숨기기
    speechend.style.display = "none";
  } else {
    // 다음 대화 표시
    displayConversation();
  }
});


// 엔터 키 이벤트 핸들러 추가
document.addEventListener("keydown", function (event) {
  // 키보드 이벤트에서 엔터 키의 키코드는 13입니다.
  if (event.key === "13" || event.key === "Enter") {
    // 다음 대화로 이동
    currentSpeechIndex++;

    // 대화가 끝났는지 확인
    if (currentSpeechIndex >= speechParts.length) {
      // 대화가 끝나면 대화 창 숨기기

      speechend.style.display = "none";
    } else {
      // 다음 대화 표시
      displayConversation();
    }
  }
});

// 초기에는 대화창을 숨김
speechend.style.display = "none";

// 대화를 시작할 div 클릭 시 대화창 표시
document.getElementById("LEVEL1").addEventListener("click", () => {
  // alert(speechParts.length);
  speechend.style.display = "block"; // 대화창 표시
  currentSpeechIndex = 0; // 대화 인덱스 초기화
  displayConversation(); // 대화 표시 함수 호출
});

document.getElementById("LEVEL2").addEventListener("click", () => {
  speechend.style.display = "block"; // 대화창 표시
  currentSpeechIndex = 3; // 대화 인덱스 초기화
  displayConversation(); // 대화 표시 함수 호출
});

document.getElementById("LEVEL3").addEventListener("click", () => {
  speechend.style.display = "block"; // 대화창 표시
  currentSpeechIndex = 7; // 대화 인덱스 초기화
  displayConversation(); // 대화 표시 함수 호출
});

document.getElementById("LEVEL4").addEventListener("click", () => {
  speechend.style.display = "block"; // 대화창 표시
  currentSpeechIndex = 10; // 대화 인덱스 초기화
  displayConversation(); // 대화 표시 함수 호출
});
