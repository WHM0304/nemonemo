<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<link rel="stylesheet" href="${rootPath}/static/css/user.css?2024-05-02-001">
<form method="post" class="user join">
	<h1>회원가입</h1>
	<div><input type="text" placeholder="ID" name="m_id" /></div>
	<div><input type="text" placeholder="PASSWORD" name="m_pw" /></div>
	<div><input type="text" placeholder="RE PASSWORD" /></div>
	<div><input type="text" placeholder="NICKNAME" name="m_nick" /></div>
	<div><input type="submit" value="회원가입" /></div>  
</form>
