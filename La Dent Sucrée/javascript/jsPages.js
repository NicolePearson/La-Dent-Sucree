document.addEventListener('DOMContentLoaded', principale);

function principale() {
    
    /***Menu Burger***/
    /***jQuery***/
    $(".menu-btn").click(menuApparaître);
    
}

function menuApparaître() {
    /***jQuery***/
    $(".menu-btn").toggleClass("disBtn");
    $(".cross-btn").toggleClass("enCross");
    $('.menu-panel').toggleClass('showPanel');
}