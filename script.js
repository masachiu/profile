document.addEventListener('DOMContentLoaded', () => {
    console.log('プロフィールサイトが正常に読み込まれました。');

    // リンクがクリックされた時の簡易的な処理（必要に応じて拡張できます）
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            // クリック時のアニメーションなど、後からJSで動きをつけたい場合はここに記述します
        });
    });
});