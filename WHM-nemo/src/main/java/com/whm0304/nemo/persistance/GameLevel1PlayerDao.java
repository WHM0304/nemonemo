package com.whm0304.nemo.persistance;

import java.util.List;

import com.whm0304.nemo.models.GameLevel1PlayerVO;

public interface GameLevel1PlayerDao {
	
	
	public List<GameLevel1PlayerVO> selectAll();

}
