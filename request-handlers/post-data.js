const path = require('path');
const fs = require('fs');

const DATA_PATH = '/data/mock-data.json';
const ERROR_SAVING_DATA = 'Error saving data!';
const JSON_INDENTATION_SIZE = 4;

const postData = (request, response) => {
	const data = JSON.stringify(request.body, null, JSON_INDENTATION_SIZE);

	fs.writeFile(path.join(__dirname, DATA_PATH), data, (err) => {
		if (err) {
			response.status(500).send(ERROR_SAVING_DATA);
		} else {
			response.status(200).send();
		}
	});
};

module.exports = postData;
