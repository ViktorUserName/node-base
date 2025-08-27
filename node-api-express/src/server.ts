import express from 'express';
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'


const app = express();
app.use(express.static("static"));

const __filename = fileURLToPath(import.meta.url)       
const __dirname = dirname(__filename)
const STATIC_PATH = join(__dirname, '../static')

app.get("/", (req, res) => {
    console.log('express works');
    res.status(200)
    res.sendFile(join(STATIC_PATH, "index.html"));
})

export default app;