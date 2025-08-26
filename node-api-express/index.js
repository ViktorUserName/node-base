import http from 'node:http';
import 'dotenv/config'
// import { url } from 'node:url'


const server = http.createServer( async (req, res) => {
    if (req.url === "/" && req.method === "GET"){
        res.writeHead(200, {"content-type": "application/json"})
        res.write(JSON.stringify({message: "hello"}))

        res.end()
        return
    }

    res.writeHead(404, {"content-type": "application/json"})
    res.end(JSON.stringify({message: "error 404 no data"}))
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`server on ${PORT}`)
})