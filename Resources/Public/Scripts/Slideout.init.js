var slideout = new Slideout({
	'panel': document.getElementById('slideout-panel'),
	'menu': document.getElementById('slideout-menu'),
	'padding': 256,
	'tolerance': 70
});

var button = document.getElementById('slideout-button');

if (button) {
	button.addEventListener('click', function () {
		button.classList.toggle('is-active');
		slideout.toggle();
	});
}
