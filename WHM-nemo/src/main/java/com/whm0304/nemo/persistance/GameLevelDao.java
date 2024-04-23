package com.whm0304.nemo.persistance;


import java.util.List;

import com.whm0304.nemo.models.GameLevelVO;

public interface GameLevelDao {
	
	
	public List<GameLevelVO> selectAll( String n_num);

}
