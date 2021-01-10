-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 05, 2021 at 05:38 PM
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
(4, 'B', 'B', 'B@gmail.com', 'B', 'B'),
(5, 'd', 'd', 'd', 'd', 'd'),
(6, 'f', 'f', 'f', 'f', 'f'),
(7, 'q', 'q', 'q', 'q', 'q'),
(8, 'g', 'g', 'g', 'g', 'g'),
(9, 'Ami', 'Ami', 'Ami', 'Ami', 'Ami');

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
-- Table structure for table `recipe60_pumpkin_mug_cake_images`
--

CREATE TABLE `recipe60_pumpkin_mug_cake_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe60_pumpkin_mug_cake_images`
--

INSERT INTO `recipe60_pumpkin_mug_cake_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1608349879398_Screen_Shot_2020-12-18_at_7.49.32_PM.png'),
(2, 'imageFile_dateVal_1608349879410_Screen_Shot_2020-12-18_at_7.49.32_PM.png');

-- --------------------------------------------------------

--
-- Table structure for table `recipe60_pumpkin_mug_cake_ingredients`
--

CREATE TABLE `recipe60_pumpkin_mug_cake_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe60_pumpkin_mug_cake_ingredients`
--

INSERT INTO `recipe60_pumpkin_mug_cake_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'pumpkin', '1 can'),
(2, 'cacao powder', 'ample shake, but not too much'),
(3, 'eggs', '2'),
(4, 'cassava', '1/3 cup - more as needed'),
(5, 'rolled oats', '1/3 cup - more as needed'),
(6, 'salt', 'pinch'),
(7, 'vanilla extract', 'small splash'),
(8, 'lakanto', 'to taste'),
(9, 'baking powder', 'pinch');

-- --------------------------------------------------------

--
-- Table structure for table `recipe60_pumpkin_mug_cake_instructions`
--

CREATE TABLE `recipe60_pumpkin_mug_cake_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe60_pumpkin_mug_cake_instructions`
--

INSERT INTO `recipe60_pumpkin_mug_cake_instructions` (`id`, `instruction`) VALUES
(1, 'Mix it all up!\nfill a mug half way, microwave for ');

-- --------------------------------------------------------

--
-- Table structure for table `recipe69_jalapenos_images`
--

CREATE TABLE `recipe69_jalapenos_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe69_jalapenos_images`
--

INSERT INTO `recipe69_jalapenos_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1608753488961_mammoth-jalapeno-hot-pepper.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe69_jalapenos_ingredients`
--

CREATE TABLE `recipe69_jalapenos_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe69_jalapenos_ingredients`
--

INSERT INTO `recipe69_jalapenos_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'jalapenos', 'lots');

-- --------------------------------------------------------

--
-- Table structure for table `recipe69_jalapenos_instructions`
--

CREATE TABLE `recipe69_jalapenos_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe69_jalapenos_instructions`
--

INSERT INTO `recipe69_jalapenos_instructions` (`id`, `instruction`) VALUES
(1, 'Just eat ');

-- --------------------------------------------------------

--
-- Table structure for table `recipe70_cream_of_broccoli_soup__non_dairy__images`
--

CREATE TABLE `recipe70_cream_of_broccoli_soup__non_dairy__images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe70_cream_of_broccoli_soup__non_dairy__images`
--

INSERT INTO `recipe70_cream_of_broccoli_soup__non_dairy__images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1608917744091_cream_of_broccoli_soup.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe70_cream_of_broccoli_soup__non_dairy__ingredients`
--

CREATE TABLE `recipe70_cream_of_broccoli_soup__non_dairy__ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe70_cream_of_broccoli_soup__non_dairy__ingredients`
--

INSERT INTO `recipe70_cream_of_broccoli_soup__non_dairy__ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'onion (white or yellow), sliced', '1'),
(2, 'leeks (white parts)', '3'),
(3, 'minced garlic cloves', '2'),
(4, 'broccoli florets', '5-6 cups'),
(5, 'full fat coconut milk', '1 can'),
(6, 'chicken bone broth (or better than boullion)', '3 cups'),
(7, 'coconut oil', '2-3 tbs'),
(8, ' lemon juice', '1 tbs'),
(9, 'salta and peppa', 'you know what to do');

