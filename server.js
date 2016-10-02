let express = require('express');
let parser = require('body-parser');
let app = express();
let path = require('path');

app.use('/', express.static('public'));

app.use(parser.json());
app.use('/libs', express.static('node_modules'));

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});
