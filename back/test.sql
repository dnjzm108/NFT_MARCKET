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
CREATE DATABASE IF NOT EXISTS `nft_market` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `nft_market`;

-- 테이블 nft_market.address 구조 내보내기
CREATE TABLE IF NOT EXISTS `address` (
  `id` varchar(10) DEFAULT NULL,
  `address` varchar(40) DEFAULT NULL,
  `nickname` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.address:~0 rows (대략적) 내보내기
DELETE FROM `address`;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;

-- 테이블 nft_market.admin 구조 내보내기
CREATE TABLE IF NOT EXISTS `admin` (
  `id` varchar(20) NOT NULL,
  `pw` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.admin:~0 rows (대략적) 내보내기
DELETE FROM `admin`;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- 테이블 nft_market.auction 구조 내보내기
CREATE TABLE IF NOT EXISTS `auction` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_no` varchar(10) DEFAULT NULL,
  `deadline` datetime DEFAULT NULL,
  `option` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.auction:~0 rows (대략적) 내보내기
DELETE FROM `auction`;
/*!40000 ALTER TABLE `auction` DISABLE KEYS */;
/*!40000 ALTER TABLE `auction` ENABLE KEYS */;

-- 테이블 nft_market.auction_history 구조 내보내기
CREATE TABLE IF NOT EXISTS `auction_history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auction_id` int(11) DEFAULT NULL,
  `bider` varchar(20) DEFAULT NULL,
  `bid` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK__auction` (`auction_id`),
  CONSTRAINT `FK__auction` FOREIGN KEY (`auction_id`) REFERENCES `auction` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.auction_history:~0 rows (대략적) 내보내기
DELETE FROM `auction_history`;
/*!40000 ALTER TABLE `auction_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `auction_history` ENABLE KEYS */;

-- 테이블 nft_market.bigcategory 구조 내보내기
CREATE TABLE IF NOT EXISTS `bigcategory` (
  `code` varchar(20) DEFAULT NULL,
  `value` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.bigcategory:~0 rows (대략적) 내보내기
DELETE FROM `bigcategory`;
/*!40000 ALTER TABLE `bigcategory` DISABLE KEYS */;
/*!40000 ALTER TABLE `bigcategory` ENABLE KEYS */;

-- 테이블 nft_market.delievery 구조 내보내기
CREATE TABLE IF NOT EXISTS `delievery` (
  `order_id` int(11) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `invoice` varchar(50) DEFAULT NULL,
  `request` varchar(50) DEFAULT NULL,
  `recieve_type` varchar(10) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `delievery_company` varchar(20) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.delievery:~0 rows (대략적) 내보내기
DELETE FROM `delievery`;
/*!40000 ALTER TABLE `delievery` DISABLE KEYS */;
/*!40000 ALTER TABLE `delievery` ENABLE KEYS */;

-- 테이블 nft_market.finish_deal 구조 내보내기
CREATE TABLE IF NOT EXISTS `finish_deal` (
  `id` int(11) DEFAULT NULL,
  `product_detail` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.finish_deal:~0 rows (대략적) 내보내기
DELETE FROM `finish_deal`;
/*!40000 ALTER TABLE `finish_deal` DISABLE KEYS */;
/*!40000 ALTER TABLE `finish_deal` ENABLE KEYS */;

-- 테이블 nft_market.img 구조 내보내기
CREATE TABLE IF NOT EXISTS `img` (
  `product_no` varchar(10) DEFAULT NULL,
  `img` varchar(50) DEFAULT NULL,
  KEY `FK__product` (`product_no`),
  CONSTRAINT `FK__product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.img:~0 rows (대략적) 내보내기
DELETE FROM `img`;
/*!40000 ALTER TABLE `img` DISABLE KEYS */;
/*!40000 ALTER TABLE `img` ENABLE KEYS */;

-- 테이블 nft_market.like 구조 내보내기
CREATE TABLE IF NOT EXISTS `like` (
  `product_no` varchar(10) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  KEY `FK_like_product` (`product_no`),
  CONSTRAINT `FK_like_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.like:~0 rows (대략적) 내보내기
DELETE FROM `like`;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
/*!40000 ALTER TABLE `like` ENABLE KEYS */;

-- 테이블 nft_market.middlecategory 구조 내보내기
CREATE TABLE IF NOT EXISTS `middlecategory` (
  `code` varchar(20) DEFAULT NULL,
  `value` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.middlecategory:~0 rows (대략적) 내보내기
DELETE FROM `middlecategory`;
/*!40000 ALTER TABLE `middlecategory` DISABLE KEYS */;
/*!40000 ALTER TABLE `middlecategory` ENABLE KEYS */;

-- 테이블 nft_market.order 구조 내보내기
CREATE TABLE IF NOT EXISTS `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_detail` varchar(10) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `buyer` varchar(20) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `qry` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.order:~0 rows (대략적) 내보내기
DELETE FROM `order`;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;

-- 테이블 nft_market.product 구조 내보내기
CREATE TABLE IF NOT EXISTS `product` (
  `product_no` varchar(10) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `explain` varchar(200) NOT NULL,
  `creater` varchar(20) NOT NULL,
  `date` datetime NOT NULL,
  PRIMARY KEY (`product_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.product:~0 rows (대략적) 내보내기
DELETE FROM `product`;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- 테이블 nft_market.product_detail 구조 내보내기
CREATE TABLE IF NOT EXISTS `product_detail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_no` varchar(10) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `rest` int(11) DEFAULT NULL,
  `auction_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_no` (`product_no`),
  CONSTRAINT `product_no` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.product_detail:~0 rows (대략적) 내보내기
DELETE FROM `product_detail`;
/*!40000 ALTER TABLE `product_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_detail` ENABLE KEYS */;

-- 테이블 nft_market.seller 구조 내보내기
CREATE TABLE IF NOT EXISTS `seller` (
  `user_id` int(11) DEFAULT NULL,
  `seller_no` varchar(50) DEFAULT NULL,
  `kyc_status` varchar(10) DEFAULT NULL,
  KEY `FK__user` (`user_id`),
  CONSTRAINT `FK__user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.seller:~0 rows (대략적) 내보내기
DELETE FROM `seller`;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;

-- 테이블 nft_market.smallctegory 구조 내보내기
CREATE TABLE IF NOT EXISTS `smallctegory` (
  `code` varchar(20) DEFAULT NULL,
  `vlaue` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.smallctegory:~0 rows (대략적) 내보내기
DELETE FROM `smallctegory`;
/*!40000 ALTER TABLE `smallctegory` DISABLE KEYS */;
/*!40000 ALTER TABLE `smallctegory` ENABLE KEYS */;

-- 테이블 nft_market.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(20) DEFAULT NULL,
  `wallet` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `picture` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 테이블 데이터 nft_market.user:~0 rows (대략적) 내보내기
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
