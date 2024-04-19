package com.whm0304.nemo.persistance;

import java.util.List;

import com.whm0304.nemo.models.GameLevel5PlayerVO;

public interface GameLevel5PlayerDao {
	
	
	public List<GameLevel5PlayerVO> selectAll(String p_id, String p_num);
	


}
