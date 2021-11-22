-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.9-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- nft_market 데이터베이스 구조 내보내기
DROP DATABASE IF EXISTS `nft_market`;
CREATE DATABASE IF NOT EXISTS `nft_market` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `nft_market`;

-- 테이블 nft_market.address 구조 내보내기
DROP TABLE IF EXISTS `address`;
CREATE TABLE IF NOT EXISTS `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(256) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `address_nick` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_address_user` (`nickname`),
  CONSTRAINT `FK_address_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.admin 구조 내보내기
DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `id` varchar(20) NOT NULL,
  `pw` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.auction 구조 내보내기
DROP TABLE IF EXISTS `auction`;
CREATE TABLE IF NOT EXISTS `auction` (
  `auction_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `deadline` datetime DEFAULT current_timestamp(),
  `option` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`auction_id`) USING BTREE,
  KEY `FK_auction_product_detail` (`product_id`),
  CONSTRAINT `FK_auction_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.auction_history 구조 내보내기
DROP TABLE IF EXISTS `auction_history`;
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

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.bigcategory 구조 내보내기
DROP TABLE IF EXISTS `bigcategory`;
CREATE TABLE IF NOT EXISTS `bigcategory` (
  `code` varchar(20) NOT NULL,
  `value` varchar(20) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.delivery 구조 내보내기
DROP TABLE IF EXISTS `delivery`;
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

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.likes 구조 내보내기
DROP TABLE IF EXISTS `likes`;
CREATE TABLE IF NOT EXISTS `likes` (
  `product_no` varchar(10) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  KEY `FK_like_product` (`product_no`),
  KEY `FK_likes_user` (`nickname`),
  CONSTRAINT `FK_likes_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_likes_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.middlecategory 구조 내보내기
DROP TABLE IF EXISTS `middlecategory`;
CREATE TABLE IF NOT EXISTS `middlecategory` (
  `code` varchar(5) NOT NULL,
  `value` varchar(20) DEFAULT NULL,
  `big_code` varchar(20) NOT NULL,
  PRIMARY KEY (`code`),
  KEY `FK_middlecategory_bigcategory` (`big_code`),
  CONSTRAINT `FK_middlecategory_bigcategory` FOREIGN KEY (`big_code`) REFERENCES `bigcategory` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.orders 구조 내보내기
DROP TABLE IF EXISTS `orders`;
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
  CONSTRAINT `FK_orders_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_orders_user` FOREIGN KEY (`buyer`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.product 구조 내보내기
DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `product_no` varchar(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `explain` varchar(200) NOT NULL,
  `creater` varchar(20) NOT NULL,
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
  CONSTRAINT `FK_product_user` FOREIGN KEY (`creater`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.product_detail 구조 내보내기
DROP TABLE IF EXISTS `product_detail`;
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
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.product_image 구조 내보내기
DROP TABLE IF EXISTS `product_image`;
CREATE TABLE IF NOT EXISTS `product_image` (
  `product_no` varchar(10) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  KEY `FK__product` (`product_no`),
  CONSTRAINT `FK_product_image_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.receipt 구조 내보내기
DROP TABLE IF EXISTS `receipt`;
CREATE TABLE IF NOT EXISTS `receipt` (
  `receipt_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `temp1` int(11) DEFAULT NULL,
  `temp2` int(11) DEFAULT NULL,
  PRIMARY KEY (`receipt_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.seller 구조 내보내기
DROP TABLE IF EXISTS `seller`;
CREATE TABLE IF NOT EXISTS `seller` (
  `nickname` varchar(20) NOT NULL,
  `seller_no` varchar(50) NOT NULL,
  KEY `FK_seller_user` (`nickname`) USING BTREE,
  CONSTRAINT `FK_seller_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='status\r\n0: 구매자  \r\n1: 반려 \r\n2: 요청\r\n3: 인증';

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 테이블 nft_market.user 구조 내보내기
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `nickname` varchar(20) NOT NULL,
  `wallet` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `picture` varchar(256) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 내보낼 데이터가 선택되어 있지 않습니다.

-- 트리거 nft_market.likes_after_delete 구조 내보내기
DROP TRIGGER IF EXISTS `likes_after_delete`;
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
DROP TRIGGER IF EXISTS `likes_after_insert`;
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
