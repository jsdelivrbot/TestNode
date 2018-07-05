const express = require("express")
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.post('/topla', function(req,res){
  var value = parseInt(req.query.value1) + parseInt(req.query.value2);
  var bodySend = {}
  if(value){
       bodySend = {
        "status": 200,
        "data": {
          "işlem"  "Toplama",
          "Değer 1": parseInt(req.query.value1),
          "Değer 2": parseInt(req.query.value2),
          "sonuc": value
        }
      }
  }
  else{
     bodySend = {
      "status": 400,
      "error": "Bad request"
    }
  }
  res.status(200).send(bodySend)

})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
