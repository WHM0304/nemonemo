<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%@ include file="/WEB-INF/views/include/head.jspf"%>

<body class="HM-main_container">
	<div class="HM-main_body">
		<%@ include file="/WEB-INF/views/include/header.jspf"%>

		<c:if test="${BODY eq 'HOME' }">
			<%@ include file="/WEB-INF/views/game/main.jsp"%>
		</c:if>
		<%-- 	<c:if test="${BODY eq 'GAME' }">
			<%@ include file="/WEB-INF/views/game/game.jsp"%>
		</c:if> --%>
		<c:if test="${BODY eq 'LEVEL1' }">
			<%@ include file="/WEB-INF/views/game/level_first/level.jsp"%>
		</c:if>
		<c:if test="${BODY eq 'LEVEL2' }">
			<%@ include file="/WEB-INF/views/game/level_second/level.jsp"%>
		</c:if>
		<c:if test="${BODY eq 'LEVEL3' }">
			<%@ include file="/WEB-INF/views/game/level_third/level.jsp"%>
		</c:if>
		<c:if test="${BODY eq 'LEVEL4' }">
			<%@ include file="/WEB-INF/views/game/level_fourth/level.jsp"%>
		</c:if>
		<c:if test="${BODY eq 'LEVEL5' }">
			<%@ include file="/WEB-INF/views/game/level_last/level.jsp"%>
		</c:if>
		${LEVEL}

	</div>

	<div class="HM-main_hover_box"></div>
	<nav class="HM-main_nav">
		<ul>
			<li>홈</li>
			<li>게임</li>
		</ul>
	</nav>
</body>
</html>
