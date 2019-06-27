// Server - Configuration
'use strict';

const {join} = require('path');
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();
const serviceWorker = (app) => (req, res) => {
  const filePath = join(__dirname, '.next', 'service-worker.js');

  app.serveStatic(req, res, filePath);
};

app.prepare()
    .then(() => {
      const server = express();

      // Service Worker
      server.get('/service-worker.js', serviceWorker(app));
      // Custom route
      // URL SEF server rendering mapping
      // TODO: Change with parameters and real paths
      server.get('/:id', (req, res) => {
        const page = '/';
        // TODO: Change with parameters and real paths
        const parameters = {id: req.params.id};

        app.render(req, res, page, parameters);
      });
      // General
      server.get('*', (req, res) => {
        return handle(req, res);
      });
      server.listen(3000, (err) => {
        if (err) throw err;

        console.log('> Ready on http://localhost:3000');
      });
    })
    .catch((ex) => {
      console.error(ex.stack);
      process.exit(1);
    });
