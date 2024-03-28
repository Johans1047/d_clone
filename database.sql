CREATE DATABASE D_CLONE;

CREATE TABLE USER (
    ID SERIAL PRIMARY KEY,
    FULL_NAME VARCHAR(255) NOT NULL,
    USER_NAME VARCHAR(31) UNIQUE NOT NULL,
    EMAIL VARCHAR(255) UNIQUE NOT NULL,
    PASS_HASH VARCHAR(64) NOT NULL,
    SALT CHAR(12) NOT NULL,
    NEWSLETTER BOOLEAN,
    PFP_URL TEXT,
    ABOUT TEXT,
    STATUS NUMBER
);

CREATE TABLE SERVER (
    ID SERIAL PRIMARY KEY,
    SERVER_NAME VARCHAR(128),
    DEFAULT_CHANNEL_ID BIGINT NOT NULL,
    PFP_URL TEXT,
    ABOUT TEXT,
    STATUS NUMBER
);