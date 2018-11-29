// Criar todas as chamadas JS que serão utilizadas em várias páginas no projeto

//===============================================
//                  Add class active no scrollTop
//===============================================
$(window).on('scroll', function () {
	$('section').each(function () {
		var scrollTop = $(window).scrollTop();
		var elementOffset = $(this).offset().top;
		var distance = (elementOffset - scrollTop);

		if (distance < 200) {
			$(this).addClass('active').change();
		} else {
			$(this).removeClass('active');
		}
	});
});


//===========================================
//                              Ancora Scroll
//===========================================
$('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700);
            return false;
        }
    }
});
