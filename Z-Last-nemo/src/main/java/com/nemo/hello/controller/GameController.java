package com.nemo.hello.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nemo.hello.dao.GameDao;
import com.nemo.hello.dao.PlayerDao;
import com.nemo.hello.models.GameVO;
import com.nemo.hello.models.PlayerVO;

@Controller
@RequestMapping(value="/game")
public class GameController {
	private final GameDao gameDao;
	private final PlayerDao playerDao;
	


	public GameController(GameDao gameDao, PlayerDao playerDao) {
		super();
		this.gameDao = gameDao;
		this.playerDao = playerDao;
	}







	@RequestMapping(value={"/",""},method=RequestMethod.GET)
	public String game(Model model) {
		List<GameVO> game = gameDao.selectAll("1");
		List<PlayerVO> player = playerDao.selectAll("1", "1");
		model.addAttribute("STEP",game);
		model.addAttribute("PLAY",player);
		return "game-form/first/game";
	}

}
