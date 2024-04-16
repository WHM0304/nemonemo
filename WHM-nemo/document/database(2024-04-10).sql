CREATE DATABASE nemodb;
DROP DATABASE nemodb;
USE nemodb;

-- 회원정보 테이블
CREATE TABLE tbl_members(
m_id	VARCHAR(20)		PRIMARY KEY,
m_pw	VARCHAR(125)	NOT NULL	,
m_nick	VARCHAR(20)		
);
SELECT * FROM tbl_members;
INSERT INTO tbl_members
(m_id,m_pw,m_nick)
VALUE ('1','1','1번님');

-- 5x5 정답테이블
CREATE TABLE tbl_nemo (
n_num INT,
n_row_num INT,
n_block1 INT,
n_block2 INT,
n_block3 INT,
n_block4 INT,
n_block5 INT,
n_block6 INT,
n_block7 INT,
n_block8 INT,
n_block9 INT,
n_block10 INT,
n_block11 INT,
n_block12 INT,
n_block13 INT,
n_block14 INT,
n_block15 INT,
PRIMARY KEY (n_num, n_row_num)
);

SELECT *FROM tbl_nemo;


-- 5x5 유저의 플레이정보 (+ 회원아이디)
CREATE TABLE tbl_nemo_play (

p_id VARCHAR(20),
p_num INT,
p_row_num INT,
p_block1 INT,
p_block2 INT,
p_block3 INT,
p_block4 INT,
p_block5 INT,
p_block6 INT,
p_block7 INT,
p_block8 INT,
p_block9 INT,
p_block10 INT,
p_block11 INT,
p_block12 INT,
p_block13 INT,
p_block14 INT,
p_block15 INT,
PRIMARY KEY (p_id, p_num, p_row_num)
);

INSERT INTO tbl_nemo_play
(p_id,p_num,p_row_num,p_block1,p_block2,p_block3,p_block4,p_block5)
VALUE('1','1','5','0','0','0','0','0');

SELECT * FROM tbl_nemo_play;

-- 클리어정보
CREATE TABLE tbl_clear (
c_id VARCHAR(20),
c_stage INT,
c_level INT,
c_clear INT
);



