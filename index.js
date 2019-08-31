const express = require('express');
const path = require('path');

const app = express();

// create static page
app.use(express.static('public'));

// create route pages > index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));
});








// start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
}); 