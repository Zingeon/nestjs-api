# Install and Run

```sh
git clone https://github.com/Zingeon/nestjs-api.git
cd nestjs-api
npm install
npm install knex -g
```

## Configure your `knexfile.js`

```sh
...
    connection: {
      filename: 'postgres://localhost/your_database'
    }
...
```
OR
```sh
...
    connection: {
      host : '127.0.0.1',
      user : 'your_database_user',
      password : 'your_database_password',
      database : 'your_database'
    }
...
```
## Run migrations and start the server:
```sh
knex migrate:latest
npm run start:dev
```

# Create Users Endpoint

```sh

POST /users/

```
## Request Parameters

`email` (string) - user's email  <br/>
`nickname` (string) - user's nickname   <br/>
`firstName` (string) - user's first name <br/>
`lastName` (string) - user's last name

## Response

```sh

{
    "statusCode": 201,
    "id": 2,
    "createdAt": "2020-04-29T19:13:00.556Z"
}

```

# Create Users Comment Endpoint

```sh

POST /users/:id/comments

```
## Request Parameters

`comment` (string) - comment  <br/>

## Response

```sh

{
    "statusCode": 201,
    "id": 6,
    "createdAt": "2020-04-29T19:10:17.888Z"
}

```