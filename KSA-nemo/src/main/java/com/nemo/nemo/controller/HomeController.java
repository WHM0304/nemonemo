package com.nemo.nemo.controller;

import java.lang.reflect.Field;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.nemo.nemo.dao.ClearDao;
import com.nemo.nemo.dao.NemoDao;
import com.nemo.nemo.dao.SpeechDao;
import com.nemo.nemo.model.ClearVO;
import com.nemo.nemo.model.NemoVO;
import com.nemo.nemo.model.SpeechVO;

@Controller
public class HomeController {

	private final NemoDao nemoDao;
	private final SpeechDao speechDao;
	private final ClearDao clearDao;
public HomeController(NemoDao nemoDao, SpeechDao speechDao, ClearDao clearDao) {
		super();
		this.nemoDao = nemoDao;
		this.speechDao = speechDao;
		this.clearDao = clearDao;
	}

	//
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
        
        
        
        
        for(int i=1 ; i<=5 ; i++) {
        	try {
        		String p_id = userService.getLoginUid();
        		clearVO.setC_id(p_id);
				
			} catch (Exception e) {
				
				String id = "11";
				clearVO.setC_id(id);
			}
    		
//    		clearVO.setC_id("11");
        	clearVO.setC_clear(1);
			clearVO.setC_level(i);
			ClearVO clearData =  clearDao.findByRow(clearVO);
			
			    model.addAttribute("clear_data" + i , clearData);
			// 클리어정보 1~5에 따라 그림다르게
		}

        return "layout";
	}
	
	@GetMapping("/nono1")
	public String nono1(Model model) {
		return generateNonogram(1, 5, "nonogram", model);
	}

	@GetMapping("/nono2")
	public String nono2(Model model) {
		return generateNonogram(2, 7, "nonogram2", model);
	}

	@GetMapping("/nono3")
	public String nono3(Model model) {
		return generateNonogram(3, 9, "nonogram3", model);
	}

	@GetMapping("/nono4")
	public String nono4(Model model) {
		return generateNonogram(4, 11, "nonogram4", model);
	}

	@GetMapping("/nono5")
	public String nono5(Model model) {
		return generateNonogram(5, 15, "nonogram5", model);
	}

	private String generateNonogram(int nNum, int columnCount, String viewName, Model model) {
		List<NemoVO> vo = nemoDao.selectByNNum(nNum);

		List<String> colHints = generateColumnHints(vo, columnCount);
		generateRowHints(vo, columnCount);

		model.addAttribute("rows", vo);
		model.addAttribute("colHints", colHints);

		return viewName;
	}

	private List<String> generateColumnHints(List<NemoVO> vo, int columnCount) {
		List<String> colHints = new ArrayList<>();
		for (int i = 1; i <= columnCount; i++) {
			StringBuilder colHintBuilder = new StringBuilder();
			int count = 0;
			boolean hasValue = false; // 1의 값이 있는지 여부를 확인하는 변수
			for (NemoVO row : vo) {
				try {
					Field field = row.getClass().getDeclaredField("n_block" + i);
					field.setAccessible(true);
					int blockValue = field.getInt(row);
					if (blockValue == 1) {
						count++;
						hasValue = true; // 1의 값이 있음을 표시
					} else {
						if (count > 0) {
							colHintBuilder.append(count).append(" ");
							count = 0;
						}
					}
				} catch (NoSuchFieldException | IllegalAccessException e) {
					e.printStackTrace();
				}
			}
			// 1의 값이 없는 경우에만 0을 추가
			if (!hasValue && count > 0) {
				colHintBuilder.append("0 ");
			}
			if (count > 0) {
				colHintBuilder.append(count).append(" ");
			}
			colHints.add(colHintBuilder.toString().trim());
		}
		return colHints;
	}

	private void generateRowHints(List<NemoVO> vo, int columnCount) {
		for (NemoVO row : vo) {
			StringBuilder hintsBuilder = new StringBuilder();
			int count = 0;
			boolean hasOne = false; // 1의 값이 있는지 여부를 확인하기 위한 변수
			for (int i = 1; i <= columnCount; i++) {
				try {
					Field field = row.getClass().getDeclaredField("n_block" + i);
					field.setAccessible(true);
					int blockValue = field.getInt(row);
					if (blockValue == 1) {
						count++;
						hasOne = true; // 1의 값이 있는 경우 true로 설정
					} else {
						if (count > 0) {
							hintsBuilder.append(count).append(" ");
							count = 0;
						}
					}
				} catch (NoSuchFieldException | IllegalAccessException e) {
					e.printStackTrace();
				}
			}
			if (count > 0) {
				hintsBuilder.append(count).append(" ");
			}
			// 1의 값이 없는 경우에도 숫자 힌트를 생성
			if (!hasOne) {
				hintsBuilder.append("0 ");
			}
			row.setHints(hintsBuilder.toString().trim());
		}
	}
}
