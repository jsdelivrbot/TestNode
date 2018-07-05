const express = require('express');

const app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(`${__dirname}/public`));

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.post('/topla', (req, res) => {
  const value = parseInt(req.query.value1) + parseInt(req.query.value2);
  let bodySend = {};
  if (value) {
    bodySend = {
      status: 200,
      data: {
        işlem: 'Toplama',
        'Değer 1': parseInt(req.query.value1),
        'Değer 2': parseInt(req.query.value2),
        sonuc: value,
      },
    };
  } else {
    bodySend = {
      status: 400,
      error: 'Bad request',
    };
  }
  res.status(200).send(bodySend);
});

app.listen(app.get('port'), () => {
  console.log(`Node app is running at localhost:${app.get('port')}`);
});
