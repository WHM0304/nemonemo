package com.whm0304.nemo.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whm0304.nemo.models.ClearVO;
import com.whm0304.nemo.models.GameLevelPlayerVO;
import com.whm0304.nemo.models.GameLevelVO;
import com.whm0304.nemo.models.GameUpdateVO;
import com.whm0304.nemo.persistance.GameLevelDao;
import com.whm0304.nemo.persistance.GameLevelPlayerDao;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "game")
public class GameController {
	private final GameLevelDao gameLevelDao;
	private final GameLevelPlayerDao gameLevelPlayerDao;

	public GameController(GameLevelDao gameLevelDao, GameLevelPlayerDao gameLevelPlayerDao) {
		super();
		this.gameLevelDao = gameLevelDao;
		this.gameLevelPlayerDao = gameLevelPlayerDao;
	}

	@RequestMapping(value = "/{LEVEL}", method = RequestMethod.GET)
	public String game(Model model, @PathVariable(name = "LEVEL", required = false, value = "") String LEVEL) {
//		List<GameLevel1VO> row1 = gameLevel1Dao.selectAll();
//		List<GameLevel2VO> row2 = gameLevel2Dao.selectAll();
		String p_num = LEVEL.substring(5);
		String p_id = "1";
		List<GameLevelVO> row = gameLevelDao.selectAll(p_num);
		List<GameLevelPlayerVO> play = gameLevelPlayerDao.selectAll(p_id, p_num);

//		String p_num = "1";
//		String p_num = "2";
//		log.debug("아니 정보가 뭔데 {}",p_num);
//		log.debug("레벨 정보 :: :{}",LEVEL);
		log.debug("PLAY 정보 {} ", play);
//		List<GameLevelPlayerVO> player = gameLevelPlayerDao.selectAll(p_id, p_num);
//		model.addAttribute("LEVEL1", row1);
//		model.addAttribute("PLAYERLEVEL1", player);
//		model.addAttribute("LEVEL2", row2);
//		model.addAttribute("PLAYERLEVEL2", player);
		model.addAttribute("STEP", row);
		model.addAttribute("PLAY", play);
//		model.addAttribute("PLAYERLEVEL5", player);
		model.addAttribute("p_num", p_num);
//		model.addAttribute("BODY", "GAME");
		if (LEVEL != null) {
			model.addAttribute("BODY", LEVEL);

		}

		return "layout";
	}

	@RequestMapping(value = "/{LEVEL}", method = RequestMethod.POST)
	public String game(GameLevelPlayerVO vo, Model model, GameUpdateVO upVO,
			@PathVariable(name = "LEVEL", required = false, value = "") String LEVEL) {
		String p_num = LEVEL.substring(5);
		String p_id = "1";
		List<GameLevelVO> row = gameLevelDao.selectAll(p_num);
		List<GameLevelPlayerVO> play = gameLevelPlayerDao.selectAll(p_id, p_num);
//		log.debug("빚다ㅣㅂㅈ다ㅣㅂㅈ다ㅣㅂㅈ다{}",vo);
//		log.debug("밸류밸류밸류밸류밸류밸류밸류",vo.getP_block1());
//		vo.setP_id("1");
		upVO.setP_id("1");

		int result = gameLevelPlayerDao.update(upVO);

		model.addAttribute("STEP", row);
		model.addAttribute("PLAY", play);
		model.addAttribute("p_num", p_num);

		model.addAttribute("BODY", LEVEL);
		return "layout";
	}

	@ResponseBody
	@RequestMapping(value = "/clear/{c_id},{c_level}")
	public String clear(@PathVariable("c_id") String c_id, @PathVariable("c_level") String c_level) {
		ClearVO clearVO = gameLevelPlayerDao.clearFind(c_id, c_level);
		if (clearVO != null) {
			return "이미꺰";
			
		} else {
			int result = gameLevelPlayerDao.clearInsert(c_id, c_level);
			return "방금클리어";
		} 
	}

}
