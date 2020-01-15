/* mysql -u root < schema.sql
*/

DROP DATABASE IF EXISTS Checkout;
CREATE DATABASE Checkout;
USE Checkout;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
  Id int not null primary key auto_increment,
  name VARCHAR(255) not null,
  email varchar(255) not null,
  password varchar(255) not null,
  address_line_1 varchar(255) not null,
  address_line_2 varchar(255),
  city varchar(255) not null,
  state varchar(20) not null,
  zip_code int not null,
  credit_card_number varchar(255) not null,
  expiry_date int not null,
  CVV int not null,
  billing_zip int not null
);