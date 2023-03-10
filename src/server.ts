#!/usr/bin/env node

import app from './index.js'
import http from 'node:http'

const port = process.env.PORT || 3000
app.set('port', port)

const server = http.createServer(app)

const onError = (error: any) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`Port '${port}' requires elevated privileges`)
      process.exit(1)

    case 'EADDRINUSE':
      console.error(`Port '${port}' is already in use`)
      process.exit(1)

    default:
      throw error
  }
}

const onListening = () => console.log(`Listening on port: ${port}`)

server.on('error', onError)
server.on('listening', onListening)
server.listen(port)
