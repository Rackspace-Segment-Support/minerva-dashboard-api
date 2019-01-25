# Minerva Dashboard Api
Custom Dashboard API for Rackspace Intelligence

## Getting Started

Ensure you have the following dependencies setup:

1. Node & NPM
2. Docker

To get started simply:

Install dependencies

```
> npm install
```

After that you will need to get a MySQL docker instance going.
We leverage Docker for this so you can just run

```
> docker-compose -f docker-compose-mysql.yml up -d
```

with that setup you will be able to start scaffolding the database.

```
> npm run db:create
> npm run db:migrate
> npm run db:sync
```

Now you will be able to run the application 

```
> npm start
```

## Sequelize-CLI

For creating new models and migrations we can use the sequelize-cli

```
> ./node_modules/.bin/sequelize model:generate --name <name of the model> --attributes <attr name>:<data type>, <attr name>:<data type>
```

```
> ./node_modules/.bin/sequelize migration:generate --name <name of migration>
```


## Understanding the API

### GET /dashboard

Will return all dashboard records

Response:

200

```
[
  {
    "id": 1,
    "name": "test",
    "description": "test",
    "userId": 123,
    "createdAt": "2019-01-24T19:03:56.000Z",
    "updatedAt": "2019-01-24T19:03:56.000Z"
  },
  {
    "id": 2,
    "name": "testing",
    "description": "just a simple test",
    "userId": 123,
    "createdAt": "2019-01-24T20:18:24.000Z",
    "updatedAt": "2019-01-24T20:32:36.000Z"
  },
  {
    "id": 3,
    "name": "We tested",
    "description": "It was successful",
    "userId": 123,
    "createdAt": "2019-01-24T20:21:31.000Z",
    "updatedAt": "2019-01-24T20:21:31.000Z"
  }
]
```

### GET /dashboard/:id

Returns a single instance of a dashboard

Expects: a slug paramater `id`

Response:

200

```
{
  "id": 1,
  "name": "testing",
  "userId": "100",
  "description": "just a test",
  "components": [
    {
      "id": 1,
      "name": "testing",
      "description": "just a test"
    }
  ],
  "createdAt": "2019-01-25T17:33:02.000Z",
  "updatedAt": "2019-01-25T18:37:12.000Z"
}
```

### POST /dashboard

Creates an instance of a dashboard based on the recieved JSON Body

Expects in the request body:

```
{
    "name": "testing", 
    "description": "just a simple test",
    "userId": 123
}
```

Response:

201 created.

### PUT /dashboard/:id

Creates an instance of a dashboard based on the recieved JSON Body

Expects in the request body and slug paramater `id`:

```
{
    "name": "testing", 
    "description": "just a simple test",
    "userId": 123
}
```

Response:

202 updated.

### DELETE /dashboard/:id

Deletes an instance of a dashboard

Expects slug paramater `id`

Response: 

202 deleted.

### GET /component

Will return all component records

Response:

200

```
[
  {
    "id": 1,
    "name": "test",
    "description": "test",
    "createdAt": "2019-01-24T19:03:56.000Z",
    "updatedAt": "2019-01-24T19:03:56.000Z"
  },
  {
    "id": 2,
    "name": "testing",
    "description": "just a simple test",
    "createdAt": "2019-01-24T20:18:24.000Z",
    "updatedAt": "2019-01-24T20:32:36.000Z"
  },
  {
    "id": 3,
    "name": "We tested",
    "description": "It was successful",
    "createdAt": "2019-01-24T20:21:31.000Z",
    "updatedAt": "2019-01-24T20:21:31.000Z"
  }
]
```

### GET /component/:id

Returns a single instance of a component

Expects: a slug paramater `id`

Response:

200

```
{
  "id": 1,
  "name": "test",
  "description": "test",
  "createdAt": "2019-01-24T19:03:56.000Z",
  "updatedAt": "2019-01-24T19:03:56.000Z"
}
```

### POST /component

Creates an instance of a component based on the recieved JSON Body

Expects in the request body:

```
{
    "name": "testing", 
    "description": "just a simple test"
}
```

Response:

201 created.

### PUT /component/:id

Creates an instance of a component based on the recieved JSON Body

Expects in the request body and slug paramater `id`:

```
{
    "name": "testing", 
    "description": "just a simple test"
}
```

Response:

202 updated.

### PUT /component/:id/dashboard/:dashboardId

Associates a component to a dashboard

Expects `:id` and `:dashboardId` as slug paramaters

Response:

202 updated.

### DELETE /component/:id

Deletes an instance of a component

Expects slug paramater `id`

Response: 

202 deleted.
