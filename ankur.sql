-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Aug 01, 2020 at 04:34 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ankur`
--

-- --------------------------------------------------------

--
-- Table structure for table `diary`
--

DROP TABLE IF EXISTS `diary`;
CREATE TABLE IF NOT EXISTS `diary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `note` text,
  `created_date` timestamp NULL DEFAULT NULL,
  `customer` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `diary`
--

INSERT INTO `diary` (`id`, `title`, `note`, `created_date`, `customer`) VALUES
(14, 'hii', 'hee', '2020-08-01 06:49:30', 'Raja');

-- --------------------------------------------------------

--
-- Table structure for table `goal`
--

DROP TABLE IF EXISTS `goal`;
CREATE TABLE IF NOT EXISTS `goal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `orphanage_name` varchar(100) DEFAULT NULL,
  `goal` text,
  `duration` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `created_date` timestamp NULL DEFAULT NULL,
  `customer` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `goal`
--

INSERT INTO `goal` (`id`, `orphanage_name`, `goal`, `duration`, `created_date`, `customer`) VALUES
(7, 'ABCD', 'Teach Math to Grade 9', '3 months', '2020-07-18 13:15:05', 'Raja');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
