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


<form class="HM-game_board">
	<div >
		<input type="button" name="n_block1" /> <input type="button" /> <input type="button" />
		<input type="button" /> <input type="button" />
	</div>
	<div>
		<input type="button" /> <input type="button" /> <input type="button" />
		<input type="button" /> <input type="button" />
	</div>
	<div>
		<input type="button" /> <input type="button" /> <input type="button" />
		<input type="button" /> <input type="button" />
	</div>
	<div>
		<input type="button" /> <input type="button" /> <input type="button" />
		<input type="button" /> <input type="button" />
	</div>
	<div>
		<input type="button" /> <input type="button" /> <input type="button" />
		<input type="button" /> <input type="button" />
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






