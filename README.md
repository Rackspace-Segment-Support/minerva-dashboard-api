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