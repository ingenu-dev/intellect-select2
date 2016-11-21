'use strict';

const express = require('express');
const app = express();
const _ = require('lodash');

app.use('/public', express.static(`${__dirname}/public`));

_(['short', 'medium', 'long', 'invoices', 'device-records']).forEach(page =>
  app.get(`/`, (req, res) => {
      res.sendFile(`/pages/select2-demo.html`, {root: __dirname});
  })
);

app.listen(process.env.PORT || 5000);
console.log('running...');
