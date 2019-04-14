$(document).ready(function(){
	$('.main-nav .main-nav__link').mPageScroll2id({
		offset: 50
		});// Плавный скрол привязвн к ссылкам
		
		$('.menu__icon').on('click', function() {
			$(this).closest('.menu')
				.toggleClass('menu_state_open');
		});
		
		$('.main-nav__link').on('click', function() {
			// do something

			$(this).closest('.menu')
				.removeClass('menu_state_open');
		});
});
