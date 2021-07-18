import express from 'express';
import path from 'path'
// import bodyParser from 'body-parser';

const app = express();
app.use(express.static(path.join(__dirname, '../build')))
// app.use(bodyParer.json())   // Adds a body attribute to the responses

app.get('/hello', (req, res) => res.send("Hello") )
app.get('/check', (req, res) => res.status(200).send("ok") )
app.get('*', (resq, res) => {
    // All requestthat are called by any of or other api routes should be passed onto our app
    res.sendFile(path.join(__dirname + '/build.index.html'))
})
app.listen(8000, () => console.log("Listening on port 8000"))