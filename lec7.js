const http = require('http')

http.createServer((req, resp) => {
    resp.write("<h1>Server created</h1>")
    resp.end()
}).listen(4500)