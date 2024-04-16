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
<form class="HM-game_board" >
	<div class="p_num="></div>
	<div class="p_row_num=1">
		<input type="button" name="p_block1" />
		<input type="button" name="p_block2" />
		<input type="button" name="p_block3" />
		<input type="button" name="p_block4" />
		<input type="button" name="p_block5" />
	</div>

	<div class="p_row_num=2">
		<input type="button" name="p_block1" />
		<input type="button" name="p_block2" />
		<input type="button" name="p_block3" />
		<input type="button" name="p_block4" />
		<input type="button" name="p_block5" />
	</div>
	<div class="p_row_num=3">
		<input type="button" name="p_block1" />
		<input type="button" name="p_block2" />
		<input type="button" name="p_block3" />
		<input type="button" name="p_block4" />
		<input type="button" name="p_block5" />
	</div>
	<div class="p_row_num=4">
		<input type="button" name="p_block1" />
		<input type="button" name="p_block2" />
		<input type="button" name="p_block3" />
		<input type="button" name="p_block4" />
		<input type="button" name="p_block5" />
	</div>
	<div class="p_row_num=5">
		<input type="button" name="p_block1" />
		<input type="button" name="p_block2" />
		<input type="button" name="p_block3" />
		<input type="button" name="p_block4" />
		<input type="button" name="p_block5" />
	</div>
</form>
<!-- </form> -->
<%-- <c:forEach items="${LEVEL1}" var="row">

<div class="p_num=${row.n_num}">
		${row.n_num}	${row.n_row_num}
</div>
</c:forEach> --%>


<div id="clear"></div>



<%-- <c:forEach items="${PLAYERLEVEL1}" var="ROW" varStatus="INDEX">

	<span>그림번호 ${ROW.p_num}</span> <span>행번호 ${ROW.p_row_num}</span>
	<div>
		<span>${ROW.p_block1}</span>
		<span>${ROW.p_block2}</span>
		<span>${ROW.p_block3}</span>
		<span>${ROW.p_block4}</span>
		<span>${ROW.p_block5}</span>
		
	</div>

</c:forEach> --%> 

<div id="play">

</div>





