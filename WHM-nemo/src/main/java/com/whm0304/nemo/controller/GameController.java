package com.whm0304.nemo.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.whm0304.nemo.models.GameLevel1PlayerVO;
import com.whm0304.nemo.models.GameLevel1VO;
import com.whm0304.nemo.persistance.GameLevel1Dao;
import com.whm0304.nemo.persistance.GameLevel1PlayerDao;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "game")
public class GameController {
	private final GameLevel1Dao gameLevel1Dao;
	private final GameLevel1PlayerDao gameLevel1PlayerDao;

	public GameController(GameLevel1Dao gameLevel1Dao, GameLevel1PlayerDao gameLevel1PlayerDao) {
		this.gameLevel1Dao = gameLevel1Dao;
		this.gameLevel1PlayerDao = gameLevel1PlayerDao;
	}

	@RequestMapping(value = { "/", "" }, method = RequestMethod.GET)
	public String game(Model model) {
		List<GameLevel1VO> row1 = gameLevel1Dao.selectAll();
		String p_id = "1";
		String p_num = "1";
		List<GameLevel1PlayerVO> player = gameLevel1PlayerDao.selectAll(p_id, p_num);
		model.addAttribute("LEVEL1", row1);
		model.addAttribute("PLAYERLEVEL1", player);
		model.addAttribute("BODY", "GAME");

		return "layout";
	}

	

}
