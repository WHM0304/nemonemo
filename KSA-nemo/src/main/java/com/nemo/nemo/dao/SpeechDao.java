package com.nemo.nemo.dao;

import java.util.List;

import com.nemo.nemo.model.SpeechVO;

public interface SpeechDao {
	List<SpeechVO> selectByNNum(int nNum);
	public List<SpeechVO> selectAll();
}
