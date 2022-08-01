DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters`(
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL
);

INSERT INTO
  `characters` (name)
VALUES
( "Eleftheria"),
("Gennadios"),
("Lysimachos"),
("Pandore"),
("Pasiphaé"),
("Pénélope"),
("Perséphone"),
("Phèdre"),
("Polymnie"),
("Proserpine"),
("Psychée")
;