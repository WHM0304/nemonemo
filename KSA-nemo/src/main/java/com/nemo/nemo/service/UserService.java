package com.nemo.nemo.service;

import org.springframework.dao.DataAccessException;

import com.nemo.nemo.model.UserVO;

public interface UserService {
	public int create_user(UserVO userVO) throws DataAccessException;
}
