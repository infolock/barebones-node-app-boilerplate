# Barebones Node App Boilerplate

This is just a simple barebones/boilerplate NodeJS Server to quickly get the things up and going.  The desire is to have _just enough_ to get the server up and going for web development.  Nothing more... nothing less.

## Features
- Same GET/POST Handler
- Webpack
	- Hot Module Reloading
- Babel
	- Polyfills
- isomorphic fetch

> See the `package.json` for more information on what is included.

## Requirements
- `node` 8+
- `npm` 5.5+

## Installation
- `npm install`

## Starting
- `npm run start`

# Breaking it Down
- runs on Port `3000` by default (`http`)
- `/src` - where the UI things go
	- `/src/index.js` is the primary entry source
	- additional folders created but not necessary.  this is just my own personal preference - feel free to redo it however ya want
- `/config` - holds the `webpack` dev server config
- `/data` - just a mock data store for use with the `GET`/`POST` handlers
- `/request-handlers` - sample `get` and `post` handlers for returning some mock data
