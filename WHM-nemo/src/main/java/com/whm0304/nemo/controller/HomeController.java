package com.whm0304.nemo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.whm0304.nemo.persistance.GameLevelDao;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class HomeController {
	private final GameLevelDao gameLevelDao;
	
	public HomeController(GameLevelDao gameLevelDao) {
		this.gameLevelDao=gameLevelDao;
	}
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
//		GameLevel1VO vo = gameLevel1Dao.selectAll();
//		log.debug("정보 {}" ,vo);
		model.addAttribute("BODY","HOME");
		
		
		
		return "layout";
	}
	
}
