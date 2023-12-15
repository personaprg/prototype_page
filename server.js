const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// main 폴더의 main.html 서빙
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'main.html'));
});