## Description

This project uses [Nest](https://github.com/nestjs/nest) TypeScript framework.

## Prerequisites

- [Node v18.2.0](https://nodejs.org/en/download) 
- [Docker Compose](https://docs.docker.com/compose/install)

## Installation

```bash
$ npm install
```

## Running the app

To run database
```bash
$ docker-compose -f docker-compose.yml up database
```

To run the webserver 
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Request documentation

Some example requests could be found this this [Postman documentation](https://documenter.getpostman.com/view/8585549/VUjLK6Lu)