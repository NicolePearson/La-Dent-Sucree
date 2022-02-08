document.addEventListener('DOMContentLoaded', principale);

function principale() {

    /***Effet fade-out du header***/
    window.addEventListener('scroll', disparaître);

    /***Effet texte du premier paragraphe de la page accueil***/
    /***jQuery***/
    let DocumentEffect = $(document);
    DocumentEffect.on('scroll', animer);

    /***Menu Burger***/
    /***jQuery***/
    $(".menu-btn").click(menuApparaître);


}

function disparaître() {

    let headerFade = document.getElementById('fadeOut');
    headerFade.style.opacity = 1 - +window.pageYOffset / 550 + '';
    headerFade.style.top = 1 - +window.pageYOffset + 'px';
    headerFade.style.backgroundPositionY = - +window.pageYOffset / 2 + 'px';
}

function animer() {
    /***jQuery***/
    let effect = $('article.about');
    let aboutEffect = effect.offset().top / 2;
    let DocumentEffect = $(document);

    if (DocumentEffect.scrollTop() > aboutEffect && effect.hasClass('hidden')) {
        effect.removeClass('hidden');
    }
}

function menuApparaître() {
    /***jQuery***/
    $(".menu-btn").toggleClass("disBtn");
    $(".cross-btn").toggleClass("enCross");
    $('.menu-panel').toggleClass('showPanel');
}
