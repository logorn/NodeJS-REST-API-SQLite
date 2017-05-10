# NodeJS REST API SQLite

This project is a proof of concept (POC).  
It's purpose is to demonstrate an implementation of a NodeJS REST API using SQLite as a database (sqlite.db).   
The code is written in ES6 and uses Promises.

## Installation :

1. Clone this repository : `git clone https://github.com/romwaldtff/NodeJS-REST-API-SQLite.git`  
2. Then install its dependencies : `npm install`

## Requirements :

- [Git](https://git-scm.com/) if you want to clone this repository.
- [NodeJS](https://nodejs.org/en/) to run the application.
- [Npm](https://www.npmjs.com/) to install dependencies (see the full list below at "Dependencies").
- [Postman](https://www.getpostman.com/) to test the API.

## Getting started :

1. Install this application (See Installation).
2. Start the server with : `node index.js`
3. Connect Postman to the API at : `http://localhost:3000`
4. Try the different routes of the API (For more details, see the [documentation](https://github.com/romwaldtff/NodeJS-REST-API-SQLite/wiki)).

Alternatively, you can use `node index.js YOUR_PORT_NUMBER` to start the server with a specific port.  

## Dependencies (installed via `npm install`)

- [Body-parser](https://www.npmjs.com/package/body-parser), a Node.js body parsing middleware.
- [Ejs](https://www.npmjs.com/package/ejs) embedded JavaScript templates.
- [Express](https://www.npmjs.com/package/express), a fast and minimalist web framework for node.
- [Sqlite](https://www.npmjs.com/package/sqlite), a wrapper library that adds ES6 promises and SQL-based migrations API to [sqlite3](https://www.npmjs.com/package/sqlite3)*.
- [Bluebird](https://www.npmjs.com/package/bluebird) promise library.

## Credits

- Made by [Romuald Tuffreau](https://github.com/romwaldtff).
- [Laurent Guerin](https://github.com/l-gu), creator of [Telosys Tools](https://sites.google.com/site/telosystools/).

## License

This project uses the [LGPL v3 License](https://www.gnu.org/licenses/lgpl-3.0.en.html) (See the LICENSE file in this repository).