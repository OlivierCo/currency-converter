# Simple currency converter

This currency converter uses the https://www.ecb.europa.eu daily exchange rate.

# Usage

In order to launch the gateway and the client please make sure you are at the root of the project:

## Install all the dependencies

- Once at the root of the project you can simply run:

```
yarn install
or
npm install
```

## Start the gateway & client

- By running this command, it will launch simultaneously the gateway on port `4000` and the client on port `3000`

```
yarn start
or
npm start
```

_PS: you can get the playground by opening `localhost:4000/graphql` in your browsers ;-)_

## Tech Stack

- react
- react-dom
- react-router
- graphql
- apollo-server
- apollo-client
- apollo-cache-inmemory
- apollo-link-http
- emotionjs
- jest
- enzyme
- uuid

Just to name a few.

## Test

- For running test be sure you are at the root of the project and run:

```
yarn test
or
npm test
```

*Note*

> I would have liked to spend more time on writting tests.