const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { HelmetProvider } = require('react-helmet-async');
const { StaticRouter } = require('react-router-dom');

const App = require('./src/App').default;
const helmetContext = {};

const app = express();
app.use(express.static('build'));

app.get('*', (req, res) => {
  const jsx = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const html = ReactDOMServer.renderToString(jsx);
  const { helmet } = helmetContext;

  res.send(`
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${html}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});

exports.handler = async (event, context) => {
  const { path } = event;
  const method = app[path] ? path : '*';
  const req = {
    ...event,
    method,
  };

  const res = {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    send: (body) => ({
      body,
    }),
  };

  const { body } = app[method](req, res);
  return {
    statusCode: 200,
    body,
  };
};
