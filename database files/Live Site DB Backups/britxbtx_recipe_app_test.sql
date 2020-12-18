-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 18, 2020 at 05:05 PM
-- Server version: 10.3.27-MariaDB-log-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `britxbtx_recipe_app_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `email`, `firstName`, `lastName`) VALUES
(1, 'britt', 'neal', 'test@test.com', NULL, NULL),
(2, 'omar', 'omar', 'omarshishanischool@gmail.com', 'Omar', 'Shishani'),
(3, 'Beeeee', 'yahoo22!', 'brittanyneal22@gmail.com', 'Brittany', 'Neal'),
(4, 'B', 'B', 'B@gmail.com', 'B', 'B');

-- --------------------------------------------------------

--
-- Table structure for table `recipe43_guacamole_images`
--

CREATE TABLE `recipe43_guacamole_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe43_guacamole_images`
--

INSERT INTO `recipe43_guacamole_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607917600257_Guacamole-LEAD-2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe43_guacamole_ingredients`
--

CREATE TABLE `recipe43_guacamole_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe43_guacamole_ingredients`
--

INSERT INTO `recipe43_guacamole_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Avocado', '1');

-- --------------------------------------------------------

--
-- Table structure for table `recipe43_guacamole_instructions`
--

CREATE TABLE `recipe43_guacamole_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe43_guacamole_instructions`
--

