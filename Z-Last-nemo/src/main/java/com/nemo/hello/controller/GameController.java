package com.nemo.hello.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value="/game")
public class GameController {
	
	
	@RequestMapping(value={"/",""},method=RequestMethod.GET)
	public String game() {
		return "game-form/first/game";
	}

}
