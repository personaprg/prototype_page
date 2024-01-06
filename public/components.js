// components.js

$(document).ready(function () {
    // location.json에서 데이터 불러와서 버튼 동적 생성
    $.getJSON('/getLocations', function (data) {
        const buttonContainer = $('#buttonContainer');

        data.locations.forEach(function (location) {
            // 각 지역에 따른 가상 좌표 설정 (예시)
            let coordinates = { x: Math.random() * 600, y: Math.random() * 400 };

            const button = $('<button>')
                .text(location)
                .addClass('locationButton')
                .css({ left: coordinates.x, top: coordinates.y })
                .on('click', function () {
                    window.location.href = '/location/' + location.toLowerCase();
                });

            buttonContainer.append(button);
        });
    });
});
