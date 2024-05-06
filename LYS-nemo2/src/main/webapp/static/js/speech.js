const speechParts = document.querySelectorAll(".speech-part");
const avatar = document.querySelector(".avatar");
const nextButton = document.getElementById("nextButton");
const skipButton = document.getElementById("skipButton");
const speechend = document.querySelector(".conversationBox-back");
let currentSpeechIndex = 0;

// 대화 내용 표시 함수
function displayConversation() {
  // 현재 대화 인덱스에 해당하는 대화만 표시하고 나머지는 숨김
  speechParts.forEach(function (speech, index) {
    if (index === currentSpeechIndex) {
      speech.style.display = "block"; // 현재 대화 메시지만 표시
    } else {
      speech.style.display = "none"; // 나머지는 숨김
    }
  });

  // 대화의 발화자가 A 일 때 텍스트 색상을 녹색으로 변경
  if (
    speechParts[currentSpeechIndex].querySelector(".speaker")
      .innerText === "A"
  ) {
    speechParts[currentSpeechIndex].querySelector(
      ".message"
    ).style.color = "green";
  } else {
    speechParts[currentSpeechIndex].querySelector(
      ".message"
    ).style.color = "black"; // 다른 발화자의 대화는 기본 색상으로
  }

  // 현재 대화의 발화자가 'B'일 때만 오퍼시티를 조절
  if (
    speechParts[currentSpeechIndex].querySelector(".speaker")
      .innerText === "B"
  ) {
    avatar.style.opacity = "0.5"; // B가 말할 때
  } else {
    avatar.style.opacity = "1"; // A가 말할 때
  }
}

// 대화 완료 상태를 로컬 스토리지에 저장하는 함수
function saveConversationState() {
  localStorage.setItem("conversationComplete", "true");
}

// 이전에 대화를 완료한 상태인지 확인하는 함수
function isConversationComplete() {
  return localStorage.getItem("conversationComplete") === "true";
}

// 대화 완료 상태를 초기화하는 함수
function resetConversationState() {
  localStorage.removeItem("conversationComplete");
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
