
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 防止表單提交

    // 簡單的表單驗證
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if (name && email && message) {
        // 顯示感謝信息
        document.getElementById('thankYouMessage').style.display = 'block';

        // 清空表單
        document.getElementById('contactForm').reset();
    } else {
        alert('你並沒有填寫完成');
    }
});