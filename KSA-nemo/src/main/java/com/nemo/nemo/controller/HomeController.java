package com.nemo.nemo.controller;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.nemo.nemo.dao.NemoDao;
import com.nemo.nemo.dao.UserNemoDao;
import com.nemo.nemo.model.NemoVO;

@Controller
public class HomeController {
  
    private final NemoDao nemoDao;
    private final UserNemoDao userNemoDao;
    
    public HomeController(NemoDao nemoDao, UserNemoDao userNemoDao) {
        this.nemoDao = nemoDao;
        this.userNemoDao = userNemoDao;
    }
    
    @GetMapping("/nono1")
    public String nono1(Model model) {
    	List<NemoVO> vo = nemoDao.selectByNNum(1);

        // 열의 숫자 힌트를 생성하는 부분
        List<String> colHints = new ArrayList<>();
        for (int i = 1; i <= 5; i++) { // 열의 숫자 힌트를 생성하기 위해 5번 반복
            StringBuilder colHintBuilder = new StringBuilder();
            for (NemoVO row : vo) {
                try {
                    Field field = row.getClass().getDeclaredField("n_block" + i);
                    field.setAccessible(true);
                    int blockValue = field.getInt(row);
                    if (blockValue == 1) {
                        colHintBuilder.append(1); // 해당 열에 1이 있으면 1 추가
                    } else {
                        colHintBuilder.append(0); // 해당 열에 1이 없으면 0 추가
                    }
                } catch (NoSuchFieldException | IllegalAccessException e) {
                    e.printStackTrace();
                }
            }
            colHints.add(colHintBuilder.toString().trim());
        }

        // 행의 숫자 힌트를 생성하는 부분
        for (NemoVO row : vo) {
            StringBuilder hintsBuilder = new StringBuilder();
            int count = 0;
            boolean hasOne = false; // 1의 값이 있는지 여부를 확인하기 위한 변수
            for (int i = 1; i <= 5; i++) {
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

        model.addAttribute("rows", vo);
        model.addAttribute("colHints", colHints); // 열의 숫자 힌트를 모델에 추가합니다.
      
        return "nonogram";
    }
    @GetMapping("/nono2")
    public String nono2(Model model) {
        List<NemoVO> vo = nemoDao.selectByNNum(2);
        
        for(NemoVO row : vo) {
            StringBuilder hintsBuilder = new StringBuilder();
            int count = 0;
            for (int i = 1; i <= 7; i++) { // 7���� ���� ����
                try {
                    Field field = row.getClass().getDeclaredField("n_block" + i);
                    field.setAccessible(true);
                    int blockValue = field.getInt(row);
                    if (blockValue == 1) {
                        count++;
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
                hintsBuilder.append(count);
            }
            row.setHints(hintsBuilder.toString().trim());
        }
        
        model.addAttribute("rows", vo);
      
        return "nonogram2";
    }
    
    @GetMapping("/nono3")
    public String nono3(Model model) {
        List<NemoVO> vo = nemoDao.selectByNNum(3);
        
        for(NemoVO row : vo) {
            StringBuilder hintsBuilder = new StringBuilder();
            int count = 0;
            for (int i = 1; i <= 9; i++) { // 7���� ���� ����
                try {
                    Field field = row.getClass().getDeclaredField("n_block" + i);
                    field.setAccessible(true);
                    int blockValue = field.getInt(row);
                    if (blockValue == 1) {
                        count++;
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
                hintsBuilder.append(count);
            }
            row.setHints(hintsBuilder.toString().trim());
        }
        
        model.addAttribute("rows", vo);
      
        return "nonogram3";
    }
    
    @GetMapping("/nono4")
    public String nono4(Model model) {
        List<NemoVO> vo = nemoDao.selectByNNum(4);
        
        for(NemoVO row : vo) {
            StringBuilder hintsBuilder = new StringBuilder();
            int count = 0;
            for (int i = 1; i <= 11; i++) { // 7���� ���� ����
                try {
                    Field field = row.getClass().getDeclaredField("n_block" + i);
                    field.setAccessible(true);
                    int blockValue = field.getInt(row);
                    if (blockValue == 1) {
                        count++;
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
                hintsBuilder.append(count);
            }
            row.setHints(hintsBuilder.toString().trim());
        }
        
        model.addAttribute("rows", vo);
      
        return "nonogram4";
    }
    
    @GetMapping("/nono5")
    public String nono5(Model model) {
    	List<NemoVO> vo = nemoDao.selectByNNum(1);

        // 열의 숫자 힌트를 생성하는 부분
        List<String> colHints = new ArrayList<>();
        for (int i = 1; i <= 5; i++) { // 열의 숫자 힌트를 생성하기 위해 5번 반복
            StringBuilder colHintBuilder = new StringBuilder();
            for (NemoVO row : vo) {
                try {
                    Field field = row.getClass().getDeclaredField("n_block" + i);
                    field.setAccessible(true);
                    int blockValue = field.getInt(row);
                    if (blockValue == 1) {
                        colHintBuilder.append(1); // 해당 열에 1이 있으면 1 추가
                    } else {
                        colHintBuilder.append(0); // 해당 열에 1이 없으면 0 추가
                    }
                } catch (NoSuchFieldException | IllegalAccessException e) {
                    e.printStackTrace();
                }
            }
            colHints.add(colHintBuilder.toString().trim());
        }

        // 행의 숫자 힌트를 생성하는 부분
        for (NemoVO row : vo) {
            StringBuilder hintsBuilder = new StringBuilder();
            int count = 0;
            boolean hasOne = false; // 1의 값이 있는지 여부를 확인하기 위한 변수
            for (int i = 1; i <= 5; i++) {
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

        model.addAttribute("rows", vo);
        model.addAttribute("colHints", colHints); // 열의 숫자 힌트를 모델에 추가합니다.
      
        return "nonogram5";
    }
    
    // �� ���� ���� ��Ʈ�� ����ϴ� �޼���
    private String calculateHints(NemoVO row) {
        StringBuilder hints = new StringBuilder();
        int consecutiveOnes = 0;
        for (int i = 1; i <= 5; i++) {
            try {
                Field field = row.getClass().getDeclaredField("n_block" + i);
                field.setAccessible(true);
                int block = field.getInt(row);
                if (block == 1) {
                    consecutiveOnes++;
                } else if (consecutiveOnes > 0) {
                    hints.append(consecutiveOnes).append(", ");
                    consecutiveOnes = 0;
                }
            } catch (NoSuchFieldException | IllegalAccessException e) {
                e.printStackTrace();
            }
        }
        if (consecutiveOnes > 0) {
            hints.append(consecutiveOnes);
        }
        return hints.toString();
    }
}
