package com.whm0304.nemo.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.whm0304.nemo.models.ClearVO;
import com.whm0304.nemo.persistance.GameLevelDao;
import com.whm0304.nemo.persistance.GameLevelPlayerDao;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class HomeController {
	private final GameLevelDao gameLevelDao;
	private final GameLevelPlayerDao gameLevelPlayerDao;
	
	
	
	public HomeController(GameLevelDao gameLevelDao, GameLevelPlayerDao gameLevelPlayerDao) {
		super();
		this.gameLevelDao = gameLevelDao;
		this.gameLevelPlayerDao = gameLevelPlayerDao;
	}



	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model) {
		String c_id = "1";
		List<ClearVO> vo = gameLevelPlayerDao.clearFindById(c_id);
		log.debug("확인차 해본다 {}",vo);
		model.addAttribute("BODY","HOME");
		model.addAttribute("CLEAR",vo);
		
		
		
		return "layout";
	}
	
}
