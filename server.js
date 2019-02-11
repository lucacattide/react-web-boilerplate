// Server - Configurazione
'use strict';

const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
      const server = express();

      // Route personalizzata
      // Effettua il mapping per il server rendering degli URL SEF
      // TODO: Sostituire con path e parametri reali
      server.get('/:id', (req, res) => {
        const pagina = '/';
        // TODO: Sostituire con parametri reali
        const parametri = {id: req.params.id};

        app.render(req, res, pagina, parametri);
      });
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
