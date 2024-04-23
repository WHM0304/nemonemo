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
	const STEP = "${STEP}"
	const p_num = "${p_num}"
	const PLAY = "${PLAY}"
	
		
</script>

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
	
	</div>
<form class="HM-game_board" >
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
	
		
	</div>
	<div class="HM-game-input_box">
		<div class="p_num=${p_num }"></div>
		<div class="p_row_num=1" >
			<input type="button" name="p_block1"/>
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
		
		</div>
	
		<div class="p_row_num=2">
			<input type="button" name="p_block1" />
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
		
		</div>
		<div class="p_row_num=3">
			<input type="button" name="p_block1" />
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
	
		</div>
		<div class="p_row_num=4">
			<input type="button" name="p_block1" />
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
	
		</div>
		<div class="p_row_num=5">
			<input type="button" name="p_block1" />
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
		
		</div>
		<div class="p_row_num=6">
			<input type="button" name="p_block1" />
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
	
		</div>
		<div class="p_row_num=7">
			<input type="button" name="p_block1" />
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
	
		</div>
				<div class="p_row_num=8">
			<input type="button" name="p_block1" />
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
	
		</div>
				<div class="p_row_num=9">
			<input type="button" name="p_block1" />
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
	
		</div>
				<div class="p_row_num=10">
			<input type="button" name="p_block1" />
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
		
		</div>
				<div class="p_row_num=11">
			<input type="button" name="p_block1" />
			<input type="button" name="p_block2" />
			<input type="button" name="p_block3" />
			<input type="button" name="p_block4" />
			<input type="button" name="p_block5" />
			<input type="button" name="p_block6" />
			<input type="button" name="p_block7" />
			<input type="button" name="p_block8" />
			<input type="button" name="p_block9" />
			<input type="button" name="p_block10" />
			<input type="button" name="p_block11" />
		
		</div>
				
	</div>
</form>
<!-- </form> -->



<div id="clear"></div>




<div id="play">

</div>