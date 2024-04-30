<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script src="${rootPath }/static/js/game.js?2024-04-25-222"></script>

<link rel="stylesheet" href="${rootPath }/static/css/game.css?2024-04-25-522">

<title>여기는 제목</title>
<script>
	const STEP = "${STEP}"
	const PLAY = "${PLAY}"
	
</script>
</head>
<body>
<%@ include file="/WEB-INF/views/include/head.jspf"%>
<%@ include file="/WEB-INF/views/include/header.jspf"%>



	<section class="game-container">
		<div class="main-hint-container">
			<div class="blank"></div>
			<div class="main-column-hint">
				<div id="column1-hint"></div>
				<div id="column2-hint"></div>
				<div id="column3-hint"></div>
				<div id="column4-hint"></div>
				<div id="column5-hint"></div>
			</div>
		</div>
		<div class="main-form-container">
			<div class="main-row-hint">
				<div id="row1-hint"></div>
				<div id="row2-hint"></div>
				<div id="row3-hint"></div>
				<div id="row4-hint"></div>
				<div id="row5-hint"></div>
			</div>
			<div class="main-input-box">
			<form method="POST"  >
				<div class="p_row_num1">
					<input type="checkbox" name="p_block1"  />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" >
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input name="p_num" value="1" hidden="true"/>
					<input name="p_row_num" value="1" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num2">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input name="p_num" value="1" hidden="true"/>
					<input name="p_row_num" value="2" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num3">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input name="p_num" value="1" hidden="true"/>
					<input name="p_row_num" value="3" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num4">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input name="p_num" value="1" hidden="true"/>
					<input name="p_row_num" value="4" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num5">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input name="p_num" value="1" hidden="true"/>
					<input name="p_row_num" value="5" hidden="true"/>
				</div>
			</form>	
					
			
			</div>
			<div class="main-delete">
			<button id="ALL_DELETE"></button>
			</div>
			
		</div>
		<div id="lives">목숨: <span class="heart">♥</span><span class="heart">♥</span><span class="heart">♥</span></div>
		<div class="clear"><button id="clear">정답확인</button></div>
		<div id="CLEAR_IS"></div>
	</section>
	
</body>
</html>