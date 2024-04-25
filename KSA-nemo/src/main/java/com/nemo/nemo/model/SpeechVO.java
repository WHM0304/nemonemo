package com.nemo.nemo.model;

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
public class SpeechVO {
	private Integer s_num;
	private String s_a1;
	private String s_b1;
	private String s_a2;
	private String s_b2;
	
	// 대화 스크립트를 생성하는 메서드
    public String generateConversationScript() {
        StringBuilder scriptBuilder = new StringBuilder();
        scriptBuilder.append("A: ").append(s_a1).append("\n")
                     .append("B: ").append(s_b1).append("\n")
                     .append("A: ").append(s_a2).append("\n")
                     .append("B: ").append(s_b2).append("\n");
        return scriptBuilder.toString();
    }
}
