package com.nemo.hello.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.web.bind.annotation.RequestBody;

import com.nemo.hello.models.PlayerVO;

public interface PlayerDao {
	
	@Select(" SELECT * FROM tbl_nemo_play WHERE p_id=#{p_id} AND p_num = #{p_num} ")
	public List<PlayerVO> selectAll(@Param("p_id") String p_id,@Param("p_num") String p_num);

	
	
	public int update(PlayerVO vo);

}
