const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 정적 파일 제공
app.use(express.static('public'));

// JSON 데이터 로드
let userData = require('./json.js');

// HTML 페이지 전달
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 로그인 체크 및 관리자 권한 부여
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === userData.admin.username && password === userData.admin.password) {
        res.json({ isAdmin: true });
    } else {
        res.json({ isAdmin: false });
    }
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
