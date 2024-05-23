package com.whm0304.nemo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.whm0304.nemo.models.GameLevelPlayerVO;
import com.whm0304.nemo.models.GameLevelVO;
import com.whm0304.nemo.persistance.GameLevelDao;
import com.whm0304.nemo.persistance.GameLevelPlayerDao;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class BridgeController {
	GameLevelDao gameLevelDao;
	GameLevelPlayerDao gameLevelPlayerDao;
	
	


	public BridgeController(GameLevelDao gameLevelDao, GameLevelPlayerDao gameLevelPlayerDao) {
		super();
		this.gameLevelDao = gameLevelDao;
		this.gameLevelPlayerDao = gameLevelPlayerDao;
	}

	@GetMapping("/bridge/LEVEL1")
	public List<GameLevelVO> level1(){
		return gameLevelDao.selectAll("1");
		
	}
	
	@GetMapping("/player/{level}")
	public List<GameLevelPlayerVO> playerLevel1(
			@PathVariable(name="level") String level
			){
//		level.split("game");
		log.debug("!!!!!!!!!!!!!!{}", level);
		level.substring(5);
		
		return gameLevelPlayerDao.selectAll("22", "3");
	}
	
	
	@GetMapping("/bridge/LEVEL2")
	public List<GameLevelVO> level2(){
		return gameLevelDao.selectAll("2");
		
	}
	@GetMapping("/bridge/LEVEL3")
	public List<GameLevelVO> level3(){
		return gameLevelDao.selectAll("3");
		
	}
	@GetMapping("/bridge/LEVEL4")
	public List<GameLevelVO> level4(){
		return gameLevelDao.selectAll("4");
		
	}
	@GetMapping("/bridge/LEVEL5")
	public List<GameLevelVO> level5(){
		return gameLevelDao.selectAll("5");
		
	}

}
