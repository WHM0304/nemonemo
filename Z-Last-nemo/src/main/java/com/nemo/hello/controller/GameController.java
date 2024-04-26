package com.nemo.hello.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.nemo.hello.dao.GameDao;
import com.nemo.hello.dao.PlayerDao;
import com.nemo.hello.models.GameVO;
import com.nemo.hello.models.PlayerVO;
import com.nemo.hello.models.UpdateVO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
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
	
	@RequestMapping(value={"/",""} , method=RequestMethod.POST)
	public String game(UpdateVO vo) {

		String p_id = "1";
		vo.setP_id(p_id);
		
		
		log.debug("dd : {}");
		
		int result = playerDao.update(vo); 
		return "redirect:/game";
//		return "game-form/first/game";
		
	}
	
	@RequestMapping(value="/reset/{p_num}/{p_row_num}", method=RequestMethod.GET)
	public String reset(Model model,PlayerVO vo) {
		
		String p_id = "1";
		vo.setP_id(p_id);
		log.debug(" VO :{}",Integer.valueOf(vo.getP_row_num()));
		Integer max = Integer.valueOf(vo.getP_row_num());

		for(int i = 1; i<=max; i++) {
			vo.setP_row_num(i);
			int reset = playerDao.reset(vo);
			
		}
		return "redirect:/game";
		
//		return "game-form/first/game";
	}

}
