ShoutBux
=====================

## Program Prequisites

  * NodeJS
  * ExpressJS
  * MongoDB
  * Redis


## Architecture Diagram

![alt text](https://raw.githubusercontent.com/aubrian-halili/shout-out/development/public/images/Architecture.png "Architecture Diagram")

## API Diagram

![alt text](https://raw.githubusercontent.com/aubrian-halili/shout-out/development/public/images/API.png "API Diagram")

## Installation

```bash
$ git clone https://github.com/aubrian-halili/shout-out.git
$ npm install
```

## Start the Application

```bash
$ npm start
```

## MongoDB Setup
  Update the config file for MongoDB connection which is located in this path:

```bash
$ cd /app_dir/server/config.js
```
  Example values:
```
mongo: {
  uri: 'mongodb://192.168.99.100:27017/shout-out'
}
```

## Redis Setup
  Update the config file for Redis connection which is located in this path:

```bash
$ cd /app_dir/server/config.js
```
  Example values:
```
redis: {
  host: '192.168.99.100',
  port: '6379'
}
```

## Features

  * Users can post "shouts".
  * A “shout” should contain 32 chars max.
  * “Shouts” are sorted by date posted/edited.
  * Have a simple login feature.
  * Authorized users can post, edit, delete a “shout” to their own timeline.
  * Users may follow other users. Only users that follow the other can see each others timeline.
  * Timelines should update realtime. (**Note:** Still in development)

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## User Account
  Here is the list of Users with username and password:

  A backup of MongoDB Collection is included in this repository. Path for the directory:

```bash
$ cd /app_dir/db-backup
```

| Name              | Username  | Password  |
| ----------------- | --------- | --------- |
| Shelby Purdie     | shelby    | shelby    |
| Gabriele Linares  | gabriele  | gabriele  |
| Martine Ruggeri   | martine   | martine   |
| Elisha Ribeiro    | elisha    | elisha    |
| Emmaline Harms    | emmaline  | emmaline  |
| Shanice Mcnulty   | shanice   | shanice   |
| Alfredo Atkin     | alfredo   | alfredo   |
| Tad Paulk         | tad       | tad       |
| Jerilyn Awong     | jerilyn   | jerilyn   |
| Modesta Juergens  | modesta   | modesta   |

## License

  [MIT](LICENSE)
