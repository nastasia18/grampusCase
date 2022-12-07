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

// Модалка
function modalOpen() {
	let items = document.querySelectorAll('[data-modal]');
	if(!items.length)
		return;

	items.forEach(element => {
		element.addEventListener("click", function() {
			renderModal(element);
		})
	});
}
modalOpen()

function renderModal(element) {
	let modal = document.querySelector('.modal');
	if(!modal)
		return;

	let modalImage = modal.querySelector('[data-modal-image]')
	let modalTitle = modal.querySelector('[data-modal-title]')

	let elementTitle = element.querySelector('.service-list__item-title');
	let elementImage = element.querySelector('.service-list__item-image img');

	modalImage.src = elementImage.src;
	modalTitle.textContent = elementTitle.textContent;

	modal.classList.add('modal-open');

	document.querySelector('body').style.overflow = 'hidden';


	let closeBtn = modal.querySelector(".close-modal");  

    if(closeBtn) {
        closeBtn.addEventListener("click", function() {
            closeModal();
        })
    }
  
	document.addEventListener('keydown', function(event) {
		if (event.code == 'Escape') {
			closeModal();
		}
	});
}

function closeModal() {
	let modalOpen = document.querySelector('.modal-open');
    if(modalOpen) {
        if(modalOpen.classList.contains('modal-open')) {
            modalOpen.classList.remove('modal-open');
        }
    }
	document.querySelector('body').style.overflow = 'auto';	
}