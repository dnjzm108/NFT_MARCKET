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


-- nft_market 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `nft_market` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `nft_market`;

-- 테이블 nft_market.address 구조 내보내기
CREATE TABLE IF NOT EXISTS `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(40) CHARACTER SET utf8 NOT NULL,
  `nickname` varchar(20) CHARACTER SET utf8 NOT NULL,
  `address_nick` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_address_user` (`nickname`),
  CONSTRAINT `FK_address_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.address:~2 rows (대략적) 내보내기
DELETE FROM `address`;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` (`id`, `address`, `nickname`, `address_nick`) VALUES
	(1, '1', 'jin', '집'),
	(2, '2', 'jeong', '111');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;

-- 테이블 nft_market.admin 구조 내보내기
CREATE TABLE IF NOT EXISTS `admin` (
  `id` varchar(20) CHARACTER SET utf8 NOT NULL,
  `pw` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.admin:~0 rows (대략적) 내보내기
DELETE FROM `admin`;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` (`id`, `pw`) VALUES
	('root', 'root');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- 테이블 nft_market.auction 구조 내보내기
CREATE TABLE IF NOT EXISTS `auction` (
  `auction_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `deadline` datetime NOT NULL DEFAULT current_timestamp(),
  `option` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`auction_id`) USING BTREE,
  KEY `FK_auction_product_detail` (`product_id`),
  CONSTRAINT `FK_auction_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.auction:~6 rows (대략적) 내보내기
DELETE FROM `auction`;
/*!40000 ALTER TABLE `auction` DISABLE KEYS */;
INSERT INTO `auction` (`auction_id`, `product_id`, `deadline`, `option`) VALUES
	(6, 8, '2021-11-07 21:01:08', NULL),
	(7, NULL, '2021-11-07 21:03:02', NULL),
	(8, NULL, '2021-11-07 21:03:16', NULL),
	(9, NULL, '2021-11-07 21:03:36', NULL),
	(10, 15, '2021-11-10 10:51:35', NULL),
	(11, 16, '2021-11-10 10:52:35', NULL);
/*!40000 ALTER TABLE `auction` ENABLE KEYS */;

-- 테이블 nft_market.auction_history 구조 내보내기
CREATE TABLE IF NOT EXISTS `auction_history` (
  `auction_history_id` int(11) NOT NULL AUTO_INCREMENT,
  `auction_id` int(11) DEFAULT NULL,
  `bider` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `bid` int(11) DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `status` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`auction_history_id`) USING BTREE,
  KEY `FK__auction` (`auction_id`),
  KEY `FK_auction_history_user` (`bider`),
  CONSTRAINT `FK_auction_history_auction` FOREIGN KEY (`auction_id`) REFERENCES `auction` (`auction_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_auction_history_user` FOREIGN KEY (`bider`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.auction_history:~5 rows (대략적) 내보내기
DELETE FROM `auction_history`;
/*!40000 ALTER TABLE `auction_history` DISABLE KEYS */;
INSERT INTO `auction_history` (`auction_history_id`, `auction_id`, `bider`, `bid`, `date`, `status`) VALUES
	(3, 6, 'jin', 12, '2021-11-07 21:01:44', NULL),
	(4, 6, 'seong', 13, '2021-11-07 21:02:05', NULL),
	(5, 6, 'jin', 45, '2021-11-07 21:04:15', NULL),
	(6, 6, 'jin', 50, '2021-11-07 21:04:34', NULL),
	(7, 6, 'seong', 45, '2021-11-07 21:04:45', NULL);
/*!40000 ALTER TABLE `auction_history` ENABLE KEYS */;

-- 테이블 nft_market.bigcategory 구조 내보내기
CREATE TABLE IF NOT EXISTS `bigcategory` (
  `code` varchar(20) CHARACTER SET utf8 NOT NULL,
  `value` varchar(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.bigcategory:~9 rows (대략적) 내보내기
DELETE FROM `bigcategory`;
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

-- 테이블 nft_market.delievery 구조 내보내기
CREATE TABLE IF NOT EXISTS `delievery` (
  `dlvy_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `auction` int(11) DEFAULT NULL,
  `reciever` varchar(20) CHARACTER SET utf8 NOT NULL,
  `status` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `invoice` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `request` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `recieve_type` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `delievery_company` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `address` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `date` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`dlvy_id`),
  KEY `FK_delievery_orders` (`order_id`),
  CONSTRAINT `FK_delievery_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.delievery:~2 rows (대략적) 내보내기
DELETE FROM `delievery`;
/*!40000 ALTER TABLE `delievery` DISABLE KEYS */;
INSERT INTO `delievery` (`dlvy_id`, `order_id`, `auction`, `reciever`, `status`, `invoice`, `request`, `recieve_type`, `phone_number`, `delievery_company`, `address`, `date`) VALUES
	(1, NULL, 3, '성진', '대기', NULL, '빨리', '문앞', '01088888888', '한진', '1', '2021-11-07 22:47:22'),
	(2, NULL, 5, '정성진', '발송', '1115555', '부탁', '집앞', '0108979846', 'cj', '2', '2021-11-07 22:48:05');
/*!40000 ALTER TABLE `delievery` ENABLE KEYS */;

-- 테이블 nft_market.likes 구조 내보내기
CREATE TABLE IF NOT EXISTS `likes` (
  `product_no` varchar(10) CHARACTER SET utf8 NOT NULL,
  `nickname` varchar(20) CHARACTER SET utf8 NOT NULL,
  KEY `FK_like_product` (`product_no`),
  KEY `FK_likes_user` (`nickname`),
  CONSTRAINT `FK_likes_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_likes_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.likes:~9 rows (대략적) 내보내기
