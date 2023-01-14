const express = require('express')
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 3050;

app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/data', function (req, res) {
    var data = [
        {id:17,name:"Ahmad"},
        {id:17,name:"Ahmad"},
        {id:17,name:"Ahmad"}
    ]
    res.send(data)
  })
app.listen(PORT)