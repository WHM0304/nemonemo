package com.nemo.nemo.dao;

import java.util.List;

import javax.swing.Spring;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.nemo.nemo.model.RoleVO;

public interface RoleDao {
	public int inserts(@Param("roles") List<RoleVO> vo, @Param("r_id") String username);

	@Select("SELECT * FROM tbl_roles WHERE r_id = #{user}")
	public List<RoleVO> findByUsername(String username);

	public void inserts(List<RoleVO> grantList, Spring m_id);

}
