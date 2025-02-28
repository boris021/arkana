function initSwiper() {
	document.querySelectorAll('.swiper-container').forEach(slider => {
		 new Swiper(slider, {
			  slidesPerView: 6, // По умолчанию 4 слайда
			  spaceBetween: 20,
			  loop: true,
			  pagination: {
					el: slider.querySelector('.swiper-pagination'),
					clickable: false,
			  },
			  navigation: {
					nextEl: slider.querySelector('.swiper-button-next'),
					prevEl: slider.querySelector('.swiper-button-prev'),
			  },
			  autoplay: false, // Отключаем автопрокрутку
			  breakpoints: {
					1200: { slidesPerView: 6 }, // Десктоп (4 слайда)
					1024: { slidesPerView: 3 }, // Планшеты (3 слайда)
					768: { slidesPerView: 2 },  // Мобильные (2 слайда)
					480: { slidesPerView: 2 },  // Смартфоны (1 слайд)
					0: { slidesPerView: 2 }     // Если экран совсем маленький (1 слайд)
			  }
		 });
	});
}
