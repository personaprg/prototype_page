const fs = require('fs');
const path = require('path');

const locations = [
    "서울", "부산", "대구", "인천", "광주",
    "대전", "울산", "세종", "경기", "강원",
    "충북", "충남", "전북", "전남", "경북", "경남", "제주",
    "마산시" 
];

const publicFolderPath = path.join(__dirname, 'public');

// Create public folder if it doesn't exist
if (!fs.existsSync(publicFolderPath)) {
    fs.mkdirSync(publicFolderPath);
}

// Loop through locations and create folders and HTML files
locations.forEach(location => {
    const locationFolderPath = path.join(publicFolderPath, location);
    const htmlFilePath = path.join(locationFolderPath, `${location}.html`);

    // Create location folder if it doesn't exist
    if (!fs.existsSync(locationFolderPath)) {
        fs.mkdirSync(locationFolderPath);
    }

    // Create HTML file with location information
    const htmlContent = `<html><head><title>${location} 정보</title></head><body><h1>${location}의 정보</h1></body></html>`;
    fs.writeFileSync(htmlFilePath, htmlContent);

    console.log(`Created folder and HTML file for ${location}`);
});

console.log('Process completed.');
