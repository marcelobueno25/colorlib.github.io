$(document).ready(function(){
    $('.nav-icon').click(function(){
        $('.nav-list').toggleClass('active');
    })
})

$(window).scroll(function () {
    if (($(this).scrollTop() > 50) || ($(this).scrollTop() > 50)) /*height in pixels when the navbar becomes non opaque*/ {
        $('.nav-opaque').addClass('opaque');
    } else {
        $('.nav-opaque').removeClass('opaque');
    }
});