let isMenuOpen = false;
const menuClosedHTML = '<p>MENU <span id="menu-tri">&#9650;</span></p>';
const menuOpenHTML = '<p>MENU <span id="menu-tri">&#9660;</span></p>';
const menuBtn = document.getElementById('menu');
const linksParent = document.getElementsByClassName('menu-links-init')[0];
menuBtn.addEventListener('click', function menuButtClicker() {
	if (!isMenuOpen) {
		menuBtn.innerHTML = menuOpenHTML;
		linksParent.className = 'menu-links-open';
		isMenuOpen = true;
		return;
	}
	menuBtn.innerHTML = menuClosedHTML;
	linksParent.className = 'menu-links-closed';
	isMenuOpen = false;
});

