<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<style>
input {
	width: 50px;
}
</style>
<script >
	const LEVEL1 = "${LEVEL1}"
</script>

	<div id="row-hint"></div>
	<div id="column-hint"></div>
<form class="HM-game_board">
	<div class="0">
		<input type="button" name="n_block1" />
		<input type="button" name="n_block2" />
		<input type="button" name="n_block3" />
		<input type="button" name="n_block4" />
		<input type="button" name="n_block5" />
	</div>
	<div class="1">
		<input type="button" name="n_block1" />
		<input type="button" name="n_block2" />
		<input type="button" name="n_block3" />
		<input type="button" name="n_block4" />
		<input type="button" name="n_block5" />
	</div>
	<div class="2">
		<input type="button" name="n_block1" />
		<input type="button" name="n_block2" />
		<input type="button" name="n_block3" />
		<input type="button" name="n_block4" />
		<input type="button" name="n_block5" />
	</div>
	<div class="3">
		<input type="button" name="n_block1" />
		<input type="button" name="n_block2" />
		<input type="button" name="n_block3" />
		<input type="button" name="n_block4" />
		<input type="button" name="n_block5" />
	</div>
	<div class="4">
		<input type="button" name="n_block1" />
		<input type="button" name="n_block2" />
		<input type="button" name="n_block3" />
		<input type="button" name="n_block4" />
		<input type="button" name="n_block5" />
	</div>
</form>
<c:forEach items="${LEVEL1}" var="ROW" varStatus="INDEX">

	<span>그림번호 ${ROW.n_num}</span> <span>행번호 ${ROW.n_row_num}</span>
	<div>
		<span>${ROW.n_block1}</span>
		<span>${ROW.n_block2}</span>
		<span>${ROW.n_block3}</span>
		<span>${ROW.n_block4}</span>
		<span>${ROW.n_block5}</span>
		
	</div>

</c:forEach>






