package com.whm0304.nemo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.whm0304.nemo.models.GameLevelVO;
import com.whm0304.nemo.persistance.GameLevelDao;

@RestController
public class BridgeController {
	GameLevelDao gameLevelDao;
	
	
	public BridgeController(GameLevelDao gameLevelDao) {
		super();
		this.gameLevelDao = gameLevelDao;
	}


	@GetMapping("/bridge")
	public List<GameLevelVO> ping(){
		return gameLevelDao.selectAll("1");
		
	}

}
