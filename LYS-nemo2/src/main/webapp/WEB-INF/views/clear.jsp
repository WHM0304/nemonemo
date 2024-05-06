<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
<%@ include file="/WEB-INF/views/include/head.jspf"%>
<%@ include file="/WEB-INF/views/include/header.jspf"%>
<div class="complete_level">
	<section class="clear_img">
		<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear != 1 && clear_data3.c_clear != 1
		&& clear_data4.c_clear != 1 && clear_data5.c_clear != 1
		}">
			<img class="complete_img fade-in" src="${rootPath}/static/img/smile.png" alt="Smile Image">
		</c:if>
		
		
		
		<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1 && clear_data3.c_clear != 1
		&& clear_data4.c_clear != 1 && clear_data5.c_clear != 1
		}">
			<img class="complete_img fade-in" src="${rootPath}/static/img/fish.png" alt="fish Image">
		</c:if>
		
		
		
		<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1 && clear_data3.c_clear == 1
		&& clear_data4.c_clear != 1 && clear_data5.c_clear != 1
		}">
			<img class="complete_img fade-in" src="${rootPath}/static/img/jellyfish.png" alt="jellyfish Image">
		</c:if>
		
		
		
		<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1 && clear_data3.c_clear == 1
		&& clear_data4.c_clear == 1 && clear_data5.c_clear != 1
		}">
			<img class="complete_img fade-in" src="${rootPath}/static/img/whale.png" alt="whale Image">
		</c:if>
		
		
		
		<c:if test="${clear_data1.c_clear == 1 && clear_data2.c_clear == 1 && clear_data3.c_clear == 1
		&& clear_data4.c_clear == 1 && clear_data5.c_clear == 1
		}">
			<img class="complete_img fade-in" src="${rootPath}/static/img/octopus.png" alt="octopus Image">
		</c:if>								
		
	</section>
	<h1>완성했어!!!</h1>
	<a class="YS_a_main"href="${rootPath}/">메인으로</a>
</div>
</body>
</html>