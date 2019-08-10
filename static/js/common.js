$(document).ready(function() {
    let burgerMenu = $('#burgerMenu'),
        menu = $('#menu'),
        menuNav = $('.mainNav'),
        menuWrap = menu.find('.menu__wrap');

    burgerMenu.on('click', function() {
        menu.toggleClass('menu_active');
        menuWrap.toggleClass('menu__wrap_active');
        menuNav.toggleClass('mainNav_active');
        burgerMenu.toggleClass('burgerMenu_active');
    });
});