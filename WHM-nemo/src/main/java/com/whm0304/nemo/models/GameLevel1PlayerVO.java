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
	
	private int n_num;
	private int n_row_num;
	private Integer n_block1;
	private Integer n_block2;
	private Integer n_block3;
	private Integer n_block4;
	private Integer n_block5;
	

}
