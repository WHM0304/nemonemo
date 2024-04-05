<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
 <%@ include file="/WEB-INF/views/include/head.jspf"%>
<body>
	<%@ include file="/WEB-INF/views/include/header.jspf"%>
	
	<c:if test="${BODY eq 'GAME_MAIN' }">
	<%@ include file="/WEB-INF/views/game/main.jsp" %>
	</c:if>
	
  </body>
</html>
