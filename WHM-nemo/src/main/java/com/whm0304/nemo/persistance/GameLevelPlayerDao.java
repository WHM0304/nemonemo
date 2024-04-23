package com.whm0304.nemo.persistance;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.whm0304.nemo.models.GameLevelPlayerVO;
import com.whm0304.nemo.models.GameUpdateVO;

public interface GameLevelPlayerDao {
	
	@Select(" SELECT * FROM tbl_nemo_play WHERE p_id=#{p_id} AND p_num = #{p_num}")
	public List<GameLevelPlayerVO> selectAll(@Param("p_id") String p_id,@Param("p_num") String p_num);
	
	public int update(GameUpdateVO vo);
	


}
