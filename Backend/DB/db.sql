-- Create the database
DROP DATABASE `user_name`;
CREATE DATABASE `user_name` ;
USE `user_name`;


CREATE TABLE IF NOT EXISTS `users` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (name , email) VALUES
('Alice', 'Alice@gmail.com'),
('Bob' , 'bob@gmail.com');
