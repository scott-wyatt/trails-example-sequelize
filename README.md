# Trails Example Sequelize
A simple getting started with Trails that uses Express and Sequelize.
This example of performing a CRUD operation.
It also contains a Many to Many association, and a lifecycle hook just to demonstrate what those look like.

## Installation (Requires Node.js to be installed)
Clone this Repo to your computer and open it's directory in your terminal. Then run:

```sh
$ npm install
```

## Demo
Let's start the app, add a user, update a user, get the user, and then destroy the user.

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

Get all users by making a GET request to `localhost:3000/api/v1/user`

This will return an array of all the users:
```json
[{
    "id": 1,
    "username": "scott",
    "email": "scott@example.com",
    "updated_at": "2017-10-19T20:37:23.742Z",
    "created_at": "2017-10-19T20:37:23.742Z",
    "token": "user_ry2batUpZ"
}]
```

Let's get this user by making a GET request to `localhost:3000/api/v1/user/1`

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

Destroy this updated user by making a DELTE request to `localhost:3000/api/v1/user/1`

You should get a response like:
```json
{}
```

You have just done a CRUD operation with Sequelize and Trails!
