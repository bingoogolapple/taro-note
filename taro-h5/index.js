var express = require('express')
var app = express()
app.get('/taro-h5', function(req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})
app.use(express.static('dist'))
app.listen(8081, function() {
    console.log('服务已启动')
})