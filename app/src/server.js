import sirv from 'sirv';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

var express = require("express");

var app = express();

const axios = require('axios');

const DATABASE_URL = "http://127.0.0.1:5000/multichoice";

// axios.get(DATABASE_URL)
// 	.then(function(res) {
// 		console.log(res.data[0].tags)
// 	})


// app.get("/", function(req, res) {
// 	axios.get(DATABASE_URL)
// 		.then(function (response) {
// 		// handle success
//     	res.json(response.data)
//   })
// })


var server = app.listen(PORT, err => {
	if (err) console.log("error", err);
	var address = server.address();
	var host = address.address;
	var port = address.port;
	console.log("Listening at http://%s:%s", host, port);
});




app.use(compression({threshold: 0}), sirv("static", {dev}), sapper.middleware());