DELETE FROM `likes`;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
INSERT INTO `likes` (`product_no`, `nickname`) VALUES
	('A104As0000', 'jin'),
	('A104As0000', 'seong'),
	('A104As0000', 'jeong'),
	('A103As0000', 'jin'),
	('A103As0000', 'seong'),
	('A103As0000', 'jeong'),
	('B108Aw0000', 'jin'),
	('B108Aw0000', 'seong'),
	('B108Aw0000', 'jeong');
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;

-- 테이블 nft_market.middlecategory 구조 내보내기
CREATE TABLE IF NOT EXISTS `middlecategory` (
  `code` varchar(5) CHARACTER SET utf8 NOT NULL,
  `value` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `big_code` varchar(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`code`),
  KEY `FK_middlecategory_bigcategory` (`big_code`),
  CONSTRAINT `FK_middlecategory_bigcategory` FOREIGN KEY (`big_code`) REFERENCES `bigcategory` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.middlecategory:~88 rows (대략적) 내보내기
DELETE FROM `middlecategory`;
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
  `buyer` varchar(20) CHARACTER SET utf8 NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `qry` int(11) NOT NULL,
  PRIMARY KEY (`order_id`) USING BTREE,
  KEY `FK_orders_user` (`buyer`),
  KEY `FK_orders_product_detail` (`product_id`),
  CONSTRAINT `FK_orders_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`),
  CONSTRAINT `FK_orders_user` FOREIGN KEY (`buyer`) REFERENCES `user` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.orders:~0 rows (대략적) 내보내기
DELETE FROM `orders`;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` (`order_id`, `product_id`, `price`, `buyer`, `date`, `qry`) VALUES
	(3, 8, 10, 'jin', '2021-11-07 21:18:23', 1);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- 테이블 nft_market.product 구조 내보내기
CREATE TABLE IF NOT EXISTS `product` (
  `product_no` varchar(10) CHARACTER SET utf8 NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 NOT NULL,
  `explain` varchar(200) CHARACTER SET utf8 NOT NULL,
  `creater` varchar(20) CHARACTER SET utf8 NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `likes` int(11) NOT NULL DEFAULT 0,
  `type` varchar(10) CHARACTER SET utf8 NOT NULL,
  `total_qty` int(11) DEFAULT NULL,
  `leftover` int(11) DEFAULT NULL,
  PRIMARY KEY (`product_no`),
  KEY `FK_product_user` (`creater`),
  CONSTRAINT `FK_product_user` FOREIGN KEY (`creater`) REFERENCES `user` (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.product:~6 rows (대략적) 내보내기
DELETE FROM `product`;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`product_no`, `name`, `explain`, `creater`, `date`, `likes`, `type`, `total_qty`, `leftover`) VALUES
	('A103As0000', '셔츠입니다.', '셔츠에요', 'jin', '2021-11-07 20:38:14', 0, 'auction', NULL, NULL),
	('A103As0001', '셔츠2', '셔츠입니다', 'seong', '2021-11-10 10:40:42', 5, 'immy', NULL, NULL),
	('A103As0002', '셔츠3', '셔츠3 라네', 'jeong', '2021-11-10 10:41:36', 3, 'auction', NULL, NULL),
	('A103As0003', '셔츠4', '셔츠4라네 ', 'jeong', '2021-11-10 10:42:12', 4, 'immy', NULL, NULL),
	('A103As0004', '셔츠5', '셔츠5', 'jin', '2021-11-10 10:42:42', 1, 'auction', NULL, NULL),
	('A104As0000', '바지', '그냥 바지입니다', 'jin', '2021-11-07 20:44:36', 0, '', NULL, NULL),
	('B108Aw0000', '아우터', '아우터입니다.', 'seong', '2021-11-07 20:39:20', 0, '', NULL, NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- 테이블 nft_market.product_detail 구조 내보내기
CREATE TABLE IF NOT EXISTS `product_detail` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_no` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `color` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `size` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `rest` int(11) DEFAULT NULL,
  PRIMARY KEY (`product_id`) USING BTREE,
  KEY `product_no` (`product_no`),
  CONSTRAINT `FK_product_detail_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.product_detail:~9 rows (대략적) 내보내기
DELETE FROM `product_detail`;
/*!40000 ALTER TABLE `product_detail` DISABLE KEYS */;
INSERT INTO `product_detail` (`product_id`, `product_no`, `qty`, `color`, `size`, `price`, `rest`) VALUES
	(8, 'A103As0000', 10, 'blue', 'ss', 20, 10),
	(9, 'A103As0000', 20, 'red', 'l', 10, 20),
	(10, 'A103As0000', 20, 'black', 'xl', 20, 20),
	(11, 'B108Aw0000', 20, 'blue', 'l', 30, 20),
	(12, 'B108Aw0000', 20, 'yellow', 'lx', 20, 20),
	(13, 'A103As0001', 10, 'yellow', 'l', 50, 10),
	(14, 'A103As0003', 20, 'blue', 'xl', 30, 10),
	(15, 'A103As0002', 10, 'black', 'xl', 10, 10),
	(16, 'A103As0004', 10, 'red', 'l', 10, 20);
/*!40000 ALTER TABLE `product_detail` ENABLE KEYS */;

-- 테이블 nft_market.product_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `product_image` (
  `product_no` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `img` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  KEY `FK__product` (`product_no`),
  CONSTRAINT `FK_product_image_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.product_image:~10 rows (대략적) 내보내기
