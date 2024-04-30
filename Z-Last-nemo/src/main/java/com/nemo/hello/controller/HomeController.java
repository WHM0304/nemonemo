package com.nemo.hello.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nemo.hello.dao.SpeechDao;
import com.nemo.hello.models.SpeechVO;


/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private final SpeechDao speechDao;
	
	

	public HomeController(SpeechDao speechDao) {
		super();
		this.speechDao = speechDao;
	}



	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(Model model) {
		
        LocalDate now = LocalDate.now();
        int year = now.getYear();
        int month = now.getMonthValue();
        int day = now.getDayOfMonth();

        List<SpeechVO> speechList = speechDao.selectAll();
//		List<SpeechVO> speechList = speechDao.selectByNNum(1);

        // 모델에 날짜와 대화 데이터 추가
        model.addAttribute("year", year);
        model.addAttribute("month", month);
        model.addAttribute("day", day);
        
        model.addAttribute("SPEECH", speechList);
        model.addAttribute("BODY", "HOME");

        return "layout";
	}
	
}
