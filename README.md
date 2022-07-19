# Abstraction CRUD API (open source)

This API is abstraction of operations CRUD
Language: PT-BR

## 💻 Requirements
- One mysql database
- Node.Js and Git
- Necessary the use of a plataform API service for aproved the requsts of API<br>
( Recommend [Postman](https://www.postman.com/) )

## 📨 Versions

|Yarn|Express|
|:----:|:----:|
|1.22.19|4.16.1|

## 💾 Install
``` git clone https://github.com/PatrickLeonardo/abstraction-crud/ ```

## 📝 How to use
First you need to define the routes in the [db.json](https://github.com/PatrickLeonardo/abstraction-crud/blob/main/src/data/db.json) file
```json
{
    "host": "localhost",
    "user": "usernamehere",
    "password": "passwordhere",
    "database": "databasename"
}
```
- Username and password must be created in mysql consol

- You can customize localhost port in index.ts file on line 9

#### After that, just run index.js file on folder [dist](https://github.com/PatrickLeonardo/abstraction-crud/tree/main/dist)
```cmd
node dist/index.js
```

#### If any .ts file is modified just use the yarn build command and run again
```cmd
yarn build
```
