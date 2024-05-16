package com.whm0304.nemo.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BridgeController {
	
	@GetMapping("/bridge")
	public List<String> ping(){
		return new ArrayList<>(Arrays.asList("HI","HELLO"));
		
	}

}
