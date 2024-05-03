package com.nemo.nemo.model;

import javax.swing.Spring;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserVO {
 	private String m_id;
 	private String m_pw;	
 	private String m_nick;	
}
