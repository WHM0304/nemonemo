package com.whm0304.nemo.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
@Builder
public class GameUpdateVO {
	public String p_id;
	public String p_num;
	public String p_row_num;
	public String p_block_name;
	public Integer p_block_value;

}
