package com.whm0304.nemo.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GameLevel1PlayerVO {
	
	private String p_id;
	private int p_num;
	private int p_row_num;
	private Integer p_block1;
	private Integer p_block2;
	private Integer p_block3;
	private Integer p_block4;
	private Integer p_block5;
	

}
