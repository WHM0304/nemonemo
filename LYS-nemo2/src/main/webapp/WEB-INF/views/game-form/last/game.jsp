<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<script src="${rootPath }/static/js/game.js?2024-04-25-111"></script>
<link rel="stylesheet" href="${rootPath }/static/css/game.css?2024-04-25-011">
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
				<div id="column6-hint"></div>
				<div id="column7-hint"></div>
				<div id="column8-hint"></div>
				<div id="column9-hint"></div>
				<div id="column10-hint"></div>
				<div id="column11-hint"></div>
				<div id="column12-hint"></div>
				<div id="column13-hint"></div>
				<div id="column14-hint"></div>
				<div id="column15-hint"></div>
			</div>
			<div class="main-delete">
			
			</div>
		</div>
		<div class="main-form-container">
			<div class="main-row-hint">
				<div id="row1-hint"></div>
				<div id="row2-hint"></div>
				<div id="row3-hint"></div>
				<div id="row4-hint"></div>
				<div id="row5-hint"></div>
				<div id="row6-hint"></div>
				<div id="row7-hint"></div>
				<div id="row8-hint"></div>
				<div id="row9-hint"></div>
				<div id="row10-hint"></div>
				<div id="row11-hint"></div>
				<div id="row12-hint"></div>
				<div id="row13-hint"></div>
				<div id="row14-hint"></div>
				<div id="row15-hint"></div>
			</div>
			<div class="main-input-box">
			<form method="POST"  >
				<div class="p_row_num1">
					<input type="checkbox" name="p_block1"  />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" >
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
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
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
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
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
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
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
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
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="5" hidden="true"/>
				</div>
			</form>	
			<form method="POST" >
				<div class="p_row_num6">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="6" hidden="true"/>
				</div>
			</form>	
			<form method="POST" >
				<div class="p_row_num7">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="7" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num8">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="8" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num9">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="9" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num10">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="10" hidden="true"/>
				</div>
			</form>			
			<form method="POST" >
				<div class="p_row_num11">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="11" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num12">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="12" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num13">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="13" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num14">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="14" hidden="true"/>
				</div>
			</form>
			<form method="POST" >
				<div class="p_row_num15">
					<input type="checkbox" name="p_block1" />
					<input type="checkbox" name="p_block2" />
					<input type="checkbox" name="p_block3" />
					<input type="checkbox" name="p_block4" />
					<input type="checkbox" name="p_block5" />
					<input type="checkbox" name="p_block6" />
					<input type="checkbox" name="p_block7" />
					<input type="checkbox" name="p_block8" />
					<input type="checkbox" name="p_block9" />
					<input type="checkbox" name="p_block10" />
					<input type="checkbox" name="p_block11" />
					<input type="checkbox" name="p_block12" />
					<input type="checkbox" name="p_block13" />
					<input type="checkbox" name="p_block14" />
					<input type="checkbox" name="p_block15" />
					<input name="p_num" value="5" hidden="true"/>
					<input name="p_row_num" value="15" hidden="true"/>
				</div>
			</form>
			</div>
			<div class="main-delete">
			<button id="ALL_DELETE">모두지우기</button>
			</div>
			
		</div>
		<div id="lives">목숨: </div>
		<div class="clear"><button id="clear">정답확인</button></div>
		<div id="CLEAR_IS"></div>
	</section>
</body>
</html>