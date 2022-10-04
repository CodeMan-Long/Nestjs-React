# Full stack Nest.js React.js

This application is for saving and displaying statistics to users.

## Backend application

The backend application is written by Nest.js, Typescript, Mikro-ORM, MySQL.
It provides the REST API endpoints and accepts the GET, POST, DELETE http requests.
It uses Mikro-ORM to manage the MySQL database.
POST endpoint accepts the input values and stores them to MySQL database with Mikro-ORM.
GET endpoint accepts the date range and searches the statistics within date range and returns them.
DELETE endpoint deletes all records of statistics table.

## Frontend application

The frontend application is written by React.js, React Context, React Router, Material UI, Typescript.
It uses the React Context to manage the states.
It has 3 pages. Home, View, Save
Home page has the navigation to View, Save pages.
View page displays the statistics within the date range selected by user.
Save page submits the statistic info to backend side.

## Instructions

You can see the installation and running instructions in backend, frontend directory.
