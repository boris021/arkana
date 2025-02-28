document.addEventListener("DOMContentLoaded", () => {
	console.log("Скрипт global-link.js запустился!");

	function applyGlobalLink() {
		 const globalLink = "https://example.com/game";
		 const elements = document.querySelectorAll("[data-global-link]");

		 console.log("Найдено элементов с data-global-link:", elements.length);

		 elements.forEach(element => {
			  if (element.tagName === "A" || element.tagName === "BUTTON") {
					element.setAttribute("href", globalLink);
					element.addEventListener("click", (event) => {
						 event.preventDefault();
						 window.location.href = globalLink;
					});
			  } else {
					element.addEventListener("click", (event) => {
						 if (!event.target.closest("a, button")) {
							  window.location.href = globalLink;
						 }
					});
			  }
		 });
	}

	// Запускаем сразу (если элементы уже есть)
	applyGlobalLink();

	// Следим за изменениями DOM
	const observer = new MutationObserver(() => {
		 applyGlobalLink();
	});

	observer.observe(document.body, { childList: true, subtree: true });
});