DELETE FROM `product_image`;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` (`product_no`, `img`) VALUES
	('A104As0000', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fshop%2F20210406_12%2F1617674829591FG3Xr_JPEG%2F18810674943525071_1054183505.jpg&type=a340'),
	('A104As0000', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fshop%2F20210406_12%2F1617674829591FG3Xr_JPEG%2F18810674943525071_1054183505.jpg&type=a340'),
	('A103As0000', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fshop%2F20210406_12%2F1617674829591FG3Xr_JPEG%2F18810674943525071_1054183505.jpg&type=a340'),
	('A103As0000', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fshop%2F20210406_12%2F1617674829591FG3Xr_JPEG%2F18810674943525071_1054183505.jpg&type=a340'),
	('B108Aw0000', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fshop%2F20210406_12%2F1617674829591FG3Xr_JPEG%2F18810674943525071_1054183505.jpg&type=a340'),
	('B108Aw0000', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fshop%2F20210406_12%2F1617674829591FG3Xr_JPEG%2F18810674943525071_1054183505.jpg&type=a340'),
	('A103As0001', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8217154%2F82171541123.3.jpg&type=a340'),
	('A103As0002', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fshopping-phinf.pstatic.net%2Fmain_8328357%2F83283571686.jpg&type=a340'),
	('A103As0003', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fshop%2F20210406_12%2F1617674829591FG3Xr_JPEG%2F18810674943525071_1054183505.jpg&type=a340'),
	('A103As0004', 'https://search.pstatic.net/common/?src=https%3A%2F%2Fphinf.pstatic.net%2Fshop%2F20210406_12%2F1617674829591FG3Xr_JPEG%2F18810674943525071_1054183505.jpg&type=a340');
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;

-- 테이블 nft_market.seller 구조 내보내기
CREATE TABLE IF NOT EXISTS `seller` (
  `nickname` varchar(20) CHARACTER SET utf8 NOT NULL,
  `seller_no` varchar(50) CHARACTER SET utf8 NOT NULL,
  `kyc_status` varchar(10) CHARACTER SET utf8 NOT NULL,
  KEY `FK_seller_user` (`nickname`) USING BTREE,
  CONSTRAINT `FK_seller_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.seller:~2 rows (대략적) 내보내기
DELETE FROM `seller`;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` (`nickname`, `seller_no`, `kyc_status`) VALUES
	('jin', 'aa', '승인'),
	('seong', '545321', '반려');
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;

-- 테이블 nft_market.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `nickname` varchar(20) CHARACTER SET utf8 NOT NULL,
  `wallet` varchar(50) CHARACTER SET utf8 NOT NULL,
  `email` varchar(30) CHARACTER SET utf8 NOT NULL,
  `picture` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 nft_market.user:~3 rows (대략적) 내보내기
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`nickname`, `wallet`, `email`, `picture`) VALUES
	('jeong', 'x6548', '1564685', '1568'),
	('jin', '1x6848546', 'jin.sdfkl', 'dsfa'),
	('seong', 'x2897', '84asd984', 'as8d94');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
