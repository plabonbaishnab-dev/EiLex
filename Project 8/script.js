$(document).ready(function(){
        $('.carousel').carousel();
    });
function changeBG(bg,title){
    const banner=document.querySelector('.banner');
    const contents=document.querySelectorAll('.content');
    banner.style.background=`url("./assets/${bg}")`;
    banner.style.backgroundSize='cover';
    banner.style.backgroundPosition='center';

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)){
            content.classList.add('active');
        }
    });
}