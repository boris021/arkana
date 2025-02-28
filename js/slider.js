document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('.slider-placeholder').forEach(placeholder => {
		 fetch("/components/slider.html")
			  .then(response => response.text())
			  .then(data => {
					placeholder.innerHTML = data;
					initSwiper(); // Запускаем Swiper после загрузки
			  })
			  .catch(error => console.error("Ошибка загрузки слайдера:", error));
	});
});
