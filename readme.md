# Restful api with Express.js 💻

Basic restful api created as a practice project, it includes a selfhosted swagger documentation, mongo atlas and express conection.

## To get started

```shell
  # Install dependencies
  yarn install
  # Or
  npm istall

  # generate a .env based on the example
  cp .env.example .env
```

After generating the .env file you must configure your mongodb url either from a [local mongodb](https://www.mongodb.com/docs/manual/reference/connection-string/) or a [mongoatlas cluster(Recommended Method)](https://www.mongodb.com/docs/atlas/tutorial/create-new-cluster/)

Then you can run the api using

```shell
  yarn start
  # or
  npm run start
```

To see the swagger documentation you can navigate to http://localhost:8080/api-docs

## **Stack 🔰**

- Express.js
- Bcrypt
- Moongose
- MongoDb (Mongo Atlas)
- JsonWebToken
- Swagger