INSERT INTO `recipe43_guacamole_instructions` (`id`, `instruction`) VALUES
(1, 'Mash it.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe44_salsa_images`
--

CREATE TABLE `recipe44_salsa_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe44_salsa_images`
--

INSERT INTO `recipe44_salsa_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607918156913_salsa.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe44_salsa_ingredients`
--

CREATE TABLE `recipe44_salsa_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe44_salsa_ingredients`
--

INSERT INTO `recipe44_salsa_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Tomato', '1');

-- --------------------------------------------------------

--
-- Table structure for table `recipe44_salsa_instructions`
--

CREATE TABLE `recipe44_salsa_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe44_salsa_instructions`
--

INSERT INTO `recipe44_salsa_instructions` (`id`, `instruction`) VALUES
(1, 'Cut it');

-- --------------------------------------------------------

--
-- Table structure for table `recipe45_chicken_soup_images`
--

CREATE TABLE `recipe45_chicken_soup_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe45_chicken_soup_images`
--

INSERT INTO `recipe45_chicken_soup_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607918217429_chicken_soup.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe45_chicken_soup_ingredients`
--

CREATE TABLE `recipe45_chicken_soup_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe45_chicken_soup_ingredients`
--

INSERT INTO `recipe45_chicken_soup_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `recipe45_chicken_soup_instructions`
--

CREATE TABLE `recipe45_chicken_soup_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe45_chicken_soup_instructions`
--

INSERT INTO `recipe45_chicken_soup_instructions` (`id`, `instruction`) VALUES
(1, '');

-- --------------------------------------------------------

--
-- Table structure for table `recipe46_dumplings__images`
--

CREATE TABLE `recipe46_dumplings__images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe46_dumplings__images`
--

INSERT INTO `recipe46_dumplings__images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607918264499_dumplings.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe46_dumplings__ingredients`
--

CREATE TABLE `recipe46_dumplings__ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe46_dumplings__ingredients`
--

INSERT INTO `recipe46_dumplings__ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, '', '');

-- --------------------------------------------------------

--
-- Table structure for table `recipe46_dumplings__instructions`
--

CREATE TABLE `recipe46_dumplings__instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe46_dumplings__instructions`
--

INSERT INTO `recipe46_dumplings__instructions` (`id`, `instruction`) VALUES
(1, '');

-- --------------------------------------------------------

--
-- Table structure for table `recipe47_cabbage_babbage_images`
--

CREATE TABLE `recipe47_cabbage_babbage_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe47_cabbage_babbage_images`
--

INSERT INTO `recipe47_cabbage_babbage_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607921390484_bone_apple_teeth.jpg'),
(2, 'imageFile_dateVal_1607921390486_cabbage.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe47_cabbage_babbage_ingredients`
--

CREATE TABLE `recipe47_cabbage_babbage_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe47_cabbage_babbage_ingredients`
--

INSERT INTO `recipe47_cabbage_babbage_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'cabbage', '1 head'),
(2, 'babbage', 'pinch');

-- --------------------------------------------------------

--
-- Table structure for table `recipe47_cabbage_babbage_instructions`
--

CREATE TABLE `recipe47_cabbage_babbage_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe47_cabbage_babbage_instructions`
--

INSERT INTO `recipe47_cabbage_babbage_instructions` (`id`, `instruction`) VALUES
(1, 'Chop the cabbage\n'),
(2, 'add the babbage'),
(3, 'Enjoy! Bone apple teeth!');

-- --------------------------------------------------------

--
-- Table structure for table `recipe48_cabbage_babbage_images`
--

CREATE TABLE `recipe48_cabbage_babbage_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe48_cabbage_babbage_images`
--

INSERT INTO `recipe48_cabbage_babbage_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607921394028_bone_apple_teeth.jpg'),
(2, 'imageFile_dateVal_1607921394030_cabbage.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe48_cabbage_babbage_ingredients`
--

CREATE TABLE `recipe48_cabbage_babbage_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe48_cabbage_babbage_ingredients`
--

INSERT INTO `recipe48_cabbage_babbage_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'cabbage', '1 head'),
(2, 'babbage', 'pinch');

-- --------------------------------------------------------

--
-- Table structure for table `recipe48_cabbage_babbage_instructions`
--

CREATE TABLE `recipe48_cabbage_babbage_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe48_cabbage_babbage_instructions`
--

INSERT INTO `recipe48_cabbage_babbage_instructions` (`id`, `instruction`) VALUES
(1, 'Chop the cabbage\n'),
(2, 'add the babbage'),
(3, 'Enjoy! Bone apple teeth!');

-- --------------------------------------------------------

--
-- Table structure for table `recipe49_cabbage_babbage_images`
--

CREATE TABLE `recipe49_cabbage_babbage_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe49_cabbage_babbage_images`
--

INSERT INTO `recipe49_cabbage_babbage_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607921508974_cabbage.jpg'),
(2, 'imageFile_dateVal_1607921508976_bone_apple_teeth.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe49_cabbage_babbage_ingredients`
--

CREATE TABLE `recipe49_cabbage_babbage_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe49_cabbage_babbage_ingredients`
--

INSERT INTO `recipe49_cabbage_babbage_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'cabbage', '1 head'),
(2, 'babbage', '1 scoop');

-- --------------------------------------------------------

--
-- Table structure for table `recipe49_cabbage_babbage_instructions`
--

CREATE TABLE `recipe49_cabbage_babbage_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe49_cabbage_babbage_instructions`
--

INSERT INTO `recipe49_cabbage_babbage_instructions` (`id`, `instruction`) VALUES
(1, 'chop cabbage'),
(2, 'add babbage'),
(3, 'bone apple teeth!');

-- --------------------------------------------------------

--
-- Table structure for table `recipe50_cabbage_babbage_images`
--

CREATE TABLE `recipe50_cabbage_babbage_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe50_cabbage_babbage_images`
--

INSERT INTO `recipe50_cabbage_babbage_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607921522387_cabbage.jpg'),
(2, 'imageFile_dateVal_1607921522389_bone_apple_teeth.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe50_cabbage_babbage_ingredients`
--

CREATE TABLE `recipe50_cabbage_babbage_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe50_cabbage_babbage_ingredients`
--

INSERT INTO `recipe50_cabbage_babbage_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'cabbage', '1 head'),
(2, 'babbage', '1 scoop');

-- --------------------------------------------------------

--
-- Table structure for table `recipe50_cabbage_babbage_instructions`
--

CREATE TABLE `recipe50_cabbage_babbage_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe50_cabbage_babbage_instructions`
--

INSERT INTO `recipe50_cabbage_babbage_instructions` (`id`, `instruction`) VALUES
(1, 'chop cabbage'),
(2, 'add babbage'),
(3, 'bone apple teeth!');

-- --------------------------------------------------------

--
-- Table structure for table `recipe51_tacos_images`
--

CREATE TABLE `recipe51_tacos_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe51_tacos_images`
--

INSERT INTO `recipe51_tacos_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607963832174_tacos.jpg'),
(2, 'imageFile_dateVal_1607963832176_tacos2.jpg'),
(3, 'imageFile_dateVal_1607963832185_tacos23.jpg'),
(4, 'imageFile_dateVal_1607963832186_ttacos.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe51_tacos_ingredients`
--

CREATE TABLE `recipe51_tacos_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe51_tacos_ingredients`
--

INSERT INTO `recipe51_tacos_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Taco Shells', '4'),
(2, 'Taco Meat ', '1 pound');

-- --------------------------------------------------------

--
-- Table structure for table `recipe51_tacos_instructions`
--

CREATE TABLE `recipe51_tacos_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe51_tacos_instructions`
--

INSERT INTO `recipe51_tacos_instructions` (`id`, `instruction`) VALUES
(1, 'Eat Taco.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe52_pork_and_beans_images`
--

CREATE TABLE `recipe52_pork_and_beans_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe52_pork_and_beans_images`
--

INSERT INTO `recipe52_pork_and_beans_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607967656600_pork.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe52_pork_and_beans_ingredients`
--

CREATE TABLE `recipe52_pork_and_beans_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe52_pork_and_beans_ingredients`
--

INSERT INTO `recipe52_pork_and_beans_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Pork', '2 lb'),
(2, 'Cooked Beans', '4 cups');

-- --------------------------------------------------------

--
-- Table structure for table `recipe52_pork_and_beans_instructions`
--

CREATE TABLE `recipe52_pork_and_beans_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe52_pork_and_beans_instructions`
--

INSERT INTO `recipe52_pork_and_beans_instructions` (`id`, `instruction`) VALUES
(1, 'Combine pork with beans in a large pot.'),
(2, 'Simmer on low heat until done.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe53_pork_and_beans_images`
--

CREATE TABLE `recipe53_pork_and_beans_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe53_pork_and_beans_images`
--

INSERT INTO `recipe53_pork_and_beans_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607967658306_pork.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe53_pork_and_beans_ingredients`
--

CREATE TABLE `recipe53_pork_and_beans_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe53_pork_and_beans_ingredients`
--

INSERT INTO `recipe53_pork_and_beans_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Pork', '2 lb'),
(2, 'Cooked Beans', '4 cups');

-- --------------------------------------------------------

--
-- Table structure for table `recipe53_pork_and_beans_instructions`
--

CREATE TABLE `recipe53_pork_and_beans_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe53_pork_and_beans_instructions`
--

INSERT INTO `recipe53_pork_and_beans_instructions` (`id`, `instruction`) VALUES
(1, 'Combine pork with beans in a large pot.'),
(2, 'Simmer on low heat until done.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe54_pork_and_beans_images`
--

CREATE TABLE `recipe54_pork_and_beans_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe54_pork_and_beans_images`
--

INSERT INTO `recipe54_pork_and_beans_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607967663630_pork.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe54_pork_and_beans_ingredients`
--

CREATE TABLE `recipe54_pork_and_beans_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe54_pork_and_beans_ingredients`
--

INSERT INTO `recipe54_pork_and_beans_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Pork', '2 lb'),
(2, 'Cooked Beans', '4 cups');

-- --------------------------------------------------------

--
-- Table structure for table `recipe54_pork_and_beans_instructions`
--

CREATE TABLE `recipe54_pork_and_beans_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe54_pork_and_beans_instructions`
--

INSERT INTO `recipe54_pork_and_beans_instructions` (`id`, `instruction`) VALUES
(1, 'Combine pork with beans in a large pot.'),
(2, 'Simmer on low heat until done.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe55_pork_and_beans_ingredients`
--

CREATE TABLE `recipe55_pork_and_beans_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe55_pork_and_beans_ingredients`
--

INSERT INTO `recipe55_pork_and_beans_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Pork', '2 lb'),
(2, 'Cooked Beans', '4 cups');

-- --------------------------------------------------------

--
-- Table structure for table `recipe55_pork_and_beans_instructions`
--

CREATE TABLE `recipe55_pork_and_beans_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe55_pork_and_beans_instructions`
--

INSERT INTO `recipe55_pork_and_beans_instructions` (`id`, `instruction`) VALUES
(1, 'Combine pork with beans in a large pot.'),
(2, 'Simmer on low heat until done.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe56_pork_and_beans_ingredients`
--

CREATE TABLE `recipe56_pork_and_beans_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe56_pork_and_beans_ingredients`
--

INSERT INTO `recipe56_pork_and_beans_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Pork', '2 lb'),
(2, 'Cooked Beans', '4 cups');

-- --------------------------------------------------------

--
-- Table structure for table `recipe56_pork_and_beans_instructions`
--

CREATE TABLE `recipe56_pork_and_beans_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe56_pork_and_beans_instructions`
--

INSERT INTO `recipe56_pork_and_beans_instructions` (`id`, `instruction`) VALUES
(1, 'Combine pork with beans in a large pot.'),
(2, 'Simmer on low heat until done.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe57_pork_and_beans_ingredients`
--

CREATE TABLE `recipe57_pork_and_beans_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe57_pork_and_beans_ingredients`
--

INSERT INTO `recipe57_pork_and_beans_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Pork', '2 lb'),
(2, 'Cooked Beans', '4 cups');

-- --------------------------------------------------------

--
-- Table structure for table `recipe57_pork_and_beans_instructions`
--

CREATE TABLE `recipe57_pork_and_beans_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe57_pork_and_beans_instructions`
--

INSERT INTO `recipe57_pork_and_beans_instructions` (`id`, `instruction`) VALUES
(1, 'Combine pork with beans in a large pot.'),
(2, 'Simmer on low heat until done.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe58_pork_and_beans_images`
--

CREATE TABLE `recipe58_pork_and_beans_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe58_pork_and_beans_images`
--

INSERT INTO `recipe58_pork_and_beans_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1607967670664_pork.jpg'),
(2, 'imageFile_dateVal_1607967670667_pork.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe58_pork_and_beans_ingredients`
--

CREATE TABLE `recipe58_pork_and_beans_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe58_pork_and_beans_ingredients`
--

INSERT INTO `recipe58_pork_and_beans_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Pork', '2 lb'),
(2, 'Cooked Beans', '4 cups');

-- --------------------------------------------------------

--
-- Table structure for table `recipe58_pork_and_beans_instructions`
--

CREATE TABLE `recipe58_pork_and_beans_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe58_pork_and_beans_instructions`
--

INSERT INTO `recipe58_pork_and_beans_instructions` (`id`, `instruction`) VALUES
(1, 'Combine pork with beans in a large pot.'),
(2, 'Simmer on low heat until done.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe59__ingredients`
--

CREATE TABLE `recipe59__ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(10) UNSIGNED NOT NULL,
  `item` varchar(150) NOT NULL,
  `cook` varchar(150) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `description` varchar(500) NOT NULL,
  `user` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `item`, `cook`, `date`, `description`, `user`) VALUES
(43, 'Guacamole', 'Omar', '2020-12-13 22:46:38', 'Yum', 'omar'),
(44, 'Salsa', 'Omar', '2020-12-13 22:55:55', 'Its red', 'omar'),
(45, 'Chicken Soup', 'Omar', '2020-12-13 22:56:56', '', 'omar'),
(46, 'Dumplings ', '', '2020-12-13 22:57:43', '', 'omar'),
(47, 'Cabbage Babbage', 'Cabbritt', '2020-12-13 23:49:48', 'Yummy yummy cabbage', NULL),
(48, 'Cabbage Babbage', 'Cabbritt', '2020-12-13 23:49:51', 'Yummy yummy cabbage', NULL),
(49, 'cabbage babbage', 'B', '2020-12-13 23:51:46', 'yummtastic cabbage!', 'B'),
(50, 'cabbage babbage', 'B', '2020-12-13 23:52:00', 'yummtastic cabbage!', 'B'),
(51, 'Tacos', 'Omar', '2020-12-14 11:37:07', 'Delicious tacos for eating.', 'omar'),
(52, 'Pork and Beans', 'N8', '2020-12-14 12:40:55', 'This is a great recipe for winter time.', NULL),
(53, 'Pork and Beans', 'N8', '2020-12-14 12:40:57', 'This is a great recipe for winter time.', NULL),
(54, 'Pork and Beans', 'N8', '2020-12-14 12:41:02', 'This is a great recipe for winter time.', NULL),
(55, 'Pork and Beans', 'N8', '2020-12-14 12:41:05', 'This is a great recipe for winter time.', NULL),
(56, 'Pork and Beans', 'N8', '2020-12-14 12:41:05', 'This is a great recipe for winter time.', NULL),
(57, 'Pork and Beans', 'N8', '2020-12-14 12:41:05', 'This is a great recipe for winter time.', NULL),
(58, 'Pork and Beans', 'N8', '2020-12-14 12:41:05', 'This is a great recipe for winter time.', NULL),
(59, '', '', '2020-12-17 01:46:16', '', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe43_guacamole_images`
--
ALTER TABLE `recipe43_guacamole_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe43_guacamole_ingredients`
--
ALTER TABLE `recipe43_guacamole_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe43_guacamole_instructions`
--
ALTER TABLE `recipe43_guacamole_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe44_salsa_images`
--
ALTER TABLE `recipe44_salsa_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe44_salsa_ingredients`
--
ALTER TABLE `recipe44_salsa_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe44_salsa_instructions`
--
ALTER TABLE `recipe44_salsa_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe45_chicken_soup_images`
--
ALTER TABLE `recipe45_chicken_soup_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe45_chicken_soup_ingredients`
--
ALTER TABLE `recipe45_chicken_soup_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe45_chicken_soup_instructions`
--
ALTER TABLE `recipe45_chicken_soup_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe46_dumplings__images`
--
ALTER TABLE `recipe46_dumplings__images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe46_dumplings__ingredients`
--
ALTER TABLE `recipe46_dumplings__ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe46_dumplings__instructions`
--
ALTER TABLE `recipe46_dumplings__instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe47_cabbage_babbage_images`
--
ALTER TABLE `recipe47_cabbage_babbage_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe47_cabbage_babbage_ingredients`
--
ALTER TABLE `recipe47_cabbage_babbage_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe47_cabbage_babbage_instructions`
--
ALTER TABLE `recipe47_cabbage_babbage_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe48_cabbage_babbage_images`
--
ALTER TABLE `recipe48_cabbage_babbage_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe48_cabbage_babbage_ingredients`
--
ALTER TABLE `recipe48_cabbage_babbage_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe48_cabbage_babbage_instructions`
--
ALTER TABLE `recipe48_cabbage_babbage_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe49_cabbage_babbage_images`
--
ALTER TABLE `recipe49_cabbage_babbage_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe49_cabbage_babbage_ingredients`
--
ALTER TABLE `recipe49_cabbage_babbage_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe49_cabbage_babbage_instructions`
--
ALTER TABLE `recipe49_cabbage_babbage_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe50_cabbage_babbage_images`
--
ALTER TABLE `recipe50_cabbage_babbage_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe50_cabbage_babbage_ingredients`
--
ALTER TABLE `recipe50_cabbage_babbage_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe50_cabbage_babbage_instructions`
--
ALTER TABLE `recipe50_cabbage_babbage_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe51_tacos_images`
--
ALTER TABLE `recipe51_tacos_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe51_tacos_ingredients`
--
ALTER TABLE `recipe51_tacos_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe51_tacos_instructions`
--
ALTER TABLE `recipe51_tacos_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe52_pork_and_beans_images`
--
ALTER TABLE `recipe52_pork_and_beans_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe52_pork_and_beans_ingredients`
--
ALTER TABLE `recipe52_pork_and_beans_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe52_pork_and_beans_instructions`
--
ALTER TABLE `recipe52_pork_and_beans_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe53_pork_and_beans_images`
--
ALTER TABLE `recipe53_pork_and_beans_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe53_pork_and_beans_ingredients`
--
ALTER TABLE `recipe53_pork_and_beans_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe53_pork_and_beans_instructions`
--
ALTER TABLE `recipe53_pork_and_beans_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe54_pork_and_beans_images`
--
ALTER TABLE `recipe54_pork_and_beans_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe54_pork_and_beans_ingredients`
--
ALTER TABLE `recipe54_pork_and_beans_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe54_pork_and_beans_instructions`
--
ALTER TABLE `recipe54_pork_and_beans_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe55_pork_and_beans_ingredients`
--
ALTER TABLE `recipe55_pork_and_beans_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe55_pork_and_beans_instructions`
--
ALTER TABLE `recipe55_pork_and_beans_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe56_pork_and_beans_ingredients`
--
ALTER TABLE `recipe56_pork_and_beans_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe56_pork_and_beans_instructions`
--
ALTER TABLE `recipe56_pork_and_beans_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe57_pork_and_beans_ingredients`
--
ALTER TABLE `recipe57_pork_and_beans_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe57_pork_and_beans_instructions`
--
ALTER TABLE `recipe57_pork_and_beans_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe58_pork_and_beans_images`
--
ALTER TABLE `recipe58_pork_and_beans_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe58_pork_and_beans_ingredients`
--
ALTER TABLE `recipe58_pork_and_beans_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe58_pork_and_beans_instructions`
--
ALTER TABLE `recipe58_pork_and_beans_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe59__ingredients`
--
ALTER TABLE `recipe59__ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `recipe43_guacamole_images`
--
ALTER TABLE `recipe43_guacamole_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe43_guacamole_ingredients`
--
ALTER TABLE `recipe43_guacamole_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe43_guacamole_instructions`
--
ALTER TABLE `recipe43_guacamole_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe44_salsa_images`
--
ALTER TABLE `recipe44_salsa_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe44_salsa_ingredients`
--
ALTER TABLE `recipe44_salsa_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe44_salsa_instructions`
--
ALTER TABLE `recipe44_salsa_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe45_chicken_soup_images`
--
ALTER TABLE `recipe45_chicken_soup_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe45_chicken_soup_ingredients`
--
ALTER TABLE `recipe45_chicken_soup_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe45_chicken_soup_instructions`
--
ALTER TABLE `recipe45_chicken_soup_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe46_dumplings__images`
--
ALTER TABLE `recipe46_dumplings__images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe46_dumplings__ingredients`
--
ALTER TABLE `recipe46_dumplings__ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe46_dumplings__instructions`
--
ALTER TABLE `recipe46_dumplings__instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe47_cabbage_babbage_images`
--
ALTER TABLE `recipe47_cabbage_babbage_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe47_cabbage_babbage_ingredients`
--
ALTER TABLE `recipe47_cabbage_babbage_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe47_cabbage_babbage_instructions`
--
ALTER TABLE `recipe47_cabbage_babbage_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `recipe48_cabbage_babbage_images`
--
ALTER TABLE `recipe48_cabbage_babbage_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe48_cabbage_babbage_ingredients`
--
ALTER TABLE `recipe48_cabbage_babbage_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe48_cabbage_babbage_instructions`
--
ALTER TABLE `recipe48_cabbage_babbage_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `recipe49_cabbage_babbage_images`
--
ALTER TABLE `recipe49_cabbage_babbage_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe49_cabbage_babbage_ingredients`
--
ALTER TABLE `recipe49_cabbage_babbage_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe49_cabbage_babbage_instructions`
--
ALTER TABLE `recipe49_cabbage_babbage_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `recipe50_cabbage_babbage_images`
--
ALTER TABLE `recipe50_cabbage_babbage_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe50_cabbage_babbage_ingredients`
--
ALTER TABLE `recipe50_cabbage_babbage_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe50_cabbage_babbage_instructions`
--
ALTER TABLE `recipe50_cabbage_babbage_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `recipe51_tacos_images`
--
ALTER TABLE `recipe51_tacos_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `recipe51_tacos_ingredients`
--
ALTER TABLE `recipe51_tacos_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe51_tacos_instructions`
--
ALTER TABLE `recipe51_tacos_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe52_pork_and_beans_images`
--
ALTER TABLE `recipe52_pork_and_beans_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe52_pork_and_beans_ingredients`
--
ALTER TABLE `recipe52_pork_and_beans_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe52_pork_and_beans_instructions`
--
ALTER TABLE `recipe52_pork_and_beans_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe53_pork_and_beans_images`
--
ALTER TABLE `recipe53_pork_and_beans_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe53_pork_and_beans_ingredients`
--
ALTER TABLE `recipe53_pork_and_beans_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe53_pork_and_beans_instructions`
--
ALTER TABLE `recipe53_pork_and_beans_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe54_pork_and_beans_images`
--
ALTER TABLE `recipe54_pork_and_beans_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe54_pork_and_beans_ingredients`
--
ALTER TABLE `recipe54_pork_and_beans_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe54_pork_and_beans_instructions`
--
ALTER TABLE `recipe54_pork_and_beans_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe55_pork_and_beans_ingredients`
--
ALTER TABLE `recipe55_pork_and_beans_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe55_pork_and_beans_instructions`
--
ALTER TABLE `recipe55_pork_and_beans_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe56_pork_and_beans_ingredients`
--
ALTER TABLE `recipe56_pork_and_beans_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe56_pork_and_beans_instructions`
--
ALTER TABLE `recipe56_pork_and_beans_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe57_pork_and_beans_ingredients`
--
ALTER TABLE `recipe57_pork_and_beans_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe57_pork_and_beans_instructions`
--
ALTER TABLE `recipe57_pork_and_beans_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe58_pork_and_beans_images`
--
ALTER TABLE `recipe58_pork_and_beans_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe58_pork_and_beans_ingredients`
--
ALTER TABLE `recipe58_pork_and_beans_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe58_pork_and_beans_instructions`
--
ALTER TABLE `recipe58_pork_and_beans_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe59__ingredients`
--
ALTER TABLE `recipe59__ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
