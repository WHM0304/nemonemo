<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<link rel="stylesheet" href="${rootPath}/static/css/user.css?2024-05-02-001">
<form method="post" class="user">
  <h1>로그인</h1>
  <div><input type="text" placeholder="USERNAME" /></div>
  <div><input type="text" placeholder="PASSWORD" /></div>
  <div><input type="submit" value="로그인" /></div>
  <div><a href="${rootPath}/user/join">회원가입</a></div>
</form>
