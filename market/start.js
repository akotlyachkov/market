const express = require('express'),
  helmet = require('helmet'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  app = express(),
  server = require('http').createServer(app),
  config = require('./config'),
  adminApp = require('./admin/application'),
  clientApp = require('./client/application'),
  staticApp = require('./static/application');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(compression());

app.use('/admin', adminApp);
app.use('/promo', staticApp);
app.use('/', clientApp);


app.set('port', process.env.PORT || config.system.port || '3000');

server.listen(app.get('port'), function () {
  console.log(`Магаз запущен http://${config.system.domain} порт:${app.get('port')}`);
});
