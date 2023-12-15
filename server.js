const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// main 폴더의 main.html 서빙
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main', 'main.html'));
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});