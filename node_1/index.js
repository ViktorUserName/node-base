#!/usr/bin/env node
import http from 'node:http'

const tweets = ['hi', 'hello', 'hey', 'yo', 'sup', 'hola'];
function doOnInComing(incomingData, functionToSetIncomingData) {
    const tweetNeeded = incomingData.url.slice(8)-1
    functionToSetIncomingData.end(tweets[tweetNeeded]);
}

const server = http.createServer(doOnInComing)
server.listen(5000);