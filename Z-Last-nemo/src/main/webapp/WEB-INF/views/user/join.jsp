<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri ="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec" %>
<%@ taglib uri="http://www.springframework.org/tags/form"  prefix="f"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<script>
	const rootPath = "${rootPath}"
</script>
<script src="${rootPath }/static/js/join.js?2024-05-03-114"></script>


	<f:form class="join">
		<div><input placeholder="USERNAME" name="m_id" /></div>
		<div><input placeholder="비밀번호" name="m_pw" /></div>
		<div><input placeholder="비밀번호확인" class="re_pw" /></div>
		<div><input placeholder="NICKNAME" name="m_nick" /></div>
		<div><button type="button" class="join">회원가입</button></div>
	</f:form>

