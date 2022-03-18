const http = require('http')
const io = require("socket.io")
const fs = require('fs')

const httpServer = http.Server((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  })
  response.end(fs.readFileSync('./index.html'))
})

const ioServer = new io.Server(httpServer)
ioServer.on('connection', conn => {
  conn.on('su_kien', d => {
    ioServer.emit('su_kien_tu_server', d)
  })
})

httpServer.listen(80)
