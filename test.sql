-- MariaDB dump 10.19  Distrib 10.5.9-MariaDB, for osx10.16 (x86_64)
--
-- Host: localhost    Database: nft_market
-- ------------------------------------------------------
-- Server version	10.5.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--
-- nft_market 데이터베이스 구조 내보내기
DROP DATABASE IF EXISTS `nft_market`;
CREATE DATABASE IF NOT EXISTS `nft_market` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `nft_market`;


DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(256) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  `address_nick` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_address_user` (`nickname`),
  CONSTRAINT `FK_address_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` varchar(20) NOT NULL,
  `pw` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES ('root','root');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auction`
--

DROP TABLE IF EXISTS `auction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auction` (
  `auction_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(13) NOT NULL,
  `deadline` datetime DEFAULT current_timestamp(),
  `option` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`auction_id`) USING BTREE,
  KEY `FK_auction_product_detail` (`product_id`),
  CONSTRAINT `FK_auction_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auction`
--

LOCK TABLES `auction` WRITE;
/*!40000 ALTER TABLE `auction` DISABLE KEYS */;
INSERT INTO `auction` VALUES (1,'A101AP0000000','2021-12-03 17:10:00',1),(2,'A101AP0001000','2021-12-03 20:50:00',1);
/*!40000 ALTER TABLE `auction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auction_history`
--

DROP TABLE IF EXISTS `auction_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auction_history` (
  `auction_history_id` int(11) NOT NULL AUTO_INCREMENT,
  `auction_id` int(11) DEFAULT NULL,
  `bider` varchar(20) DEFAULT NULL,
  `bid` float DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `status` varchar(10) DEFAULT 'bid',
  PRIMARY KEY (`auction_history_id`) USING BTREE,
  KEY `FK__auction` (`auction_id`),
  KEY `FK_auction_history_user` (`bider`) USING BTREE,
  CONSTRAINT `FK_auction_history_auction` FOREIGN KEY (`auction_id`) REFERENCES `auction` (`auction_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_auction_history_user` FOREIGN KEY (`bider`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auction_history`
--

LOCK TABLES `auction_history` WRITE;
/*!40000 ALTER TABLE `auction_history` DISABLE KEYS */;
INSERT INTO `auction_history` VALUES (1,2,'ant',0.2,'2021-12-03 17:25:53','burial'),(2,2,'ant',0.22,'2021-12-03 17:27:19','burial'),(3,2,'ant',0.3,'2021-12-03 17:28:09','success');
/*!40000 ALTER TABLE `auction_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bigcategory`
--

DROP TABLE IF EXISTS `bigcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bigcategory` (
  `code` varchar(20) NOT NULL,
  `value` varchar(20) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bigcategory`
--

LOCK TABLES `bigcategory` WRITE;
/*!40000 ALTER TABLE `bigcategory` DISABLE KEYS */;
INSERT INTO `bigcategory` VALUES ('A1','남여공용'),('B1','남자 의류'),('B2','남자 속옷/잠옷'),('B3','남자 신발'),('B4','남자 가방/잡화'),('C1','여성 의류'),('C2','여성 솟옷/잠옷'),('C3','여성 신발'),('C4','여성 가방/잡화');
/*!40000 ALTER TABLE `bigcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery`
--

DROP TABLE IF EXISTS `delivery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `delivery` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery`
--

LOCK TABLES `delivery` WRITE;
/*!40000 ALTER TABLE `delivery` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `likes`
--

DROP TABLE IF EXISTS `likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `likes` (
  `product_no` varchar(10) NOT NULL,
  `nickname` varchar(20) NOT NULL,
  KEY `FK_like_product` (`product_no`),
  KEY `FK_likes_user` (`nickname`),
  CONSTRAINT `FK_likes_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_likes_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `likes`
--

LOCK TABLES `likes` WRITE;
/*!40000 ALTER TABLE `likes` DISABLE KEYS */;
/*!40000 ALTER TABLE `likes` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`jin`@`localhost`*/ /*!50003 TRIGGER `likes_after_insert` AFTER INSERT ON `likes` FOR EACH ROW BEGIN
	 DECLARE tmp VARCHAR(10);
	 SET tmp = NEW.product_no;
	 UPDATE product SET likes=likes+1 WHERE product_no=tmp;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`jin`@`localhost`*/ /*!50003 TRIGGER `likes_after_delete` AFTER DELETE ON `likes` FOR EACH ROW BEGIN
	 DECLARE tmp VARCHAR(10);
	 SET tmp = OLD.product_no;
	 UPDATE product SET likes=likes-1 WHERE product_no=tmp;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `middlecategory`
--

DROP TABLE IF EXISTS `middlecategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `middlecategory` (
  `code` varchar(5) NOT NULL,
  `value` varchar(20) DEFAULT NULL,
  `big_code` varchar(20) NOT NULL,
  PRIMARY KEY (`code`),
  KEY `FK_middlecategory_bigcategory` (`big_code`),
  CONSTRAINT `FK_middlecategory_bigcategory` FOREIGN KEY (`big_code`) REFERENCES `bigcategory` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `middlecategory`
--

LOCK TABLES `middlecategory` WRITE;
/*!40000 ALTER TABLE `middlecategory` DISABLE KEYS */;
INSERT INTO `middlecategory` VALUES ('01','티셔츠','A1'),('02','맨투맨/후드티','A1'),('03','셔츠','A1'),('04','바지','A1'),('05','트레이닝복','A1'),('06','후드집업/집업류','A1'),('07','니트류/조끼','A1'),('08','아우터','A1'),('09','테마의류','A1'),('10','커플룩/패밀리룩','A1'),('11','니트/스웨터','B1'),('12','가디건','B1'),('13','티셔츠','B1'),('14','셔츠/남방','B1'),('15','정장세트','B1'),('16','바지/청바지','B1'),('17','트레이닝복','B1'),('18','후드집업/집업류','B1'),('19','아우터','B1'),('20','스포츠의류','B1'),('21','코트','B1'),('22','점퍼','B1'),('23','팬티','B2'),('24','러닝','B2'),('25','러니펜티세트','B2'),('26','잠옷/홈웨어','B2'),('27','보정속옷','B2'),('28','운동화','B3'),('29','부츠','B3'),('30','워커','B3'),('31','모카신/털신','B3'),('32','스니커즈','B3'),('33','구두','B3'),('34','실내화','B3'),('35','슬리퍼','B3'),('36','웰트화','B3'),('37','슬립온','B3'),('38','보트슈즈','B3'),('39','샌들','B3'),('40','기능화','B3'),('41','백팩','B4'),('42','크로스백','B4'),('43','숄더백','B4'),('44','토트백','B4'),('45','브리프케이스','B4'),('46','클러치백','B4'),('47','힙색','B4'),('48','니트/스웨터','C1'),('49','가디건','C1'),('50','원피스','C1'),('51','티셔츠','C1'),('52','브라우스/셔츠','C1'),('53','점퍼','C1'),('54','재킷','C1'),('55','코트','C1'),('56','바지','C1'),('57','청바지','C1'),('58','스커트','C1'),('59','레깅스','C1'),('60','트레닝복','C1'),('61','브라','C2'),('62','팬티','C2'),('63','브라팬티세트','C2'),('64','잠옷/홈웨이','C2'),('65','보정속옷','C2'),('66','슬립','C2'),('67','러닝/캐미솔','C2'),('68','속치마/속바지','C2'),('69','언더웨어소품','C2'),('70','부츠','C3'),('71','부티','C3'),('72','워커','C3'),('73','단화','C3'),('74','힐/펌프스','C3'),('75','운동화','C3'),('76','실내화','C3'),('77','슬리퍼','C3'),('78','샌들','C3'),('79','기능화','C3'),('80','노트북가방','C4'),('81','서류','C4'),('82','백팩','C4'),('83','크로스백','C4'),('84','클러치백','C4'),('85','토트백','C4'),('86','파우치','C4'),('87','히프색','C4'),('88','가방소품','C4');
/*!40000 ALTER TABLE `middlecategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` varchar(13) NOT NULL DEFAULT '',
  `price` float NOT NULL DEFAULT 0,
  `buyer` varchar(20) NOT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `qty` int(11) NOT NULL DEFAULT 1,
  `transactionHash` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`order_id`) USING BTREE,
  KEY `FK_orders_user` (`buyer`),
  KEY `FK_orders_product_detail` (`product_id`),
  CONSTRAINT `FK_orders_product_detail` FOREIGN KEY (`product_id`) REFERENCES `product_detail` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_orders_user` FOREIGN KEY (`buyer`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,'A101AP0001000',0.3,'ant','2021-12-04 12:10:47',1,NULL);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('A101AP0000','aa','aa','ant','2021-12-03 16:55:00',0,'stop',1,1,'ss','0xf0f49B7BAc967a20fB3D5cC985c4C5668Adb17ee','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/metadataA101AP0000.json'),('A101AP0001','test','test','ant','2021-12-03 17:11:44',0,'stop',1,0,'test','0x901380d1357591E1bfe3E3bf33f1072B3dBfaBBc','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/metadataA101AP0001.json'),('A101AP0002','운동복','JSJ','ant','2021-12-04 12:15:21',0,'buy',60,60,'JSJ','0xc5639461798e3272455987e63797Ff6B19e00242','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/metadataA101AP0002.json'),('A102BP0000','예쁜 후드티','이 옷은 후드티 중에서도 정말 이쁜 후드티 입니다.','test','2022-06-01 12:42:06',0,'buy',5,5,'tesy','0x796F98D72F08B18a5A0c9D0B281d7CD8a06eb928',NULL);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_count`
--

DROP TABLE IF EXISTS `product_count`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_count` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_no` varchar(10) NOT NULL DEFAULT '',
  `num` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_product_cnt_product_detail` (`product_no`) USING BTREE,
  CONSTRAINT `FK_product_count_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_count`
--

LOCK TABLES `product_count` WRITE;
/*!40000 ALTER TABLE `product_count` DISABLE KEYS */;
INSERT INTO `product_count` VALUES (1,'A101AP0000',1,NULL),(2,'A101AP0001',1,1),(3,'A101AP0002',1,NULL),(4,'A101AP0002',2,NULL),(5,'A101AP0002',3,NULL),(6,'A101AP0002',4,NULL),(7,'A101AP0002',5,NULL),(8,'A101AP0002',6,NULL),(9,'A101AP0002',7,NULL),(10,'A101AP0002',8,NULL),(11,'A101AP0002',9,NULL),(12,'A101AP0002',10,NULL),(13,'A101AP0002',11,NULL),(14,'A101AP0002',12,NULL),(15,'A101AP0002',13,NULL),(16,'A101AP0002',14,NULL),(17,'A101AP0002',15,NULL),(18,'A101AP0002',16,NULL),(19,'A101AP0002',17,NULL),(20,'A101AP0002',18,NULL),(21,'A101AP0002',19,NULL),(22,'A101AP0002',20,NULL),(23,'A101AP0002',21,NULL),(24,'A101AP0002',22,NULL),(25,'A101AP0002',23,NULL),(26,'A101AP0002',24,NULL),(27,'A101AP0002',25,NULL),(28,'A101AP0002',26,NULL),(29,'A101AP0002',27,NULL),(30,'A101AP0002',28,NULL),(31,'A101AP0002',29,NULL),(32,'A101AP0002',30,NULL),(33,'A101AP0002',31,NULL),(34,'A101AP0002',32,NULL),(35,'A101AP0002',33,NULL),(36,'A101AP0002',34,NULL),(37,'A101AP0002',35,NULL),(38,'A101AP0002',36,NULL),(39,'A101AP0002',37,NULL),(40,'A101AP0002',38,NULL),(41,'A101AP0002',39,NULL),(42,'A101AP0002',40,NULL),(43,'A101AP0002',41,NULL),(44,'A101AP0002',42,NULL),(45,'A101AP0002',43,NULL),(46,'A101AP0002',44,NULL),(47,'A101AP0002',45,NULL),(48,'A101AP0002',46,NULL),(49,'A101AP0002',47,NULL),(50,'A101AP0002',48,NULL),(51,'A101AP0002',49,NULL),(52,'A101AP0002',50,NULL),(53,'A101AP0002',51,NULL),(54,'A101AP0002',52,NULL),(55,'A101AP0002',53,NULL),(56,'A101AP0002',54,NULL),(57,'A101AP0002',55,NULL),(58,'A101AP0002',56,NULL),(59,'A101AP0002',57,NULL),(60,'A101AP0002',58,NULL),(61,'A101AP0002',59,NULL),(62,'A101AP0002',60,NULL),(63,'A102BP0000',1,NULL),(64,'A102BP0000',2,NULL),(65,'A102BP0000',3,NULL),(66,'A102BP0000',4,NULL),(67,'A102BP0000',5,NULL);
/*!40000 ALTER TABLE `product_count` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_detail`
--

DROP TABLE IF EXISTS `product_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_detail` (
  `product_id` varchar(13) NOT NULL,
  `product_no` varchar(10) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `rest` int(11) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`product_id`) USING BTREE,
  KEY `product_no` (`product_no`),
  CONSTRAINT `FK_product_detail_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_detail`
--

LOCK TABLES `product_detail` WRITE;
/*!40000 ALTER TABLE `product_detail` DISABLE KEYS */;
INSERT INTO `product_detail` VALUES ('A101AP0000000','A101AP0000','aa','aa',1,0,0.1),('A101AP0001000','A101AP0001','test','test',1,0,0.1),('A101AP0002001','A101AP0002','black','L',10,10,0.1),('A101AP0002002','A101AP0002','black','XL',10,10,0.2),('A101AP0002003','A101AP0002','black','XXL',10,10,0.3),('A101AP0002004','A101AP0002','blue','L',10,10,0.4),('A101AP0002005','A101AP0002','blue','XL',10,10,0.2),('A101AP0002006','A101AP0002','blue','XXL',10,10,0.3),('A102BP0000001','A102BP0000','검정','free',5,5,0.3);
/*!40000 ALTER TABLE `product_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_image`
--

DROP TABLE IF EXISTS `product_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_image` (
  `product_no` varchar(10) DEFAULT NULL,
  `img` varchar(100) DEFAULT NULL,
  KEY `FK__product` (`product_no`),
  CONSTRAINT `FK_product_image_product` FOREIGN KEY (`product_no`) REFERENCES `product` (`product_no`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_image`
--

LOCK TABLES `product_image` WRITE;
/*!40000 ALTER TABLE `product_image` DISABLE KEYS */;
INSERT INTO `product_image` VALUES ('A101AP0000','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/imageA101AP0000-01.png'),('A101AP0000','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/imageA101AP0000-02.png'),('A101AP0000','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/imageA101AP0000-03.png'),('A101AP0001','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/imageA101AP0001-01.png'),('A101AP0001','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/imageA101AP0001-02.png'),('A101AP0001','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/imageA101AP0001-03.png'),('A101AP0002','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/imageA101AP0002-01.png'),('A101AP0002','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/imageA101AP0002-02.png'),('A101AP0002','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/imageA101AP0002-03.png');
/*!40000 ALTER TABLE `product_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receipt`
--

DROP TABLE IF EXISTS `receipt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `receipt` (
  `receipt_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `token_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`receipt_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receipt`
--

LOCK TABLES `receipt` WRITE;
/*!40000 ALTER TABLE `receipt` DISABLE KEYS */;
/*!40000 ALTER TABLE `receipt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seller` (
  `nickname` varchar(20) NOT NULL,
  `seller_no` varchar(50) NOT NULL,
  KEY `FK_seller_user` (`nickname`) USING BTREE,
  CONSTRAINT `FK_seller_user` FOREIGN KEY (`nickname`) REFERENCES `user` (`nickname`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='status\r\n0: 구매자  \r\n1: 반려 \r\n2: 요청\r\n3: 인증';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES ('ant','0000'),('test','test');
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `nickname` varchar(20) NOT NULL,
  `wallet` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `picture` varchar(256) DEFAULT NULL,
  `status` tinyint(4) DEFAULT 0,
  PRIMARY KEY (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('ant','0x65abe502ea9bcec46ed174543df1537f5378eaaa','ant@ant.com','null',3),('jin','0xc8008cdccdd2a23d36968950cbacd361310087ff','jin@jin.com','https://s3-practice-third.s3.ap-northeast-2.amazonaws.com/profile/image/jin.png',0),('test','0x15b039259f770305a77700c6029f560ffc047e60','test@test.com','null',3);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-01 12:48:49
