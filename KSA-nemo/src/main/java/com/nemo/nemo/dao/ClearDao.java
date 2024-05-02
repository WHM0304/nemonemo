package com.nemo.nemo.dao;

import java.util.List;

import com.nemo.nemo.model.ClearVO;

public interface ClearDao {
	
	public List<ClearVO> selectByNNum(int sNum);
	public List<ClearVO> selectAll();
	public int getHighestClearStage(String userId);

}
