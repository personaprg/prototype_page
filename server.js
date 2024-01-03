// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');  // 이 부분을 확인하세요.

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/submitData', (req, res) => {
    const inputData = req.body.data;

    // 데이터를 JSON 파일에 저장
    const data = { message: `입력한 데이터: ${inputData}` };
    fs.writeFileSync('data.json', JSON.stringify(data));

    res.json(data);
});

app.use(express.static('public'));

app.get('/getLocations', (req, res) => {
    try {
        const locationData = fs.readFileSync('public/location.json', 'utf8');
        const locations = JSON.parse(locationData);
        res.json(locations);
    } catch (err) {
        console.error('Error reading location.json file', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
