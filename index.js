const express = require('express');
const path = require('path');
const { config, engine } = require('express-edge');

const app = express();

// create static page
app.use(express.static('public'));

// setup view engine express-edge
app.use(engine);
app.set('views', `${__dirname}/views`);

// create route pages > index.html
app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'pages/index.html'));
  res.render('index', {
    pageTitle: 'Project Blog'
  });
});

// create route pages > about.html
app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, "pages/about.html"));
  res.render('about');
});

// create route pages > post.html
app.get('/post', (req, res) => {
  //res.sendFile(path.resolve(__dirname, "pages/post.html"));
  res.render('post');
});

// create route pages > contact.html
app.get('/contact', (req, res) => {
  //res.sendFile(path.resolve(__dirname, "pages/contact.html"));
  res.render('contact');
});










// start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
}); 