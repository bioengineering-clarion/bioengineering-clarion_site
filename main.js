$(document).ready(function(){
	$('.main-nav .main-nav__link').mPageScroll2id({
		offset: 50
		});// Плавный скролл привязан к ссылкам
		
		$('.main-nav__icon').on('click', function() {
			$(this).closest('.main-nav')
				.toggleClass('main-nav_state_open');
		});
		
		$('.main-nav__link').on('click', function() {
			// do something

			$(this).closest('.main-nav')
				.removeClass('main-nav_state_open');
		});
});
