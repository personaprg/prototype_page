// main.js
document.addEventListener('DOMContentLoaded', function () {
    const dataForm = document.getElementById('dataForm');
    const dataInput = document.getElementById('dataInput');
    const displayData = document.getElementById('displayData');

    dataForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const inputData = dataInput.value;

        // 서버에 데이터 전송 (Ajax 또는 Fetch API 사용)
        fetch('/submitData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: inputData }),
        })
        .then(response => response.json())
        .then(data => {
            // 데이터를 표시할 div 업데이트
            displayData.innerHTML = `<p>${data.message}</p>`;
        })
        .catch(error => console.error('Error:', error));
    });
});
