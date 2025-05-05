const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use('/html', express.static(path.join(__dirname, 'html')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/index.html'))
})

app.get('/html/ice', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/ice.html'))
})
app.get('/html/diesel', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/diesel.html'))
})
app.get('/html/engine_oil', (req, res) => {
    res.sendFile(path.join(__dirname, 'html/engine_oil.html'))
})


  
app.listen(port,'0.0.0.0', () => {
    console.log(`Example app listening on port ${port}`)
})