// sidebar
document.addEventListener('DOMContentLoaded', () => {
	// Загружаем сайдбар через fetch
	fetch('components/sidebar.html')
		 .then(response => response.text())
		 .then(data => {
			  document.getElementById('sidebar-container').innerHTML = data;

			  const burger = document.getElementById('burger');
			  const sidebar = document.getElementById('sidebar');

			  if (burger && sidebar) {  // Проверяем, что элементы найдены
					console.log("Элементы найдены: бургер и сайдбар.");

					// Устанавливаем классы по умолчанию
					if (window.innerWidth <= 1400) {
						 sidebar.classList.add('mobile-closed');
					} else {
						 sidebar.classList.add('desktop-open');
					}

					// Открытие и закрытие сайдбара на экранах до 1400px
					burger.addEventListener('click', () => {
						 console.log("Клик по бургеру");
						 if (window.innerWidth <= 1400) {
							  sidebar.classList.toggle('active');
							  burger.classList.toggle('active');
						 }
					});

					// Проверка ширины экрана при изменении размера окна
					window.addEventListener('resize', () => {
						 if (window.innerWidth <= 1400) {
							  sidebar.classList.remove('desktop-open');
							  sidebar.classList.add('mobile-closed');
						 } else {
							  sidebar.classList.remove('mobile-closed', 'active');
							  sidebar.classList.add('desktop-open');
						 }
					});
			  } else {
					console.error("Не удалось найти элементы с id 'burger' или 'sidebar'. Проверь HTML.");
			  }
		 })
		 .catch(error => console.error("Ошибка загрузки сайдбара:", error));
});

// chat
document.addEventListener('DOMContentLoaded', () => {
	const chatToggle = document.getElementById("chat-toggle");
	const chatWindow = document.getElementById("chat-window");
	const closeChat = document.getElementById("close-chat");

	if (chatToggle && chatWindow && closeChat) {
		 console.log("Элементы чата найдены!");

		 chatToggle.addEventListener("click", () => {
			  console.log("Иконка нажата!");
			  chatWindow.classList.toggle("active"); // Меняем класс вместо display
		 });

		 closeChat.addEventListener("click", () => {
			  console.log("Закрытие чата!");
			  chatWindow.classList.remove("active"); // Убираем класс
		 });

		 document.addEventListener("click", (event) => {
			  if (!chatWindow.contains(event.target) && !chatToggle.contains(event.target)) {
					chatWindow.classList.remove("active"); // Закрываем чат при клике вне
					console.log("Чат закрыт по клику вне области!");
			  }
		 });
	} else {
		 console.error("❌ Не удалось найти элементы чата!");
	}
});


// tabs
const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');

tabItems.forEach(item => {
    item.addEventListener('click', () => {
        // Убираем активные классы
        tabItems.forEach(i => i.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Добавляем активный класс к текущей вкладке
        item.classList.add('active');
        const tabId = item.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
