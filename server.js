// server.js

const express = require('express');
const fs = require('fs');
const crypto = require('crypto');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/login', (req, res) => {
    console.log('Received login request:', req.body);

    // Read the encrypted data from data.json
    const encryptedData = fs.readFileSync('public/data.json', 'utf-8');

    // Decrypt the data using a secret key (you should use a more secure method in a real application)
    const decipher = crypto.createDecipher('aes-256-cbc', 'secret-key');
    let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
    decryptedData += decipher.final('utf-8');

    // Parse the decrypted JSON data
    const userData = JSON.parse(decryptedData);

    // Check if the provided credentials match
    if (req.body.id === userData.id && req.body.pass === userData.pass) {
        // 로그인 성공 시 '/page'로 리다이렉션
        res.redirect('/public/page.html');
    } else {
        console.log('로그인 실패 - ID 또는 비밀번호가 일치하지 않습니다.');
        res.status(401).send('로그인 실패');
    }
});

// '/page' 루트 추가
app.get('/page', (req, res) => {
    res.sendFile(__dirname + '/public/page.html');
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
