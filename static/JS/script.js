// htmlファイルを完全に読み込んだ後に実行
document.addEventListener('DOMContentLoaded', function() {

    //画面右下のボタン、画面上部に戻る
    window.addEventListener('scroll', ScrollTop);

    function scrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    function ScrollTop() {
        const button = document.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    }

    // projectsで表示する
    const projectItems = document.querySelectorAll('.project_item');

    projectItems.forEach((project, index) => {
        const moreButton = project.querySelector('.icon_more');
        const projectContent = project.querySelector('.project_content');
    
        moreButton.addEventListener('click', () => {
            if (projectContent.style.maxHeight === '0px' && !moreButton.classList.contains('NG')) {
                projectContent.style.display = 'block';
                moreButton.classList.add('is_open');
                moreButton.classList.remove('is_close');
                projectContent.style.maxHeight = projectContent.scrollHeight + 'px';
            } else {
                projectContent.style.maxHeight = '0px';
                moreButton.classList.add('is_close');
                moreButton.classList.remove('is_open');
            }
        });
    });
});