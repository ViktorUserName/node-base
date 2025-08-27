import express from 'express';
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const STATIC_PATH = join(__dirname, './static')

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("static"));

app.get("/", (req, res) => {
    res.sendFile(path.join(STATIC_PATH, "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});