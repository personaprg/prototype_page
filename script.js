// 서버에 로그인 요청 보내기
function submitLogin() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
  })
  .then(response => response.json())
  .then(data => {
      if (data.isAdmin) {
          alert('관리자로 로그인되었습니다.');
          // 여기에 관리자 모드로 전환하는 로직 추가
      } else {
          alert('아이디 또는 비밀번호가 잘못되었습니다.');
      }
  })
  .catch((error) => {
      console.error('Error:', error);
  });
}

// 주제 등록
function submitTopic() {
  // 관리자 모드에서만 주제 등록 가능한 로직 추가
  const topic = document.getElementById('topic').value;
  // 주제 등록 로직 추가
}

// 뎃글 등록
function submitComment() {
  // 관리자 모드에서만 뎃글 등록 가능한 로직 추가
  const comment = document.getElementById('comment').value;
  // 뎃글 등록 로직 추가
}
