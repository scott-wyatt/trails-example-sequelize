# Trails Example Sequelize
A simple getting started with Trails that uses Express and Sequelize.


## Installation
Clone this Repo

```sh
$ npm install
```

## Demo

Start your app:
```sh
$ npm start
```
This will start your app at localhost:3000

Open Postman and make a POST request to `localhost:3000/api/v1/user`
Make the request body json:
```json
{
	"username": "scott",
	"email": "scott@example.com"
}
```

You should get a response like:
```json
{
    "id": 1,
    "username": "scott",
    "email": "scott@example.com",
    "updated_at": "2017-10-19T20:37:23.742Z",
    "created_at": "2017-10-19T20:37:23.742Z",
    "token": "user_ry2batUpZ"
}
```
Get this user by making a GET request to `localhost:3000/api/v1/user/1`

Update this user by making a PUT request to `localhost:3000/api/v1/user/1`
Make the request body json:
```json
{
	"username": "scottie",
	"email": "scott@newexample.com"
}
```

Get this updated user by making a GET request to `localhost:3000/api/v1/user/1`

You should get a response like:
```json
{
    "id": 1,
    "username": "scottie",
    "email": "scottnew@example.com",
    "updated_at": "2017-10-19T20:37:23.742Z",
    "created_at": "2017-10-19T20:37:23.742Z",
    "token": "user_ry2batUpZ"
}
```
