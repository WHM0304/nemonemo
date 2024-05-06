<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="sec"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="f"%>
<c:set var="rootPath" value="${pageContext.request.contextPath}" />
<script>
	const rootPath = "${rootPath}"
</script>

<f:form action="${rootPath}/user/login">
	<c:if test="${SPRING_SECURITY_LAST_EXCEPTION != null}">
		<div>${SPRING_SECURITY_LAST_EXCEPTION.message}</div>
	</c:if>
	<div>
		<input placeholder="USERNAME" name="m_id" />
	</div>
	<div>
		<input placeholder="PASSWORD" name="m_pw" />
	</div>

	<div>
		<button type="submit">로그인</button>
	</div>
</f:form>