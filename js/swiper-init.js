function initSwiper() {
	console.log("🔄 Запуск Swiper...");

	document.querySelectorAll('.swiper-container').forEach(slider => {
		 console.log("✅ Найден слайдер:", slider);

		 let wrapper = slider.querySelector('.swiper-wrapper');
		 if (!wrapper) {
			  console.error("❌ Ошибка! Внутри .swiper-container нет .swiper-wrapper!");
			  console.warn("⚠️ HTML-код может быть загружен неправильно.");
			  return;
		 }

		 if (!wrapper.children.length) {
			  console.error("❌ Ошибка! Внутри .swiper-wrapper нет `.swiper-slide`!");
			  return;
		 }

		 new Swiper(slider, {
			  slidesPerView: 4,
			  spaceBetween: 10,
			  loop: false,
			  pagination: {
					el: slider.querySelector('.swiper-pagination'),
					clickable: true,
			  },
			  navigation: {
					nextEl: slider.querySelector('.swiper-button-next'),
					prevEl: slider.querySelector('.swiper-button-prev'),
			  },
			  autoplay: false,
			  breakpoints: {
					1200: { slidesPerView: 4 },
					1024: { slidesPerView: 3 },
					768: { slidesPerView: 2 },
					480: { slidesPerView: 1 },
			  }
		 });
	});
}

document.addEventListener("DOMContentLoaded", () => {
	console.log("✅ DOM загружен, запускаем Swiper...");
	initSwiper();
});
