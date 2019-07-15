const path = require('path');

const DATA_PATH = '/data/mock-data.json';
const getData = (request, response) => {
	response.status(200).sendFile(path.join(__dirname, DATA_PATH));
};

module.exports = getData;
