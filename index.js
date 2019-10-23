const express = require('express');
const path = require('path');
const { config, engine } = require('express-edge');
const mongoose = require('mongoose');
const Post = require('./database/models/Post');
const bodyParser = require('body-parser');

// konek database atlas
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dyo:dyo123@bloggernode-udx5f.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(err => {
  if (!err) {
    console.log('Database mongodb CONNECTED!')
  }

  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const app = express();

// setup body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// create static page
app.use(express.static('public'));

// setup view engine express-edge
app.use(engine);
app.set('views', `${__dirname}/views`);

// create route pages > index
app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, 'pages/index.html'));
  res.render('index', {
    pageTitle: 'Project Blog'
  });
});

// create route pages > about
app.get('/about', (req, res) => {
  //res.sendFile(path.resolve(__dirname, "pages/about.html"));
  res.render('about');
});

// create route pages > post
app.get('/post', (req, res) => {
  //res.sendFile(path.resolve(__dirname, "pages/post.html"));
  res.render('post');
});

// create route pages > contact
app.get('/contact', (req, res) => {
  //res.sendFile(path.resolve(__dirname, "pages/contact.html"));
  res.render('contact');
});

// route pages > create
app.get('/posts/new', (req, res) => {
  res.render('create')
});

// route post method POST
app.post('/posts/store', (req, res) => {
  // console.log(req.body);
  // res.send('cobain post');

  Post.create(req.body, (error, post) => {
    res.redirect('/');
  });




});










// start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`)
}); 