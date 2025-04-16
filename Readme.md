# Coding Challenge
- Frontend Angular
- Backend Express

## How to run
- please use node 18.20.8 or higher
- Terminal: run in the root folder ```npm install```
- Terminal: run ```npm run start``` to start both frontend and backend
- open the browser and navigate to http://localhost:4200

## Inital Thoughts
- Create a monorepo with both frontend and backend
- use workspaces to separate the two (usally I would use nx but I havent used it in while and dont want to waste time on setup)

## Process
### Setup
- init root with npm
- add gitignore preset from vscode
- create frontend and backend folders
- i will start with the backend

---

### Backend
- create a new express app
- i will use ts-node since it its easier to work with for development - for prod a build step will be needed
- create interface for Bug Schema
- bugs will be stored in memory (array) -> db would create ids for lookup so I need to keep track of my own ids for uniqueness
- create post and get
- post validates if needed data is given, creates and stores new bug in array 
- get returns array with all bugs 
- test the endpoints with postman (I used a vscode extension that works like postman)
- add cors to allow frontend to access the backend
#### Problems:
- type problems with express types for v5 (routes return void so I would have to add an empty return after the res - doest seem clean) -> downgrade to v4

---

### Frontend
- create angular app with angular cli
- create Bug Service to handle requests to the backend for adding and getting bugs with httpClient
- create Bug Form and Bug List components with CLI
- form with reactive forms for submitting new bugs
- create some basic styling
- tested in browser and works as expected
#### Problems:
- encountered some compilation errors related to missing imports in standalone components
- list doesnt update when new bug is added -> create a signal and observable to update the list when a new bug is added -> component will subscribe to the observable and update when a new bug is added

---

## Possible Improvements:
- use nx for monorepo management -> share code between frontend and backend (in lib folder) e.g Bug Interface
- make env file for storing base urls 
- add tests
### Backend
- use a database for persisting data
- more typing for requests and responses
- better error handling -> what fields are invalid
### Frontend
- loadingstates
- toast notifications for success and error messages