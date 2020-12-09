
--order alphabetically
	SELECT * FROM recipes WHERE user = '${req.session.username}' ORDER BY user;
======================
DROP TABLE  recipe10_peas,
recipe13_peas,
recipe14_peas4            ,
 recipe16_baba_ganoush     ,
 recipe3_tomato_sauce      ,
 recipe4_mashed_potatoes   ,
 recipe5_peas_and_carrots , 
 recipe9_peas;


=========================

--Select id from newly created recipe 

SELECT id FROM recipes WHERE item=${item} AND cook=${cook} AND date=${item};

--Create new table for each recipe.

CREATE TABLE recipe${id}_${item} (
	id int(11) NOT NULL,
	ingredient varchar(50) NOT NULL,
	amount varchar(50) NOT NULL,
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


=====================================
--delete test rows from accounts

DELETE from accounts WHERE id BETWEEN 21 AND 40;
DELETE from recipes WHERE id BETWEEN 3 AND 20;

==========================

--Add columns to 'accounts'

ALTER TABLE accounts
ADD COLUMN firstName varChar(20) FIRST,

ADD COLUMN lastName varChar(20) AFTER firstName;

=========================

//create login

CREATE TABLE IF NOT EXISTS `accounts` (
	`id` int(11) NOT NULL,
	`username` varchar(50) NOT NULL,
	`password` varchar(255) NOT NULL,
	`email` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'britt', 'neal', 'test@test.com');

ALTER TABLE `accounts` ADD PRIMARY KEY (`id`);
ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

======================

CREATE TABLE recipes
(
	id 	INT unsigned NOT NULL AUTO_INCREMENT,
	name	VARCHAR(150) NOT NULL,
	cook	VARCHAR(150) NOT NULL,
	date	DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	img	VARCHAR(300) NOT NULL, 
	description 	VARCHAR(500) NOT NULL
);