const speechParts = document.querySelectorAll(".speech-part");
const avatar = document.querySelector(".avatar");
const nextButton = document.getElementById("nextButton");
const skipButton = document.getElementById("skipButton");
const speechend = document.querySelector(".conversationBox-back");
let currentSpeechIndex = 0;

// 대화 내용 표시 함수
function displayConversationByLevel(level) {
  // 모든 대화를 숨김
  speechParts.forEach(function (speech) {
    speech.style.display = "none";
  });

  // 특정 레벨에 해당하는 대화만 표시
  speechParts.forEach(function (speech) {
    const levelAttribute = parseInt(
      speech.getAttribute("data-level")
    );

    if (levelAttribute === level) {
      speech.style.display = "block"; // 해당 레벨에 해당하는 대화 표시
    }
  });
}

// 다음 버튼 클릭 시 대화 진행
nextButton.addEventListener("click", () => {
  // 다음 대화로 이동
  currentSpeechIndex++;

  // 대화가 끝났는지 확인
  if (currentSpeechIndex >= speechParts.length) {
    // 대화가 끝나면 대화 완료 상태를 저장
    saveConversationState();
    // 대화가 끝나면 conversationBox-back 요소 숨기기
    speechend.style.display = "none";
  } else {
    // 다음 대화 표시
    displayConversation();
  }
});

// 스킵 버튼 클릭 시 대화 완료 처리
skipButton.addEventListener("click", () => {
  // 대화 완료 상태를 저장
  saveConversationState();
  // 대화 창 숨기기
  speechend.style.display = "none";
});

// 페이지 로드 시 이전에 대화를 완료한 상태인지 확인하여 처리
window.addEventListener("load", () => {
  if (isConversationComplete()) {
    // 이전에 대화를 완료한 상태인 경우 대화창 숨기기
    speechend.style.display = "none";
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
      // 대화가 끝나면 대화 완료 상태를 저장
      saveConversationState();
      // 대화가 끝나면 conversationBox-back 요소 숨기기
      speechend.style.display = "none";
    } else {
      // 다음 대화 표시
      displayConversation();
    }
  }
});

// 초기에는 첫 번째 대화만 표시
displayConversation();
