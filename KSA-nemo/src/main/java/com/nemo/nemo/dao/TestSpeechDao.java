package com.nemo.nemo.dao;

import java.util.List;

import com.nemo.nemo.model.TestSpeechVO;

public interface TestSpeechDao {
	public List<TestSpeechVO> selectByNNum(int sNum);
	public List<TestSpeechVO> selectAll();
}
