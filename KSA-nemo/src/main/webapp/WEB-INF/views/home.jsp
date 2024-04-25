<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<head>
    <meta charset="UTF-8">
    <title>대화 화면</title>
    <style>
        /* 기존 스타일 유지 */
        .HM-home_container {
            position: relative; /* 부모 요소로 설정 */
        }
        .conversation-box {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 200px;
            background-color: white;
            border: 1px solid #ccc;
            padding: 20px;
            display: none; /* 초기에는 숨김 */
            z-index: 9999; /* 팝업 창이 다른 요소 위에 표시되도록 설정 */
        }
        .popup-button {
            position: absolute;
            bottom: 10px;
            right: 10px;
            z-index: 9999; /* 버튼이 다른 요소 위에 표시되도록 설정 */
        }
    </style>
</head>
<body>

<div class="HM-home_container">
	<div class="HM-home_top">
		<div class="HM-home_first_menu">
			<div class="HM-home_weather">
				<label > <span>날씨</span></label>
			</div>

			<div class="HM-home_img">
				<img src="${rootPath}/static/img/sun.png"/>
				<img src="${rootPath}/static/img/cloud.png"/> 
				<img src="${rootPath}/static/img/rainy.png"/> 
				<img src="${rootPath}/static/img/snow.png"/>
			</div>
			<div>
				<label class="HM-home_cal"> <span>년</span> <span>월</span> <span>일</span>
				</label>
			</div>
		</div>
		<div class="HM-home_second_menu">
			<label>제목</label>
		</div>
	</div>
	<div class="HM-home_picture">
		<div>
			<div id="LEVEL3"></div>
			<div id="LEVEL1"></div>
		</div>
		<div>
			<div id="LEVEL4"></div>
			<div id="LEVEL2"></div>
		</div>
	</div>
	<div class="HM-home_diary"></div>
	
	<div id="conversationBox" class="conversation-box">
        <!-- 대화 내용을 표시할 곳 -->
        <div id="conversationContent"></div>
        <!-- 닫기 버튼 -->
        <button id="closeButton">닫기</button>
    </div>
</div>

<!-- JavaScript 추가 -->
<script>
    // 대화 박스 표시 함수
    function showConversation() {
        var conversationBox = document.getElementById("conversationBox");
        conversationBox.style.display = "block";
    }

    // 대화 박스 숨김 함수
    function hideConversation() {
        var conversationBox = document.getElementById("conversationBox");
        conversationBox.style.display = "none";
    }

    // 대화 시작 시 대화 박스 표시
    // 여기서는 예시로 페이지가 로드되면 자동으로 대화 박스를 표시하도록 설정
    window.onload = function() {
        showConversation();
    };

    // 닫기 버튼 클릭 시 대화 박스 숨김
    document.getElementById("closeButton").onclick = function() {
        hideConversation();
    };

    // 버튼 클릭 시 대화 박스 표시
    document.getElementById("popupButton").onclick = function() {
        showConversation();
    };
</script>