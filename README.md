# User Management Dashboard (Node.js + MySQL)

## Date = `05 - August - 2025`

A simple full-stack application that allows you to view, edit, and manage users with a clean Bootstrap interface. This app uses Node.js, Express.js, MySQL, and EJS templating, along with Faker.js for generating fake user data.

## 🚀 Features

- View total number of users
- List all users
- Edit user's username with password confirmation
- Password-protected update functionality
- Responsive UI using Bootstrap 5

## 🛠️ Tech Stack

- Node.js
- Express.js
- MySQL
- EJS (Embedded JavaScript Templates)
- Faker.js (`@faker-js/faker`)
- Bootstrap 5
- dotenv
- method-override

## 📁 Project Structure
project:
 views:
    * home.ejs
    * show.ejs
    * edit.ejs

 .env
 index.js
 package.json
 README.md

## Install Dependencies
This will install:
`npm i`

* @faker-js/faker
* mysql2
* dotenv
* express
* ejs
* uuid
* method-override

## Create MySQL Database

CREATE DATABASE node;
USE node;

CREATE TABLE user (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(50) UNIQUE,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

## Run the Server
nodemon index.js

## 👨‍💻 Author
Deepak Singh Soun
Frontend & Full Stack Developer
🔗 LinkedIn: Deepak Singh Soun

## 📃 License

Let me know if you want this in downloadable format (`README.md` file), or want to expand it to include future plans or features like add/delete users.
