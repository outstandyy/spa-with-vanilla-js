const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'frontend', 'static')))

app.get('/*', (req, res) => {
	res.sendFile(path.resolve('frontend', 'index.html'));
});

app.listen(5001, () => console.log('server running...'));
