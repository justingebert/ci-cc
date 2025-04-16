# Coding Challenge
- Frontend Angular
- Backend Express

## how to run
- please use node 22.13.0
- run `npm install` in the root folder

## Inital Thoughts
- Create a monorepo with both frontend and backend
- use workspaces to separate the two (usally I would use nx but I havent used it in while and dont want to waste time on setup)

## Process
### setup
- init root with npm
- add gitignore preset from vscode
- create frontend and backend folders
- i will start with the backend
### backend
- create a new express app
- i will use ts-node since it its easier to work with for development - for prod a build step will be needed