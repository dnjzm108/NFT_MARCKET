CREATE DATABASE nft;

USE nft;

CREATE TABLE `user` (
  `nickname` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `wallet` varchar(50) DEFAULT NULL,
  `picture` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;