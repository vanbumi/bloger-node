const express = require('express');
const path = require('path');

const app = express();

// create static page
app.use(express.static('public'));

// create route pages > index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));
});

// create route pages > about.html
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/about.html"))
});

// create route pages > post.html
app.get('/post', (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/post.html"));
});

// create route pages > contact.html
app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, "pages/contact.html"));
});










// start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
}); 