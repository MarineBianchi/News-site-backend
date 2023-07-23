var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

const API_KEY = process.env.API_KEY;

// route GET : recupérer les articles de l'API

router.get('/articles', (req, res) => {
  fetch(`https://newsapi.org/v2/everything?sources=the-verge&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    });
});

module.exports = router;
