<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<link rel="stylesheet"
	href="${rootPath}/static/css/speech.css?2024-04-26-001">
<div class="HM-home_container">
	<div class="HM-home_top">
		<div class="HM-home_first_menu">
			<div class="HM-home_weather">
				<label> <span>날씨</span></label>
			</div>

			<div class="HM-home_img">
				<img src="${rootPath}/static/img/sun.png"> <img
					src="${rootPath}/static/img/cloud.png"> <img
					src="${rootPath}/static/img/rainy.png"> <img
					src="${rootPath}/static/img/snow.png">
			</div>
			<div>
				<label class="HM-home_cal"> <span>${year}년</span> <span>${month}월</span>
					<span>${day}일</span>
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

	<div class="conversationBox-back">
		<img src="${rootPath}/static/img/boy.png" class="avatar"
			alt="A's avatar">
		<div id="conversationBox" class="conversation-box">
			<!-- 대화 내용을 표시할 곳 -->
			<div id="speechContainer" class="speech-container">
				<!-- JSTL을 사용하여 대화 데이터를 반복해서 출력 -->
				<c:forEach items="${SPEECH}" var="speech">
					<div class="speech-part" style="display: none;">
						<!-- 모든 대화를 숨김 -->
						<span class="num" style="display: none;">${speech.s_num}</span> <span
							class="speaker" style="display: none;">${speech.s_speaker}</span>
						<span class="message">${speech.s_message}</span>
					</div>
				</c:forEach>

			</div>
		</div>
		<button id="skipButton">skip</button>
		<button id="nextButton">&#187;&#187;</button>
	</div>
</div>

<script>
	
</script>
