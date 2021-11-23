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
CREATE DATABASE IF NOT EXISTS `nft_market` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `nft_market`;

-- 테이블 nft_market.address 구조 내보내기
CREATE TABLE IF NOT EXISTS `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(256) NOT NULL,
  `nickname` varchar(30) NOT NULL,
  `address_nick` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_address_user` (`nickname`),
  CONSTRAINT `FK_address_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.address:~0 rows (대략적) 내보내기
DELETE FROM `address`;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;

-- 테이블 nft_market.admin 구조 내보내기
CREATE TABLE IF NOT EXISTS `admin` (
  `id` varchar(20) NOT NULL,
  `pw` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `deadline` datetime DEFAULT current_timestamp(),
  `option` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`auction_id`) USING BTREE,
  KEY `FK_auction_product_detail` (`product_id`),
  CONSTRAINT `FK_auction_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.auction:~0 rows (대략적) 내보내기
DELETE FROM `auction`;
/*!40000 ALTER TABLE `auction` DISABLE KEYS */;
/*!40000 ALTER TABLE `auction` ENABLE KEYS */;

-- 테이블 nft_market.auction_history 구조 내보내기
CREATE TABLE IF NOT EXISTS `auction_history` (
  `auction_history_id` int(11) NOT NULL AUTO_INCREMENT,
  `auction_id` int(11) DEFAULT NULL,
  `bidder` varchar(20) DEFAULT NULL,
  `bid` float DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `status` varchar(10) DEFAULT 'bid',
  PRIMARY KEY (`auction_history_id`) USING BTREE,
  KEY `FK__auction` (`auction_id`),
  KEY `FK_auction_history_user` (`bidder`) USING BTREE,
  CONSTRAINT `FK_auction_history_auction` FOREIGN KEY (`auction_id`) REFERENCES `auction` (`auction_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_auction_history_user` FOREIGN KEY (`bidder`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.auction_history:~0 rows (대략적) 내보내기
DELETE FROM `auction_history`;
/*!40000 ALTER TABLE `auction_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `auction_history` ENABLE KEYS */;

-- 테이블 nft_market.bigcategory 구조 내보내기
CREATE TABLE IF NOT EXISTS `bigcategory` (
  `code` varchar(20) NOT NULL,
  `value` varchar(20) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- 테이블 nft_market.delivery 구조 내보내기
CREATE TABLE IF NOT EXISTS `delivery` (
  `dlvy_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `auction` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `reciever` varchar(50) NOT NULL,
  `address` varchar(256) DEFAULT NULL,
  `request` varchar(256) DEFAULT NULL,
  `recieve_type` varchar(32) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `invoice` varchar(50) DEFAULT NULL,
  `delivery_company` varchar(20) DEFAULT NULL,
  `ready_date` datetime DEFAULT current_timestamp(),
  `ship_date` datetime DEFAULT NULL,
  `complete_date` datetime DEFAULT NULL,
  PRIMARY KEY (`dlvy_id`),
  KEY `FK_delievery_orders` (`order_id`),
  CONSTRAINT `FK_delievery_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.delivery:~0 rows (대략적) 내보내기
DELETE FROM `delivery`;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
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

-- 테이블 데이터 nft_market.likes:~0 rows (대략적) 내보내기
DELETE FROM `likes`;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
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
  `price` float NOT NULL DEFAULT 0,
  `buyer` varchar(20) NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `qty` int(11) NOT NULL,
  PRIMARY KEY (`order_id`) USING BTREE,
  KEY `FK_orders_user` (`buyer`),
  KEY `FK_orders_product_detail` (`product_id`),
  CONSTRAINT `FK_orders_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`),
  CONSTRAINT `FK_orders_user` FOREIGN KEY (`buyer`) REFERENCES `user` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.orders:~0 rows (대략적) 내보내기
DELETE FROM `orders`;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- 테이블 nft_market.product 구조 내보내기
CREATE TABLE IF NOT EXISTS `product` (
  `product_no` varchar(15) NOT NULL,
  `name` varchar(100) NOT NULL,
  `explain` varchar(200) NOT NULL,
  `creater` varchar(30) NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `likes` int(11) NOT NULL DEFAULT 0,
  `type` varchar(10) NOT NULL,
  `total_qty` int(11) DEFAULT NULL,
  `leftover` int(11) DEFAULT NULL,
  `symbol` varchar(10) NOT NULL,
  `contractAddr` varchar(256) DEFAULT NULL,
  `tokenURI` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`product_no`),
  KEY `FK_product_user` (`creater`),
  CONSTRAINT `FK_product_user` FOREIGN KEY (`creater`) REFERENCES `user` (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.product:~0 rows (대략적) 내보내기
DELETE FROM `product`;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- 테이블 nft_market.product_detail 구조 내보내기
CREATE TABLE IF NOT EXISTS `product_detail` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_no` varchar(10) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `rest` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`product_id`) USING BTREE,
  KEY `product_no` (`product_no`),
  CONSTRAINT `FK_product_detail_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.product_detail:~0 rows (대략적) 내보내기
DELETE FROM `product_detail`;
/*!40000 ALTER TABLE `product_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_detail` ENABLE KEYS */;

-- 테이블 nft_market.product_image 구조 내보내기
CREATE TABLE IF NOT EXISTS `product_image` (
  `product_no` varchar(10) DEFAULT NULL,
  `img` varchar(250) DEFAULT NULL,
  KEY `FK__product` (`product_no`),
  CONSTRAINT `FK_product_image_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.product_image:~0 rows (대략적) 내보내기
DELETE FROM `product_image`;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;

-- 테이블 nft_market.receipt 구조 내보내기
CREATE TABLE IF NOT EXISTS `receipt` (
  `receipt_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `temp1` int(11) DEFAULT NULL,
  `temp2` int(11) DEFAULT NULL,
  PRIMARY KEY (`receipt_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.receipt:~0 rows (대략적) 내보내기
DELETE FROM `receipt`;
/*!40000 ALTER TABLE `receipt` DISABLE KEYS */;
/*!40000 ALTER TABLE `receipt` ENABLE KEYS */;

-- 테이블 nft_market.seller 구조 내보내기
CREATE TABLE IF NOT EXISTS `seller` (
  `nickname` varchar(30) NOT NULL,
  `seller_no` varchar(50) NOT NULL,
  PRIMARY KEY (`nickname`),
  KEY `FK_seller_user` (`nickname`) USING BTREE,
  CONSTRAINT `FK_seller_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='status\r\n0: 구매자  \r\n1: 반려 \r\n2: 요청\r\n3: 인증';

-- 테이블 데이터 nft_market.seller:~0 rows (대략적) 내보내기
DELETE FROM `seller`;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;

-- 테이블 nft_market.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `nickname` varchar(30) NOT NULL,
  `wallet` varchar(50) NOT NULL,
  `email` varchar(40) NOT NULL,
  `picture` varchar(250) DEFAULT NULL,
    `status` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 nft_market.user:~1 rows (대략적) 내보내기
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`nickname`, `wallet`, `email`, `picture`) VALUES
	('ANT', '0x9b2e353a554f474d7e3690f54bfbd6f84ac8957d', 'ANT', 'https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/profile/image/ANT.jpeg');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 트리거 nft_market.likes_after_delete 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `likes_after_delete` AFTER DELETE ON `likes` FOR EACH ROW BEGIN
	 DECLARE tmp VARCHAR(10);
	 SET tmp = OLD.product_no;
	 UPDATE product SET likes=likes-1 WHERE product_no=tmp;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

-- 트리거 nft_market.likes_after_insert 구조 내보내기
SET @OLDTMP_SQL_MODE=@@SQL_MODE, SQL_MODE='STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION';
DELIMITER //
CREATE TRIGGER `likes_after_insert` AFTER INSERT ON `likes` FOR EACH ROW BEGIN
	 DECLARE tmp VARCHAR(10);
	 SET tmp = NEW.product_no;
	 UPDATE product SET likes=likes+1 WHERE product_no=tmp;
END//
DELIMITER ;
SET SQL_MODE=@OLDTMP_SQL_MODE;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
