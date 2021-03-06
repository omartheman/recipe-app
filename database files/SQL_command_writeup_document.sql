ALTER TABLE accounts 
ADD firstName varchar(500);

ALTER TABLE accounts 
ADD lastName varchar(500);

IF (SELECT 1 = 1 FROM to_try_test WHERE id=*) THEN
BEGIN
    SELECT * FROM to_try_test
END;



CREATE TABLE IF NOT EXISTS to_try_test (
id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
item varchar(255),
imageName varchar(255),
link varchar(255)
);

--Create table for recipes To Try
	CREATE TABLE IF NOT EXISTS to_try_test (
	id int(20) AUTO_INCREMENT PRIMARY KEY,
	item varchar(255),
	imageName varchar(255),
	link varchar(255)
	);
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


CREATE TABLE recipe${id}_${item}_images (
	id int(11) NOT NULL AUTO_INCREMENT,
	imagePath varchar(50) NOT NULL,
	amount varchar(50) NOT NULL,
); 

=====================================
--delete test rows from accounts

DELETE from accounts WHERE id BETWEEN 21 AND 40;
DELETE from recipes WHERE id BETWEEN 255 AND 1000;

==========================

ALTER TABLE recipes 
ADD COLUMN imagePath varChar(255);

ALTER TABLE recipes 
ADD COLUMN user varChar(255);

--Add columns to 'accounts'

ALTER TABLE accounts
ADD COLUMN firstName varChar(20) FIRST,

ADD COLUMN lastName varChar(20) AFTER firstName;

=========================

//create login

CREATE TABLE 'accounts' (
	'id' INT(50) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	'username' VARCHAR(500) NOT NULL,
	'password' VARCHAR(500) NOT NULL,
	'email' VARCHAR(500) NOT NULL
) DEFAULT CHARSET=utf8;
CREATE TABLE IF NOT EXISTS `accounts` (
	`id` int(50) NOT NULL,
	`username` varchar(500) NOT NULL,
	`password` varchar(500) NOT NULL,
	`email` varchar(500) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


ALTER TABLE accounts MODIFY COLUMN email varchar(500) NOT NULL;
ALTER TABLE accounts MODIFY COLUMN password varchar(500) NOT NULL;

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


C:\Program Files\MySQL\MySQL Server 8.0\bin>mysqldump -u root -p recipe_app_test > "c:\Users\HP EliteBook 8470p\Documents\Coding\recipe-app\database files\recipe_app_test.sql"

===============================

INSERT INTO recipes (item, cook, img, description) VALUES
	('Dumplings',
	'Omar', 
	'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
	'Pasture-raised chicken dumplings in a rice shell.');

================
