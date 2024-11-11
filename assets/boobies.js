let isMenuOpen = false;
const menuTriClosed = '&#9650;';
const menuTriOpen = '&#9660;';
const linksParent = document.getElementsByClassName('menu-links-init')[0];
menu.addEventListener('click', function menuButtClicker() {
	if (!isMenuOpen) {
		menuTri.innerHTML = menuTriOpen;
		linksParent.className = 'menu-links-open';
		isMenuOpen = true;
		return;
	}
	menuTri.innerHTML = menuTriClosed;
	linksParent.className = 'menu-links-closed';
	isMenuOpen = false;
});

