const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const fs = require('fs');
const bodyParser = require('body-parser');
const devServerConfig = require('./config/devserver.config');
const getData = require('./request-handlers/get-data');
const postData = require('./request-handlers/post-data');

const DATA_RESOURCE_PATH = '/data';
const SRC_PATH = '/src';

webpackDevServer.addDevServerEntrypoints(config, config.devServer);

const compiler = webpack(config);

const server = new webpackDevServer(compiler, {
	...devServerConfig,

	before(app) {
		app.use(bodyParser.json());
		app.use(DATA_RESOURCE_PATH, express.static(__dirname + DATA_RESOURCE_PATH));
		app.use(express.static(__dirname + DATA_RESOURCE_PATH));
		app.use(express.static(__dirname + SRC_PATH));

		app.get(DATA_RESOURCE_PATH, getData);
		app.post(DATA_RESOURCE_PATH, postData);
	}
});

server.listen(3000, function () {
	console.log('Server started && listening on port 3000');
});
