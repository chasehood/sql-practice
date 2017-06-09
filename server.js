var express = require('express')
var massive = require('massive')
var bodyParser = require('body-parser')


var app = express()
app.use(bodyParser.json()) 

massive({
    host:'localhost',
    port: 5432,
    database: 'massive_demo'
}).then(function(db){
    app.set('db', db)
})
var controller = require('./productsCtrl.js')


app.get('/products', controller.getAll)
app.post('/products', controller.create)
app.get('/products/:id', controller.getOne)
app.put('/products', controller.update)
app.delete('/products', controller.delete)

app.listen(3000)