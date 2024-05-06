package com.nemo.hello.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nemo.hello.dao.ClearDao;
import com.nemo.hello.dao.SpeechDao;
import com.nemo.hello.models.ClearVO;
import com.nemo.hello.models.SpeechVO;


/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private final ClearDao clearDao;
	private final SpeechDao speechDao;

	public HomeController(ClearDao clearDao, SpeechDao speechDao) {
		super();
		this.clearDao = clearDao;
		this.speechDao = speechDao;
	}





	@RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(Model model, ClearVO clearVO) {
		
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
        
//        ----------------------- 메인화면용
        
        // 클리어정보 보내기 화면 이미지용
        for(int i=1 ; i<=5 ; i++) {
    		String userid = "1"; // 임시적용 id
    		clearVO.setC_id(userid);
    		
			clearVO.setC_level(i);
			ClearVO clearData =  clearDao.findByRow(clearVO);
			
			    model.addAttribute("clear_data" + i , clearData);
			
		}
        
        //--------------------------------------

        return "layout";
	}
	
}
