//get required libraries
const http = require('http')

const requestListener = function (req, res) {
	if(req.url.length < 2) {
		let read = fs.createReadStream("index.html")
		read.pipe(res)
	} else {
		let read = fs.createReadStream(__dirname + req.url)
		read.pipe(res)
	}
}

//initialize simple http server on port heroku supplies
const server = http.createServer(requestListener)
server.listen(process.env.PORT)
