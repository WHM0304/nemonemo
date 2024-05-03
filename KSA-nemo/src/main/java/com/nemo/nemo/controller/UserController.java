package com.nemo.nemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nemo.nemo.model.UserVO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/user")
public class UserController {
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)

	public String login(Model model) {
		model.addAttribute("BODY", "LOGIN");
		return "layout";
	}
	
	@RequestMapping(value = "/join", method = RequestMethod.GET)
	public String join(Model model) {
		model.addAttribute("BODY", "JOIN");
		return "layout";
	}
	
	@RequestMapping(value = "/join", method = RequestMethod.POST)
	public String join(UserVO userVO) {
	log.debug("회원가입 {}" ,userVO.toString());
	return "layout";
	}
}
