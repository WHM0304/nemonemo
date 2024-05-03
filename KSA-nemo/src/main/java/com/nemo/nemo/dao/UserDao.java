package com.nemo.nemo.dao;

import java.util.List;

import javax.swing.Spring;

import com.nemo.nemo.model.UserVO;

public interface UserDao {
	
	public List<UserVO> selectAll();
	public UserVO findById(Spring pk);
	public int insert(UserVO vo);
	public int update(UserVO vo);
	public int delete(Spring pk);
	
}
