document.addEventListener("DOMContentLoaded", function () {
	async function loadSlider(id) {
		 const container = document.getElementById(id);
		 if (!container) {
			  console.error(`Элемент с id ${id} не найден!`);
			  return;
		 }

		 try {
			  const response = await fetch('components/slider.html');
			  if (!response.ok) throw new Error(`Ошибка загрузки slider.html: ${response.status}`);
			  
			  const html = await response.text();
			  container.innerHTML = html;

			  // Ждем, пока HTML вставится в DOM
			  setTimeout(() => {
					new Swiper(`#${id} .mySwiper`, {
						 slidesPerView: 6,
						 spaceBetween: 20,
						 navigation: {
							  nextEl: `#${id} .swiper-button-next`,
							  prevEl: `#${id} .swiper-button-prev`,
						 },
						 breakpoints: {
							  320: { slidesPerView: 3, spaceBetween: 10 },
							  768: { slidesPerView: 4, spaceBetween: 14 },
							  1024: { slidesPerView: 6, spaceBetween: 20 }
						 }
					});
			  }, 100); // Даем браузеру обработать DOM
		 } catch (error) {
			  console.error(`Ошибка загрузки слайдера:`, error);
		 }
	}

	// Загружаем 4 слайдера
	loadSlider("slider1");
 //   loadSlider("slider2");
 //   loadSlider("slider3");
 //   loadSlider("slider4");
});