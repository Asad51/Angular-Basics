var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
const PORT = 3000;

var app = express();

app.use(bodyParser.json());
app.use(cors());
app.get("/", function(req, res, next) {
	res.send('Hello Angular');
});

app.post('/enroll', function(req, res, next) {
	console.log(req.body);
	res.status(200).send({ "message": "Data received" });
});

app.listen(PORT, function(err) {
	if (err) {
		console.log("Error occured on server running");
	} else {
		console.log("Server running at port " + PORT);
	}
});
