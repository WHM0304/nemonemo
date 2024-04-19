package com.whm0304.nemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Required;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.whm0304.nemo.models.GameLevel5PlayerVO;
import com.whm0304.nemo.models.GameLevel5VO;
import com.whm0304.nemo.persistance.GameLevel1Dao;
import com.whm0304.nemo.persistance.GameLevel1PlayerDao;
import com.whm0304.nemo.persistance.GameLevel2Dao;
import com.whm0304.nemo.persistance.GameLevel2PlayerDao;
import com.whm0304.nemo.persistance.GameLevel5Dao;
import com.whm0304.nemo.persistance.GameLevel5PlayerDao;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "game")
public class GameController {
	private final GameLevel1Dao gameLevel1Dao;
	private final GameLevel2Dao gameLevel2Dao;
	private final GameLevel5Dao gameLevel5Dao;
	private final GameLevel1PlayerDao gameLevel1PlayerDao;
	private final GameLevel2PlayerDao gameLevel2PlayerDao;
	private final GameLevel5PlayerDao gameLevel5PlayerDao;
	



	public GameController(GameLevel1Dao gameLevel1Dao, GameLevel2Dao gameLevel2Dao, GameLevel5Dao gameLevel5Dao,
			GameLevel1PlayerDao gameLevel1PlayerDao, GameLevel2PlayerDao gameLevel2PlayerDao,
			GameLevel5PlayerDao gameLevel5PlayerDao) {
		super();
		this.gameLevel1Dao = gameLevel1Dao;
		this.gameLevel2Dao = gameLevel2Dao;
		this.gameLevel5Dao = gameLevel5Dao;
		this.gameLevel1PlayerDao = gameLevel1PlayerDao;
		this.gameLevel2PlayerDao = gameLevel2PlayerDao;
		this.gameLevel5PlayerDao = gameLevel5PlayerDao;
	}





	@RequestMapping(value =  "/{LEVEL}", method = RequestMethod.GET)
	public String game(Model model,@PathVariable(name="LEVEL",required = false ,value="")  String LEVEL) {
//		List<GameLevel1VO> row1 = gameLevel1Dao.selectAll();
//		List<GameLevel2VO> row2 = gameLevel2Dao.selectAll();
		List<GameLevel5VO> row5 = gameLevel5Dao.selectAll();
		String p_id = "1";
//		String p_num = "1";
//		String p_num = "2";
		String p_num = "5";
		log.debug("레벨 정보 :: :{}",LEVEL);
		
		List<GameLevel5PlayerVO> player = gameLevel5PlayerDao.selectAll(p_id, p_num);
//		model.addAttribute("LEVEL1", row1);
//		model.addAttribute("PLAYERLEVEL1", player);
//		model.addAttribute("LEVEL2", row2);
//		model.addAttribute("PLAYERLEVEL2", player);
		model.addAttribute("LEVEL5", row5);
		model.addAttribute("PLAYERLEVEL5", player);
		model.addAttribute("BODY", "GAME");

		return "layout";
	}

	

}