-- --------------------------------------------------------

--
-- Table structure for table `recipe70_cream_of_broccoli_soup__non_dairy__instructions`
--

CREATE TABLE `recipe70_cream_of_broccoli_soup__non_dairy__instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe70_cream_of_broccoli_soup__non_dairy__instructions`
--

INSERT INTO `recipe70_cream_of_broccoli_soup__non_dairy__instructions` (`id`, `instruction`) VALUES
(1, 'Saute onion, leeks, garlic until soft'),
(2, 'add broccoli florets, coconut milk, and broth'),
(3, 'Bring to a boil, reduce heat and simmer for 20 min'),
(4, 'Add lemon juice, salt and pepper'),
(5, 'Blend in a blender, or use an immersion blender if'),
(6, 'Optional adds:\n1 tbs curry powder\nnutritional yeas');

-- --------------------------------------------------------

--
-- Table structure for table `recipe71_oatmeal_banana_cookies_images`
--

CREATE TABLE `recipe71_oatmeal_banana_cookies_images` (
  `id` int(11) NOT NULL,
  `imageName` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe71_oatmeal_banana_cookies_images`
--

INSERT INTO `recipe71_oatmeal_banana_cookies_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1609308670968_A96944F3-5DA5-4109-81D7-C154CABBD7DE.jpeg'),
(2, 'imageFile_dateVal_1609308671009_51887C41-3A41-48A4-8645-377B88638948.jpeg'),
(3, 'imageFile_dateVal_1609308671026_3C84EA96-3F17-41F9-B3E5-B60B7B148F5F.jpeg'),
(4, 'imageFile_dateVal_1609308671038_F4E04F7F-B826-4666-A149-670F82A8AC0A.jpeg'),
(5, 'imageFile_dateVal_1609308671050_83C19F5F-70C8-478F-9A1B-0ECB3071EE29.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe71_oatmeal_banana_cookies_ingredients`
--

CREATE TABLE `recipe71_oatmeal_banana_cookies_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(50) NOT NULL,
  `amount` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe71_oatmeal_banana_cookies_ingredients`
--

INSERT INTO `recipe71_oatmeal_banana_cookies_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'Oatmeal', '3 cups'),
(2, 'Banana', '1 '),
(3, 'Butter ', '1/8 cup'),
(4, 'Eggs', '3'),
(5, 'Water', 'Enough to soak the oatmeal, and then drain off.'),
(6, 'Cassava flour', '1/2 cup');

-- --------------------------------------------------------

--
-- Table structure for table `recipe71_oatmeal_banana_cookies_instructions`
--

CREATE TABLE `recipe71_oatmeal_banana_cookies_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe71_oatmeal_banana_cookies_instructions`
--

INSERT INTO `recipe71_oatmeal_banana_cookies_instructions` (`id`, `instruction`) VALUES
(1, 'Soak oatmeal in water, then drain the water. Water'),
(2, 'Mix in eggs, butter, cassava flour, and banana. Mi'),
(3, 'Cook at 350 degrees F for about 10 minutes. '),
(4, 'Eat yummy cooks!');

-- --------------------------------------------------------

--
-- Table structure for table `recipe72_test_images`
--

CREATE TABLE `recipe72_test_images` (
  `id` int(50) NOT NULL,
  `imageName` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe72_test_images`
--

INSERT INTO `recipe72_test_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1609356750065_full-stack-javascript-based-recipe-app.png');

-- --------------------------------------------------------

--
-- Table structure for table `recipe72_test_ingredients`
--

CREATE TABLE `recipe72_test_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(500) NOT NULL,
  `amount` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe72_test_ingredients`
--

INSERT INTO `recipe72_test_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'test', 'test');

-- --------------------------------------------------------

--
-- Table structure for table `recipe72_test_instructions`
--

CREATE TABLE `recipe72_test_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(1000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe72_test_instructions`
--

INSERT INTO `recipe72_test_instructions` (`id`, `instruction`) VALUES
(1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

-- --------------------------------------------------------

--
-- Table structure for table `recipe73_pomegranate_with_lime_images`
--

CREATE TABLE `recipe73_pomegranate_with_lime_images` (
  `id` int(50) NOT NULL,
  `imageName` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe73_pomegranate_with_lime_images`
--

INSERT INTO `recipe73_pomegranate_with_lime_images` (`id`, `imageName`) VALUES
(1, 'imageFile_dateVal_1609804434148_pom_with_lemon.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `recipe73_pomegranate_with_lime_ingredients`
--

CREATE TABLE `recipe73_pomegranate_with_lime_ingredients` (
  `id` int(11) NOT NULL,
  `ingredient` varchar(500) NOT NULL,
  `amount` varchar(500) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe73_pomegranate_with_lime_ingredients`
--

INSERT INTO `recipe73_pomegranate_with_lime_ingredients` (`id`, `ingredient`, `amount`) VALUES
(1, 'pomegranate', '1'),
(2, 'lime', '1');

-- --------------------------------------------------------

--
-- Table structure for table `recipe73_pomegranate_with_lime_instructions`
--

CREATE TABLE `recipe73_pomegranate_with_lime_instructions` (
  `id` int(11) NOT NULL,
  `instruction` varchar(3000) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe73_pomegranate_with_lime_instructions`
--

INSERT INTO `recipe73_pomegranate_with_lime_instructions` (`id`, `instruction`) VALUES
(1, 'De-seed the pomegranate. Stop whining, it\'s not so bad.'),
(2, 'Roll the lime on the counter'),
(3, 'zest the lime into the pomegranate seeds'),
(4, 'add the juice of the lime (add another lime if it wasn\'t a juicy one.)');

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
(51, 'Tacos', 'Omar', '2020-12-14 11:37:07', 'Delicious tacos for eating.', 'omar'),
(52, 'Pork and Beans', 'N8', '2020-12-14 12:40:55', 'This is a great recipe for winter time.', NULL),
(60, 'Pumpkin Mug Cake', 'Britt', '2020-12-18 22:51:16', 'No real measurements - just threw it together. It doesn\'t taste great, but the texture is awesome!', 'B'),
(69, 'Jalapenos', 'Omar', '2020-12-23 14:58:06', 'Spicy', 'omar'),
(70, 'Cream of Broccoli Soup (non-dairy)', 'Britt', '2020-12-25 12:35:43', 'This soup is perhaps the King of Soups. Delicious, nutritious, satisfying, and always a hit.', NULL),
(71, 'Oatmeal Banana Cookies', 'Omar', '2020-12-30 01:10:59', 'Tasty cookies using oatmeal and banana! ', NULL),
(73, 'Pomegranate with lime', 'Britt', '2021-01-04 18:53:51', 'Way better than the sum of its parts - ambrosia level tasty.', 'B');

-- --------------------------------------------------------

--
-- Table structure for table `to_try_b`
--

CREATE TABLE `to_try_b` (
  `id` int(20) NOT NULL,
  `item` varchar(255) DEFAULT NULL,
  `imageName` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `to_try_B`
--

CREATE TABLE `to_try_B` (
  `id` int(20) NOT NULL,
  `item` varchar(255) DEFAULT NULL,
  `imageName` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `to_try_B`
--

INSERT INTO `to_try_B` (`id`, `item`, `imageName`, `link`, `tags`) VALUES
(1, 'Chicken Liver', 'imageFile_dateVal_1608778635175_chicken_livers.jpg', 'https://healthyrecipesblogs.com/fried-chicken-livers/#wprm-recipe-container-23435', NULL),
(2, 'Raddichio ', NULL, 'https://www.bonappetit.com/recipe/radicchio-with-tahini-and-sesame-seeds', NULL),
(3, 'Cheese', NULL, 'null', 'cheese, milk'),
(4, 'Spicy Veggies du Sardines', 'imageFile_dateVal_1608936916538_image.jpg', 'null', 'null'),
(6, 'test', 'imageFile_dateVal_1608937558647_D3BA38D8-C2A4-468B-A00B-09306146124C.jpeg', 'null', 'null'),
(7, 'omar', NULL, 'omar', 'null'),
(8, 'Britt favorite', 'imageFile_dateVal_1608943083238_image.jpg', 'omar', 'null'),
(9, 'Spicy Veggies and Sardines', 'imageFile_dateVal_1609093238636_image.jpg', 'null', 'Sardines, veggies');

-- --------------------------------------------------------

--
-- Table structure for table `to_try_omar`
--

CREATE TABLE `to_try_omar` (
  `id` int(20) NOT NULL,
  `item` varchar(255) DEFAULT NULL,
  `imageName` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `to_try_omar`
--

INSERT INTO `to_try_omar` (`id`, `item`, `imageName`, `link`, `tags`) VALUES
(4, 'Doggo', 'imageFile_dateVal_1608786413018_download_(9).jpg', 'null', NULL),
(30, 'march', 'imageFile_dateVal_1609012837299_amiart_thumbnail.png', 'null', 'null'),
(14, 'omar ', NULL, 'null', NULL),
(16, 'Amis cake', NULL, 'amiart.com', 'art, dogs, animals'),
(17, 'ami', NULL, 'https://amiart.com', 'art, dogs, animals'),
(18, 'cheese', 'imageFile_dateVal_1608935171499_image.jpg', 'null', 'null'),
(19, 'Bread', 'imageFile_dateVal_1608935325754_image.jpg', 'null', 'null'),
(21, 'OMar', 'imageFile_dateVal_1608942035726_boat_on_lake_cropped_thin.jpg', 'null', 'null'),
(22, 'fixed image crop', 'imageFile_dateVal_1608942285778_boat_on_lake_cropped_thin.jpg', 'null', 'null'),
(23, 'imge fixed', 'imageFile_dateVal_1608942358047_boat_on_lake.jpg', 'null', 'null'),
(24, 'arduino', 'imageFile_dateVal_1608942466048_arduino_sunset.jpg', 'null', 'null'),
(25, 'dddd', 'imageFile_dateVal_1608942580835_arduino_sunset.jpg', 'null', 'null'),
(26, 'ami cake', 'imageFile_dateVal_1608942768279_cactus_garden.jpg', 'null', 'null'),
(27, 'decem', 'imageFile_dateVal_1609007794882_B97D25FE-D068-418A-B542-F887ED27CC9D.jpeg', 'null', 'null'),
(28, 'january', 'imageFile_dateVal_1609012392482_75C85213-42CA-4D4C-B807-802A76E71D27.jpeg', 'null', 'null'),
(29, 'february', 'imageFile_dateVal_1609012489635_01179DAB-2A85-4714-B36F-E9D9CABF2937.jpeg', 'null', 'null');

-- --------------------------------------------------------

--
-- Table structure for table `to_try_Omar`
--

CREATE TABLE `to_try_Omar` (
  `id` int(20) NOT NULL,
  `item` varchar(255) DEFAULT NULL,
  `imageName` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `to_try_Omar`
--

INSERT INTO `to_try_Omar` (`id`, `item`, `imageName`, `link`, `tags`) VALUES
(1, 'Cheese', 'imageFile_dateVal_1608935219566_image.jpg', 'null', 'null');

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
-- Indexes for table `recipe60_pumpkin_mug_cake_images`
--
ALTER TABLE `recipe60_pumpkin_mug_cake_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe60_pumpkin_mug_cake_ingredients`
--
ALTER TABLE `recipe60_pumpkin_mug_cake_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe60_pumpkin_mug_cake_instructions`
--
ALTER TABLE `recipe60_pumpkin_mug_cake_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe69_jalapenos_images`
--
ALTER TABLE `recipe69_jalapenos_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe69_jalapenos_ingredients`
--
ALTER TABLE `recipe69_jalapenos_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe69_jalapenos_instructions`
--
ALTER TABLE `recipe69_jalapenos_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe70_cream_of_broccoli_soup__non_dairy__images`
--
ALTER TABLE `recipe70_cream_of_broccoli_soup__non_dairy__images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe70_cream_of_broccoli_soup__non_dairy__ingredients`
--
ALTER TABLE `recipe70_cream_of_broccoli_soup__non_dairy__ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe70_cream_of_broccoli_soup__non_dairy__instructions`
--
ALTER TABLE `recipe70_cream_of_broccoli_soup__non_dairy__instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe71_oatmeal_banana_cookies_images`
--
ALTER TABLE `recipe71_oatmeal_banana_cookies_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe71_oatmeal_banana_cookies_ingredients`
--
ALTER TABLE `recipe71_oatmeal_banana_cookies_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe71_oatmeal_banana_cookies_instructions`
--
ALTER TABLE `recipe71_oatmeal_banana_cookies_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe72_test_images`
--
ALTER TABLE `recipe72_test_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe72_test_ingredients`
--
ALTER TABLE `recipe72_test_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe72_test_instructions`
--
ALTER TABLE `recipe72_test_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe73_pomegranate_with_lime_images`
--
ALTER TABLE `recipe73_pomegranate_with_lime_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe73_pomegranate_with_lime_ingredients`
--
ALTER TABLE `recipe73_pomegranate_with_lime_ingredients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipe73_pomegranate_with_lime_instructions`
--
ALTER TABLE `recipe73_pomegranate_with_lime_instructions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `to_try_b`
--
ALTER TABLE `to_try_b`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `to_try_B`
--
ALTER TABLE `to_try_B`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `to_try_omar`
--
ALTER TABLE `to_try_omar`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `to_try_Omar`
--
ALTER TABLE `to_try_Omar`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

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
-- AUTO_INCREMENT for table `recipe60_pumpkin_mug_cake_images`
--
ALTER TABLE `recipe60_pumpkin_mug_cake_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe60_pumpkin_mug_cake_ingredients`
--
ALTER TABLE `recipe60_pumpkin_mug_cake_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `recipe60_pumpkin_mug_cake_instructions`
--
ALTER TABLE `recipe60_pumpkin_mug_cake_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe69_jalapenos_images`
--
ALTER TABLE `recipe69_jalapenos_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe69_jalapenos_ingredients`
--
ALTER TABLE `recipe69_jalapenos_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe69_jalapenos_instructions`
--
ALTER TABLE `recipe69_jalapenos_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe70_cream_of_broccoli_soup__non_dairy__images`
--
ALTER TABLE `recipe70_cream_of_broccoli_soup__non_dairy__images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe70_cream_of_broccoli_soup__non_dairy__ingredients`
--
ALTER TABLE `recipe70_cream_of_broccoli_soup__non_dairy__ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `recipe70_cream_of_broccoli_soup__non_dairy__instructions`
--
ALTER TABLE `recipe70_cream_of_broccoli_soup__non_dairy__instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `recipe71_oatmeal_banana_cookies_images`
--
ALTER TABLE `recipe71_oatmeal_banana_cookies_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `recipe71_oatmeal_banana_cookies_ingredients`
--
ALTER TABLE `recipe71_oatmeal_banana_cookies_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `recipe71_oatmeal_banana_cookies_instructions`
--
ALTER TABLE `recipe71_oatmeal_banana_cookies_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `recipe72_test_images`
--
ALTER TABLE `recipe72_test_images`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe72_test_ingredients`
--
ALTER TABLE `recipe72_test_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe72_test_instructions`
--
ALTER TABLE `recipe72_test_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe73_pomegranate_with_lime_images`
--
ALTER TABLE `recipe73_pomegranate_with_lime_images`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `recipe73_pomegranate_with_lime_ingredients`
--
ALTER TABLE `recipe73_pomegranate_with_lime_ingredients`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `recipe73_pomegranate_with_lime_instructions`
--
ALTER TABLE `recipe73_pomegranate_with_lime_instructions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `to_try_b`
--
ALTER TABLE `to_try_b`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `to_try_B`
--
ALTER TABLE `to_try_B`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `to_try_omar`
--
ALTER TABLE `to_try_omar`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `to_try_Omar`
--
ALTER TABLE `to_try_Omar`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
