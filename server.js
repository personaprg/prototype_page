const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// html 파일 서빙
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/main.html'));
});

// json 데이터 처리
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

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
