<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<%@ include file="/WEB-INF/views/include/head.jspf"%>
<body class="HM-main_container">
	<div class="HM-main_body">
		<%@ include file="/WEB-INF/views/include/header.jspf"%>
	<div class="clear_picture">
		<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear != 1 && clear_data3.c_clear != 1 && clear_data4.c_clear != 1 && clear_data5.c_clear != 1}">
			<img class="fade-in" src="${rootPath}/static/img/smile.png">
		</c:if>
		
		<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1 && clear_data3.c_clear != 1 && clear_data4.c_clear != 1 && clear_data5.c_clear != 1}">
			<img class="fade-in" src="${rootPath}/static/img/fish.png">
		</c:if>
		
		<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1 && clear_data3.c_clear == 1 && clear_data4.c_clear != 1 && clear_data5.c_clear != 1}">
			<img class="fade-in" src="${rootPath}/static/img/jellyfish.png">
		</c:if>
		
		<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1 && clear_data3.c_clear == 1 && clear_data4.c_clear == 1 && clear_data5.c_clear != 1}">
			<img class="fade-in" src="${rootPath}/static/img/whale.png">
		</c:if>
		
		<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1 && clear_data3.c_clear == 1 && clear_data4.c_clear == 1 && clear_data5.c_clear == 1}">
			<img class="fade-in" src="${rootPath}/static/img/octopus.png">
		</c:if>
		
		<h1>완성했어!!</h1>
	</div>
</body>
<script>

document.addEventListener("DOMContentLoaded", () => {
  const clear_block = document.querySelector(".clear_picture")
  clear_block.addEventListener("click",()=>{
    document.location.href = `${rootPath}/`;
  })

});
</script>
</html>
