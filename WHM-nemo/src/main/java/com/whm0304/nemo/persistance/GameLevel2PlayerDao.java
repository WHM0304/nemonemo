package com.whm0304.nemo.persistance;

import java.util.List;

import com.whm0304.nemo.models.GameLevel2PlayerVO;

public interface GameLevel2PlayerDao {
	
	
	public List<GameLevel2PlayerVO> selectAll(String p_id, String p_num);
	


}
