package com.whm0304.nemo.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.whm0304.nemo.models.GameLevel1VO;
import com.whm0304.nemo.persistance.GameLevel1Dao;

@Controller
@RequestMapping(value="game")
public class GameController {
	private final GameLevel1Dao gameLevel1Dao;
	public GameController(GameLevel1Dao gameLevel1Dao) {
		this.gameLevel1Dao = gameLevel1Dao;
	}
	@RequestMapping(value={"/",""} , method=RequestMethod.GET)
	public String game(Model model) {
		List<GameLevel1VO> row1 = gameLevel1Dao.selectAll();
		model.addAttribute("LEVEL1" , row1);
		model.addAttribute("BODY", "GAME");
		
		return "layout";
	}

}
