require('dotenv').config();
const PORT = process.env.REACT_APP_BACKEND_PORT;
const express = require('express');
const csv = require('csvtojson');

const app = express();

app.get('/api/products', (req, res) => {
	const csvFilePath = './output.csv';

	csv()
		.fromFile(csvFilePath)
		.then(data => {
			res.json(data);
		});
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
