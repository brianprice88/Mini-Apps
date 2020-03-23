DROP DATABASE if EXISTS grocerylist;
CREATE DATABASE grocerylist;

USE grocerylist;

DROP TABLE IF EXISTS groceries;

CREATE TABLE groceries (
  ID int not null AUTO_INCREMENT,
  Item VARCHAR(255) not null,
  Quantity int not null,
  primary key (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/