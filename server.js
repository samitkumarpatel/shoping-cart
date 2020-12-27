const app = require('./api/api.js')
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})