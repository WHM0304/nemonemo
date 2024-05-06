package com.nemo.hello.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.nemo.hello.dao.ClearDao;
import com.nemo.hello.dao.GameDao;
import com.nemo.hello.dao.PlayerDao;
import com.nemo.hello.models.ClearVO;
import com.nemo.hello.models.GameVO;
import com.nemo.hello.models.PlayerVO;
import com.nemo.hello.models.UpdateVO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/game")
public class GameController {
	
	private final GameDao gameDao;
	private final PlayerDao playerDao;
	private final ClearDao clearDao;

	public GameController(GameDao gameDao, PlayerDao playerDao, ClearDao clearDao) {
		super();
		this.gameDao = gameDao;
		this.playerDao = playerDao;
		this.clearDao = clearDao;
	}

	@RequestMapping(value = "/{LEVEL}", method = RequestMethod.GET)
	public String game(Model model, @PathVariable(name = "LEVEL", required = false) String LEVEL) {

		String p_num = LEVEL;
		log.debug("asdasdasd{}", LEVEL);
		String p_id = "1";
		List<GameVO> game = gameDao.selectAll(p_num);

		List<PlayerVO> player = playerDao.selectAll(p_id, p_num);
		try {
			playerDao.insert(p_id, p_num);
		} catch (Exception e) {
			// TODO: handle exception
		}
		model.addAttribute("STEP", game);
		model.addAttribute("PLAY", player);
		String output = null;
		if (LEVEL.equals("1")) {
			output = "first";
//			log.debug("asdaskdpiowqkpodqkwpodqwkopd : {}",LEVEL);
		} else if (LEVEL.equals("2")) {
			output = "second";
		} else if (LEVEL.equals("3")) {
			output = "third";
		} else if (LEVEL.equals("4")) {
			output = "fourth";
		} else if (LEVEL.equals("5")) {
			output = "last";
		}
		log.debug("asdaskdpiowqkpodqkwpodqwkopd : {}", LEVEL);
		return "game-form/" + output + "/game";
	}

	@RequestMapping(value = "/{LEVEL}", method = RequestMethod.POST)
	public String game(UpdateVO vo, @PathVariable(name = "LEVEL", required = false) String LEVEL) {

		String p_id = "1";
		vo.setP_id(p_id);

		log.debug("dd : {}", vo);
		int result = playerDao.update(vo);
//		int result = playerDao.update(vo); 
		return "redirect:/game/{LEVEL}";
//		return "game-form/first/game";

	}

	@RequestMapping(value = "/reset/{p_num}/{p_row_num}", method = RequestMethod.GET)
	public String reset(Model model, PlayerVO vo, @PathVariable(name = "p_num", required = false) String p_num) {

		String p_id = "1";
		vo.setP_id(p_id);
		log.debug(" VO :{}", Integer.valueOf(vo.getP_row_num()));
		Integer max = Integer.valueOf(vo.getP_row_num());
		
		try {
			int reset = playerDao.reset(p_id, p_num);
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		try {
			playerDao.insert(p_id, p_num);
			
		} catch (Exception e) {
			// TODO: handle exception
		}

		log.debug("확인좀해봅시다 --{} -- {}", p_id, p_num);
		return "redirect:/game/{p_num}";
//		return null;
//		return "game-form/first/game";
	}
	
	
	// 클리어 정보 생성 : 정답확인 버튼을 눌렀을때(정답이면)의 이동할 주소
	@RequestMapping(value="/clear/{p_num}")
	public String clear_check(Model model, ClearVO clearVO, @PathVariable(name = "p_num", required = false) Integer p_num) {
		
		// 클리어 정보를 생성하고
        clearVO.setC_id("1"); // 임시 적용 id 
        clearVO.setC_level(p_num);
        clearVO.setC_clear(1); // 1 로 메인 jsp 에서확인
        clearDao.insert(clearVO);
		
		
		// 완성된 이미지 보여주는 용도 : 클리어 정보 조회
        for(int i=1 ; i<=5 ; i++) {
    		String userid = "1"; // 임시적용 id
    		clearVO.setC_id(userid);
    		
			clearVO.setC_level(i);
			ClearVO clearData =  clearDao.findByRow(clearVO);
			
			    model.addAttribute("clear_data" + i , clearData);	
		}
        
        
		// return "redirect:/game/{p_num}"; // 다시 게임하던 화면으로 보내주기
        // 다시 한번더 클리어 메시지 생성할 주소로 갔다가 마지막에.. 다시게임화면으로
        
//        return "redirect:/game/clear_msg/{p_num}";
		
        
		// 그냥 완성화면을 아예 만들어버리자..
        return "clear";
	}
	

}
