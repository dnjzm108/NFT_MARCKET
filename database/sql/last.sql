-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.2.14-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


create user 'ingoo'@'localhost' identified by '1234';
grant all privileges on *.* to 'ingoo'@'localhost';

flush privileges;

CREATE DATABASE db_name DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

-- nft_market 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `nft_market` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `nft_market`;

-- 테이블 nft_market.address 구조 내보내기
CREATE TABLE IF NOT EXISTS `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(40) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `address_nick` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_address_user` (`nickname`),
  CONSTRAINT `FK_address_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.address:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` (`id`, `address`, `nickname`, `address_nick`) VALUES
	(1, '1', 'jin', '집'),
	(2, '2', 'jeong', '111');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;

-- 테이블 nft_market.admin 구조 내보내기
CREATE TABLE IF NOT EXISTS `admin` (
  `id` varchar(20) NOT NULL,
  `pw` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.admin:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`id`, `pw`) VALUES
	('root', 'root');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- 테이블 nft_market.auction 구조 내보내기
CREATE TABLE IF NOT EXISTS `auction` (
  `auction_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `deadline` datetime DEFAULT current_timestamp(),
  `option` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`auction_id`) USING BTREE,
  KEY `FK_auction_product_detail` (`product_id`),
  CONSTRAINT `FK_auction_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.auction:~6 rows (대략적) 내보내기
/*!40000 ALTER TABLE `auction` DISABLE KEYS */;
INSERT INTO `auction` (`auction_id`, `product_id`, `deadline`, `option`) VALUES
	(10, 15, '2021-11-10 10:55:01', NULL),
	(11, 16, '2021-11-10 10:55:06', 1),
	(12, 17, '2021-11-10 10:55:10', NULL),
	(13, NULL, '2021-11-11 11:53:59', 1),
	(14, NULL, '2021-11-11 11:54:06', 0),
	(15, NULL, '2021-11-11 11:54:12', 0);
/*!40000 ALTER TABLE `auction` ENABLE KEYS */;

-- 테이블 nft_market.auction_history 구조 내보내기
CREATE TABLE IF NOT EXISTS `auction_history` (
  `auction_history_id` int(11) NOT NULL AUTO_INCREMENT,
  `auction_id` int(11) DEFAULT NULL,
  `bidder` varchar(20) DEFAULT NULL,
  `bid` int(11) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `status` varchar(10) DEFAULT 'bid',
  PRIMARY KEY (`auction_history_id`) USING BTREE,
  KEY `FK__auction` (`auction_id`),
  KEY `FK_auction_history_user` (`bidder`) USING BTREE,
  CONSTRAINT `FK_auction_history_auction` FOREIGN KEY (`auction_id`) REFERENCES `auction` (`auction_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_auction_history_user` FOREIGN KEY (`bidder`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.auction_history:~6 rows (대략적) 내보내기
/*!40000 ALTER TABLE `auction_history` DISABLE KEYS */;
INSERT INTO `auction_history` (`auction_history_id`, `auction_id`, `bidder`, `bid`, `date`, `status`) VALUES
	(8, 10, 'jeong', 200, '2021-11-10 10:57:26', '유찰'),
	(9, 11, 'seong', 100, '2021-11-10 10:57:35', '낙찰'),
	(10, 10, 'seong', 250, '2021-11-10 10:57:26', '낙찰'),
	(11, 11, 'jeong', 101, '2021-11-10 10:57:35', '입찰'),
	(12, 10, 'jeong', 300, '2021-11-10 10:57:26', '입찰'),
	(13, 11, 'seong', 102, '2021-11-10 10:57:35', '입찰');
/*!40000 ALTER TABLE `auction_history` ENABLE KEYS */;

-- 테이블 nft_market.bigcategory 구조 내보내기
CREATE TABLE IF NOT EXISTS `bigcategory` (
  `code` varchar(20) NOT NULL,
  `value` varchar(20) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.bigcategory:~9 rows (대략적) 내보내기
/*!40000 ALTER TABLE `bigcategory` DISABLE KEYS */;
INSERT INTO `bigcategory` (`code`, `value`) VALUES
	('A1', '남여공용'),
	('B1', '남자 의류'),
	('B2', '남자 속옷/잠옷'),
	('B3', '남자 신발'),
	('B4', '남자 가방/잡화'),
	('C1', '여성 의류'),
	('C2', '여성 솟옷/잠옷'),
	('C3', '여성 신발'),
	('C4', '여성 가방/잡화');
/*!40000 ALTER TABLE `bigcategory` ENABLE KEYS */;

-- 테이블 nft_market.delivery 구조 내보내기
CREATE TABLE IF NOT EXISTS `delivery` (
  `dlvy_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `auction` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `reciever` varchar(20) NOT NULL,
  `address` varchar(50) DEFAULT NULL,
  `request` varchar(50) DEFAULT NULL,
  `recieve_type` varchar(40) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `invoice` varchar(50) DEFAULT NULL,
  `delivery_company` varchar(20) DEFAULT NULL,
  `ready_date` datetime DEFAULT current_timestamp(),
  `ship_date` datetime DEFAULT NULL,
  PRIMARY KEY (`dlvy_id`),
  KEY `FK_delivery_orders` (`order_id`),
  CONSTRAINT `FK_delivery_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.delivery:~7 rows (대략적) 내보내기
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
INSERT INTO `delivery` (`dlvy_id`, `order_id`, `auction`, `status`, `reciever`, `address`, `request`, `recieve_type`, `phone_number`, `invoice`, `delivery_company`, `ready_date`, `ship_date`) VALUES
	(1, NULL, 3, '대기', '성진', '1', '빨리', '문앞', '01088888888', NULL, '한진', '2021-11-07 22:47:22', '2021-11-10 17:21:55'),
	(2, NULL, 5, '발송', '정성진', '2', '부탁', '집앞', '0108979846', '1115555', 'cj', '2021-11-07 22:48:05', '2021-11-10 17:21:55'),
	(3, 4, 6, 'ready', '상엽', '3', 'null', 'directly', '01012345678', '1111111', 'lotte', '2021-11-10 15:02:34', '2021-11-10 17:21:55'),
	(4, 5, 6, 'delivery', '오상', 'null', 'null', 'directly', '01023456789', '2222222', 'lotte', '2021-11-10 15:03:38', '2021-11-10 17:21:55'),
	(5, 6, 7, 'completed', '인구', '5', 'null', 'indirect', '01034567891', '3333333', 'samsung', '2021-11-10 15:04:29', '2021-11-10 17:21:55'),
	(6, 7, 8, 'completed', '구인', '6', 'null', 'directly', '01045678912', '4444444', 'LG', '2021-11-10 15:05:45', '2021-11-10 17:21:55'),
	(7, 8, 9, 'ready', '곽인구', '7', 'null', 'indirect', '01033333333', '6666666', 'SK', '2021-11-10 15:06:30', '2021-11-10 17:21:55');
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;

-- 테이블 nft_market.likes 구조 내보내기
CREATE TABLE IF NOT EXISTS `likes` (
  `product_no` varchar(10) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  KEY `FK_like_product` (`product_no`),
  KEY `FK_likes_user` (`nickname`),
  CONSTRAINT `FK_likes_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_likes_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.likes:~18 rows (대략적) 내보내기
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` (`product_no`, `nickname`) VALUES
	('A103As0001', 'jin'),
	('A103As0001', 'seong'),
	('A103As0001', 'jeong'),
	('A103As0000', 'jin'),
	('A103As0000', 'seong'),
	('A103As0000', 'jeong'),
	('B108Aw0000', 'jin'),
	('B108Aw0000', 'seong'),
	('B108Aw0000', 'jeong'),
	('A103As0001', 'jin'),
	('A103As0001', 'seong'),
	('A103As0001', 'jeong'),
	('A103As0000', 'jin'),
	('A103As0000', 'seong'),
	('A103As0000', 'jeong'),
	('B108Aw0000', 'jin'),
	('B108Aw0000', 'seong'),
	('B108Aw0000', 'jeong');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;

-- 테이블 nft_market.middlecategory 구조 내보내기
CREATE TABLE IF NOT EXISTS `middlecategory` (
  `code` varchar(5) NOT NULL,
  `value` varchar(20) DEFAULT NULL,
  `big_code` varchar(20) NOT NULL,
  PRIMARY KEY (`code`),
  KEY `FK_middlecategory_bigcategory` (`big_code`),
  CONSTRAINT `FK_middlecategory_bigcategory` FOREIGN KEY (`big_code`) REFERENCES `bigcategory` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.middlecategory:~88 rows (대략적) 내보내기
/*!40000 ALTER TABLE `middlecategory` DISABLE KEYS */;
INSERT INTO `middlecategory` (`code`, `value`, `big_code`) VALUES
	('01', '티셔츠', 'A1'),
	('02', '맨투맨/후드티', 'A1'),
	('03', '셔츠', 'A1'),
	('04', '바지', 'A1'),
	('05', '트레이닝복', 'A1'),
	('06', '후드집업/집업류', 'A1'),
	('07', '니트류/조끼', 'A1'),
	('08', '아우터', 'A1'),
	('09', '테마의류', 'A1'),
	('10', '커플룩/패밀리룩', 'A1'),
	('11', '니트/스웨터', 'B1'),
	('12', '가디건', 'B1'),
	('13', '티셔츠', 'B1'),
	('14', '셔츠/남방', 'B1'),
	('15', '정장세트', 'B1'),
	('16', '바지/청바지', 'B1'),
	('17', '트레이닝복', 'B1'),
	('18', '후드집업/집업류', 'B1'),
	('19', '아우터', 'B1'),
	('20', '스포츠의류', 'B1'),
	('21', '코트', 'B1'),
	('22', '점퍼', 'B1'),
	('23', '팬티', 'B2'),
	('24', '러닝', 'B2'),
	('25', '러니펜티세트', 'B2'),
	('26', '잠옷/홈웨어', 'B2'),
	('27', '보정속옷', 'B2'),
	('28', '운동화', 'B3'),
	('29', '부츠', 'B3'),
	('30', '워커', 'B3'),
	('31', '모카신/털신', 'B3'),
	('32', '스니커즈', 'B3'),
	('33', '구두', 'B3'),
	('34', '실내화', 'B3'),
	('35', '슬리퍼', 'B3'),
	('36', '웰트화', 'B3'),
	('37', '슬립온', 'B3'),
	('38', '보트슈즈', 'B3'),
	('39', '샌들', 'B3'),
	('40', '기능화', 'B3'),
	('41', '백팩', 'B4'),
	('42', '크로스백', 'B4'),
	('43', '숄더백', 'B4'),
	('44', '토트백', 'B4'),
	('45', '브리프케이스', 'B4'),
	('46', '클러치백', 'B4'),
	('47', '힙색', 'B4'),
	('48', '니트/스웨터', 'C1'),
	('49', '가디건', 'C1'),
	('50', '원피스', 'C1'),
	('51', '티셔츠', 'C1'),
	('52', '브라우스/셔츠', 'C1'),
	('53', '점퍼', 'C1'),
	('54', '재킷', 'C1'),
	('55', '코트', 'C1'),
	('56', '바지', 'C1'),
	('57', '청바지', 'C1'),
	('58', '스커트', 'C1'),
	('59', '레깅스', 'C1'),
	('60', '트레닝복', 'C1'),
	('61', '브라', 'C2'),
	('62', '팬티', 'C2'),
	('63', '브라팬티세트', 'C2'),
	('64', '잠옷/홈웨이', 'C2'),
	('65', '보정속옷', 'C2'),
	('66', '슬립', 'C2'),
	('67', '러닝/캐미솔', 'C2'),
	('68', '속치마/속바지', 'C2'),
	('69', '언더웨어소품', 'C2'),
	('70', '부츠', 'C3'),
	('71', '부티', 'C3'),
	('72', '워커', 'C3'),
	('73', '단화', 'C3'),
	('74', '힐/펌프스', 'C3'),
	('75', '운동화', 'C3'),
	('76', '실내화', 'C3'),
	('77', '슬리퍼', 'C3'),
	('78', '샌들', 'C3'),
	('79', '기능화', 'C3'),
	('80', '노트북가방', 'C4'),
	('81', '서류', 'C4'),
	('82', '백팩', 'C4'),
	('83', '크로스백', 'C4'),
	('84', '클러치백', 'C4'),
	('85', '토트백', 'C4'),
	('86', '파우치', 'C4'),
	('87', '히프색', 'C4'),
	('88', '가방소품', 'C4');
/*!40000 ALTER TABLE `middlecategory` ENABLE KEYS */;

-- 테이블 nft_market.orders 구조 내보내기
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `buyer` varchar(20) NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `qty` int(11) NOT NULL,
  PRIMARY KEY (`order_id`) USING BTREE,
  KEY `FK_orders_user` (`buyer`),
  KEY `FK_orders_product_detail` (`product_id`),
  CONSTRAINT `FK_orders_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`),
  CONSTRAINT `FK_orders_user` FOREIGN KEY (`buyer`) REFERENCES `user` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.orders:~8 rows (대략적) 내보내기
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`order_id`, `product_id`, `price`, `buyer`, `date`, `qty`) VALUES
	(3, 8, 10, 'jin', '2021-11-07 21:18:23', 1),
	(4, 17, 66, 'jin', '2021-11-10 14:54:10', 1),
	(5, 16, 99, 'jin', '2021-11-10 14:54:49', 1),
	(6, 15, 199, 'jin', '2021-11-10 14:56:14', 1),
	(7, 13, 18, 'jin', '2021-11-10 14:58:11', 1),
	(8, 14, 12, 'jin', '2021-11-10 14:58:25', 1),
	(9, 13, 18, '11111111', '2021-11-11 19:05:54', 1),
	(10, 14, 12, '11111111', '2021-11-12 10:14:08', 2);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- 테이블 nft_market.product 구조 내보내기
CREATE TABLE IF NOT EXISTS `product` (
  `product_no` varchar(10) NOT NULL,
  `name` varchar(30) NOT NULL,
  `explain` varchar(200) NOT NULL,
  `creater` varchar(20) NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `likes` int(11) NOT NULL DEFAULT 0,
  `type` varchar(10) NOT NULL,
  `total_qty` int(11) DEFAULT NULL,
  `leftover` int(11) DEFAULT NULL,
  `symbol` varchar(30) NOT NULL,
  `contractAddr` varchar(256) DEFAULT NULL,
  `tokenURI` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`product_no`),
  KEY `FK_product_user` (`creater`),
  CONSTRAINT `FK_product_user` FOREIGN KEY (`creater`) REFERENCES `user` (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.product:~10 rows (대략적) 내보내기
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`product_no`, `name`, `explain`, `creater`, `date`, `likes`, `type`, `total_qty`, `leftover`, `symbol`, `contractAddr`, `tokenURI`) VALUES
	('A103As0000', '셔츠입니다.', '셔츠에요', 'jin', '2021-11-07 20:38:14', 0, 'buy', 1, 1, '', NULL, NULL),
	('A103As0001', '바지', '그냥 바지입니다', 'jin', '2021-11-07 20:44:36', 0, 'buy', 1, 1, '', NULL, NULL),
	('A105As1010', '구찌 긴팔옷', '긴팔원숭이', 'seong', '2021-11-10 10:40:47', 33, 'auction', 1, 1, '', NULL, NULL),
	('A105As1111', '코스 블라우스', '여성옷', 'seong', '2021-11-10 10:33:54', 19, 'buy', 1, 1, '', NULL, NULL),
	('B103Aw1245', '노스페이스 히말라야', '남녀공용 패딩', 'jin', '2021-11-10 10:46:57', 55, 'auction', 1, 1, '', NULL, NULL),
	('B105Aw1221', '캐나다구스 점퍼', '남자옷', 'jin', '2021-11-10 10:39:14', 22, 'auction', 1, 1, '', NULL, NULL),
	('B108Aw0000', '아우터', '아우터입니다.', 'seong', '2021-11-07 20:39:20', 0, '', 1, 1, '', NULL, NULL),
	('B108Aw0001', '나이키 패딩', '남녀공용', 'jeong', '2021-11-07 20:39:20', 41, 'buy', 1, -1, '', NULL, NULL),
	('B108Aw0002', '나이키 패딩', '남녀공용', 'jeong', '2021-11-07 20:39:20', 42, 'buy', 1, 1, '', NULL, NULL),
	('B108Aw0003', '나이키 패딩', '남녀공용', 'jeong', '2021-11-07 20:39:20', 42, 'buy', 1, 1, '', NULL, NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- 테이블 nft_market.product_detail 구조 내보내기
CREATE TABLE IF NOT EXISTS `product_detail` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_no` varchar(10) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `rest` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`product_id`) USING BTREE,
  KEY `product_no` (`product_no`),
  CONSTRAINT `FK_product_detail_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.product_detail:~10 rows (대략적) 내보내기
/*!40000 ALTER TABLE `product_detail` DISABLE KEYS */;
INSERT INTO `product_detail` (`product_id`, `product_no`, `color`, `size`, `qty`, `rest`, `price`) VALUES
	(8, 'A103As0000', 'blue', 'ss', 10, 10, 20),
	(9, 'A103As0001', 'red', 'l', 20, 20, 10),
	(10, 'A103As0000', 'black', 'xl', 20, 20, 20),
	(11, 'B108Aw0000', 'blue', 'l', 20, 20, 30),
	(12, 'B108Aw0000', 'yellow', 'lx', 20, 20, 20),
	(13, 'A105As1111', 'black', 's', 1, 50, 18),
	(14, 'B108Aw0001', 'skyblue', '2lx', 1, 51, 12),
	(15, 'A105As1010', 'gray', 'l', 1, 11, 199),
	(16, 'B105Aw1221', 'white', 'm', 1, 9, 99),
	(17, 'B103Aw1245', 'red', 's', 1, 20, 66),
	(18, 'B108Aw0001', 'red', 'l', 20, 20, 20),
	(19, 'B108Aw0002', 'blue', 'l', 20, 20, 20),
	(20, 'B108Aw0003', 'red', 'l', 20, 20, 20);
/*!40000 ALTER TABLE `product_detail` ENABLE KEYS */;

-- 테이블 nft_market.product_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `product_image` (
  `product_no` varchar(10) DEFAULT NULL,
  `img` varchar(50) DEFAULT NULL,
  KEY `FK__product` (`product_no`),
  CONSTRAINT `FK_product_image_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.product_image:~12 rows (대략적) 내보내기
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` (`product_no`, `img`) VALUES
	('A103As0001', '/이재명.png'),
	('A103As0001', '/이재명.png'),
	('A103As0000', '/이재명.png'),
	('A103As0000', '/이재명.png'),
	('B108Aw0000', '/이재명.png'),
	('B108Aw0000', '/이재명.png'),
	('A105As1010', '/윤석열.png'),
	('B108Aw0000', '/이재명.png'),
	('B103Aw1245', '/심상정.png'),
	('B105Aw1221', '/안철수.png'),
	('A105As1111', '/홍준표.png'),
	('B108Aw0001', '/이낙연.png'),
	('B108Aw0001', '/안철수.png'),
	('B108Aw0002', '/안철수.png'),
	('B108Aw0003', '/안철수.png');
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;

-- 테이블 nft_market.seller 구조 내보내기
CREATE TABLE IF NOT EXISTS `seller` (
  `nickname` varchar(20) NOT NULL,
  `seller_no` varchar(50) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 0,
  KEY `FK_seller_user` (`nickname`) USING BTREE,
  CONSTRAINT `FK_seller_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='status\r\n0: 구매자  \r\n1: 반려 \r\n2: 요청\r\n3: 인증';

-- 테이블 데이터 nft_market.seller:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` (`nickname`, `seller_no`, `status`) VALUES
	('jin', 'aa', 1),
	('seong', '545321', 1);
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;

-- 테이블 nft_market.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `nickname` varchar(20) NOT NULL,
  `wallet` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `picture` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.user:~4 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`nickname`, `wallet`, `email`, `picture`) VALUES
	('11111111', '0x25390a007d19ce6014f47ce4b79faaffbf3df3d3', '11111', 'https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/profile/image/sdf.png'),
	('jeong', 'x6548', '1564685', '1568'),
	('jin', '1x6848546', 'jin.sdfkl', 'dsfa'),
	('seong', 'x2897', '84asd984', 'as8d94');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
