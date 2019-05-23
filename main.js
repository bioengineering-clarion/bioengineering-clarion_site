$(document).ready(function(){
	

	$('.main-nav .main-nav__link').mPageScroll2id({
		offset: 50
	});// Плавный скролл привязан к ссылкам
		
	$('.main-nav__icon').on('click', function() {
		$(this).closest('.main-nav').toggleClass('main-nav_state_open');
	});
	
	$('.main-nav__link').on('click', function() {
		$(this).closest('.main-nav').removeClass('main-nav_state_open');
	});



	$('.language__item').on('click', function() {
		$('.language__item.active').removeClass('active');
	});
	$('.language__item').on('click', function() {
		$(this).toggleClass('active');
		loadLocal();
		loadLocalLink();
	});

	function loadLocal() {
		var element = document.getElementsByClassName('active')[0];
		var widgetName = element.getAttribute('data-local-name');
		var targetLocal = local[widgetName];
		var localValue = document.getElementsByClassName('local');
		for (var i = 0; i < localValue.length; i++) {
			var key = localValue[i].getAttribute('data-local');
			localValue[i].innerHTML = targetLocal[key];
		}
	}

	function loadLocalLink() {
		var element = document.getElementsByClassName('active')[0];
		var widgetName = element.getAttribute('data-local-name');
		var targetLocalLink = localLink[widgetName];
		var localLinkValue = document.getElementsByClassName('local-link');
		for (var i = 0; i < localLinkValue.length; i++) {
			var key = localLinkValue[i].getAttribute('data-local');
			localLinkValue[i].setAttribute('href',targetLocalLink[key]);
		}
	}
	
	var local = {
		ru: {
			"home-page": "Главная",
			"about-us": "О нас",
			"our-activity": "Наша деятельность",
			"contacts": "Контакты",
			"quote": "\"Я надеюсь, мы с вами пожмем друг другу руки в эпоху, когда победа над возрастом станет реальностью - когда мы сможем наслаждаться необыкновенно долгой жизнью, сохраняя на всем ее протяжении здоровье и силы, когда призрак неизбежной старости рассеется под солнцем вечной молодости.\"",
			"quote-author": "- Обри де Грей - Разработчик концепции",
			"about-us-description": "Bioengineering Clarion — некоммерческая организация, деятельность которой направлена на исследования и распространения информации в области продления жизни.",
			"about-us-concept": "Ознакомьтесь с нашей концепцией, перейдя по ",
			"medium-link": "ссылке.",
			"about-us-telegram": "Подписывайтесь на наш телеграм канал и не забудьте его закрепить вверху, чтобы не пропустить важную информацию. С нами вы сможете узнавать самые интересные открытия о здоровье и продлении жизни.",
			"about-us-social-networks": "Следите за новостями в социальных сетях.",
			"popularization": "Популяризация",
			"popularization text": "Создание благоприятного общественного настроения в отношении борьбы со старением.  Мы планируем агрегировать новости, делать переводы и обзоры наиболее значимых публикаций и выступлений на конференциях. Рассматриваем возможность проводить встречи с докладами и презентациями, освещающими актуальный научный прогресс.",
			"development": "Разработка",
			"development-text": "Мы разрабатываем веб-ресурс и планируем интегрировать в него сервисы, связанные с биомаркерами, медицинской диагностикой и аналитикой активности исследовательских центров.",
			"research": "Исследования",
			"research-text": "Широкая сфера применения глубоких нейронных сетей открывает огромные возможности в исследовании процессов старения. Исследовательскую команду возглавляет Data Science инженер. В ближайшее время мы планируем начать решать реальные задачи, связанные с данными в области биогеронтологии.",
			"contacts-text": "Спасибо, за ваш интерес к Bioengineering Clarion. Вы можете связаться с нами, используя информацию ниже. Чтобы получать последние обновления, присоединяйтесь к нам в социальных сетях.",
			"email-text": "По всем вопросам пишите по адресу"
		},
		ua: {
			"home-page": "Головна",
			"about-us": "Про нас",
			"our-activity": "Наша діяльність",
			"contacts": "Контакти",
			"quote": "\"Я сподіваюся, ми з вами потиснемо один одному руки в епоху, коли перемога над віком стане реальністю - коли ми зможемо насолоджуватися надзвичайно довгим життям, зберігаючи протягом усього нього здоров'я і сили, коли привид неминучої старості розсіється під сонцем вічної молодості.\"",
			"quote-author": "- Обрі де Грей - Розробник концепції",
			"about-us-description": "Bioengineering Clarion — некомерційна організація, діяльність якої спрямована на дослідження і поширення інформації в області продовження життя.",
			"about-us-concept": "Ознайомтеся з нашою концепцією, перейшовши за ",
			"medium-link": "посиланням.",
			"about-us-telegram": "Підписуйтеся на наш телеграм канал і не забудьте його закріпити вгорі, щоб не пропустити важливу інформацію. З нами ви зможете дізнаватися найцікавіші відкриття про здоров'я і продовження життя.",
			"about-us-social-networks": "Слідкуйте за новинами в соціальних мережах.",
			"popularization": "Популяризація",
			"popularization text": "Створення сприятливого суспільного настрою щодо боротьби зі старінням. Ми плануємо агрегувати новини, робити переклади та огляди найбільш важливих публікацій і виступів на конференціях. Розглядаємо можливість проводити зустрічі з доповідями і презентаціями, які висвітлюють актуальний науковий прогрес.",
			"development": "Розробка",
			"development-text": "Ми розробляємо веб-ресурс і плануємо інтегрувати в нього сервіси, пов'язані з біомаркерами, медичною діагностикою та аналітикою активності дослідницьких центрів.",
			"research": "Дослідження",
			"research-text": "Широка сфера застосування глибоких нейронних мереж відкриває величезні можливості в дослідженні процесів старіння. Дослідницьку команду очолює Data Science інженер. Найближчим часом ми плануємо почати вирішувати реальні завдання, пов'язані з даними в області біогеронтологіі.",
			"contacts-text": "Дякуємо, за вашу зацікавленість до Bioengineering Clarion. Ви можете зв'язатися з нами, використовуючи інформацію нижче. Щоб отримувати останні оновлення, приєднуйтесь до нас в соціальних мережах.",
			"email-text": "Зі всіма питаннями пишіть на адресу"
		}
	}
	var localLink = {
		ru: {
			"medium-link": "https://medium.com/@bioengineering.clarion/%D0%B3%D0%BE%D1%80%D0%BD-adf2dc06befe"
		},
		ua: {
			"medium-link": "https://medium.com/@bioengineering.clarion/%D0%B3%D0%BE%D1%80%D0%BD-235420c0408a"
		}
	}
	loadLocal();
	loadLocalLink();

});
