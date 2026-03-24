document.addEventListener('DOMContentLoaded', () => {
    console.log('プロフィールサイトが正常に読み込まれました。');

    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            // スムーズな遷移や、クリック音などを付けたい場合はここに記述します
        });
    });
});