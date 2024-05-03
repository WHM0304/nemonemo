package com.nemo.nemo.service.impl;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.dao.DataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.nemo.nemo.dao.RoleDao;
import com.nemo.nemo.dao.UserDao;
import com.nemo.nemo.model.RoleVO;
import com.nemo.nemo.model.UserVO;
import com.nemo.nemo.service.UserService;

public class UserServiceImpl implements UserService {

	private final PasswordEncoder passwordEncoder;
	private final UserDao userDao;
	private final RoleDao roleDao;

	public UserServiceImpl(PasswordEncoder passwordEncoder, UserDao userDao, RoleDao roleDao) {
		super();
		this.passwordEncoder = passwordEncoder;
		this.userDao = userDao;
		this.roleDao = roleDao;
	}

	@Transactional
	@Override
	public int create_user(UserVO userVO) throws DataAccessException {
		List<UserVO> resultVO = userDao.selectAll();
		List<RoleVO> grantList = new ArrayList<>();
		
		if(resultVO == null || resultVO.size() < 1) {
			grantList.add(RoleVO.builder().r_id(userVO.getM_id()).r_role("ROLE_ADMIN").build());
			grantList.add(RoleVO.builder().r_id(userVO.getM_id()).r_role("ROLE_USER").build());
		}else {
			grantList.add(RoleVO.builder().r_id(userVO.getM_id()).r_role("ROLE_USER").build());
		}
		String encPassword = passwordEncoder.encode(userVO.getM_pw());
		userVO.setM_pw(encPassword);

		userDao.insert(userVO);
		roleDao.inserts(grantList, userVO.getM_id());
		return 0;
	}

}
