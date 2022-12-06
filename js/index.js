// Мобильное меню
function openMobileMenu(event) {
	event.preventDefault();

	if( this.classList.contains('active') ) {
		this.classList.remove('active')

		document.querySelector('.mobile-menu').classList.remove('opened')
		document.querySelector('body').classList.remove('opened')
	} else {
		this.classList.add('active')
		document.querySelector('.mobile-menu').classList.add('opened')
		document.querySelector('body').classList.add('opened')
	}
}
document.querySelector('.mobile-menu-open').onclick = openMobileMenu


// Главный экран
function mainSlider() {
	let mainSliderContainer = document.querySelector('#main-screen');
	if(!mainSliderContainer)
		return

	new Swiper(mainSliderContainer, {
		loop: true,
		speed: 800,
		autoplay: {
			delay: 8000,
		},
	});
}
mainSlider();

// Паралакс
function initParallax() {
	var scene = document.getElementById('parallax-scene');
	if (!scene)	
		return;

	new Rellax(scene);
}
initParallax();

// Меню
function pageScroll() {
	let headerMenuItem = document.querySelectorAll('.menu-item');
	headerMenuItem.forEach((menuItem, i) => {
		menuItem.addEventListener(`click`, (evt) => {
			evt.preventDefault();
			let link = document.getElementById(`${menuItem.dataset.link}`);
			const elemCoordY = link.getBoundingClientRect().top;
	
			window.scrollBy({
				top: elemCoordY - 120,
				behavior: "smooth"
			});

			let mobileBtn = document.querySelector('.mobile-menu-open');
			if(getComputedStyle(mobileBtn).display != 'none')
				mobileBtn.click();
		});
	});
}
pageScroll();