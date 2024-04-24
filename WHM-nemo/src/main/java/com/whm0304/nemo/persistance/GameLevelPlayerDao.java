package com.whm0304.nemo.persistance;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.whm0304.nemo.models.ClearVO;
import com.whm0304.nemo.models.GameLevelPlayerVO;
import com.whm0304.nemo.models.GameUpdateVO;

public interface GameLevelPlayerDao {
	
	@Select(" SELECT * FROM tbl_nemo_play WHERE p_id=#{p_id} AND p_num = #{p_num}")
	public List<GameLevelPlayerVO> selectAll(@Param("p_id") String p_id,@Param("p_num") String p_num);
	
	public int update(GameUpdateVO vo);

	@Insert(" INSERT INTO tbl_clear(c_id,c_level,c_clear)"
			+ " VALUE(#{c_id},#{c_level},'1') ")
	public int clearInsert(@Param("c_id") String c_id,@Param("c_level")  String c_level);

	@Select("SELECT * FROM tbl_clear WHERE c_id=#{c_id} AND c_level=#{c_level}")
	public ClearVO clearFind(@Param("c_id") String c_id,@Param("c_level")  String c_level);

	@Select(" SELECT * FROM tbl_clear WHERE c_id=#{c_id} ")
	public List<ClearVO> clearFindById(String c_id);
	


}
