# Serverless Test

[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)

### Local Installation

Requires [Node.js](https://nodejs.org/) and [Serverles Framework](https://www.serverless.com/) to run.

Install the dependencies and devDependencies.
```sh
$ npm i
```
Install local dynamodb
```sh
$ sls dynamodb install
```

Start local server
```sh
$ sls offline start
```

### Run tests
```sh
$ sls invoke test
```
Code coverage
```sh
$ npx nyc sls invoke test
```

### AWS deploy
```sh
$ sls deploy
```