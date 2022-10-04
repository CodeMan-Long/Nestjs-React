## Description

Statistics backend application written by Nest.js

## Installation

```bash
$ npm install
```
Replace the values in .env.development with yours to run the app in development mode.
Copy .env.development to .env and replace the values with yours to run the app in production mode.

## Migration

```bash
# development
$ npm run migrate:dev

# production
$ npm run migrate
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

The app will be running on PORT 3000.

## API documentation

If you run the app, you can see the API swagger documentation in http://localhost:3000/docs
