DROP DATABASE IF EXISTS pool;

CREATE DATABASE IF NOT EXISTS pool;

USE pool;

CREATE TABLE IF NOT EXISTS article (
    id VARCHAR(32) PRIMARY KEY,
    published INT,
    author VARCHAR(20),
    title VARCHAR(100),
    abstract VARCHAR(200),
    content TEXT
);