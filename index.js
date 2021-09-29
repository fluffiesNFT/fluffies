//get required libraries

const requestListener = function (req, res) {
	console.log(req, res)
}

//initialize simple http server on port heroku supplies
const server = http.createServer(requestListener)
server.listen(process.env.PORT)