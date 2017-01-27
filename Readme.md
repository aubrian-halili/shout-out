ShoutBux
=====================

## Program requisites

  * NodeJS
  * ExpressJS
  * MongoDB
  * Redis

## Installation

```bash
$ git clone https://github.com/aubrian-halili/shout-out.git
$ npm install
```

## Mongo Setup
  Update the config file located in this path:

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
  Update the config file located in this path:

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
## License

  [MIT](LICENSE)
