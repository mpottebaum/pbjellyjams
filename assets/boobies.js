const navLinks = [
	{
		name: 'home',
		link: '/',
	},
	{
		name: 'itty bitty ditties',
		link: '/itty-bitty-ditties',
	},
];

let isMenuOpen = false;
const menuClosedHTML = '<p>MENU <span id="menu-tri">&#9650;</span></p>';
const menuOpenHTML = '<p>MENU <span id="menu-tri">&#9660;</span></p>';
const menuBtn = document.getElementById('menu');
const menuParent = document.getElementsByTagName('nav')[0];
const linksParent = document.createElement('ul');
for (const navLink of navLinks) {
	const navLinkWrap = document.createElement('li');
	navLinkWrap.innerHTML = `<a href="${navLink.link}"><p>${navLink.name}</p></a>`;
	linksParent.appendChild(navLinkWrap);
};
menuBtn.addEventListener('click', () => {
	if (!isMenuOpen) {
		menuBtn.innerHTML = menuOpenHTML;
		menuParent.appendChild(linksParent);
		isMenuOpen = true;
		return;
	}
	menuBtn.innerHTML = menuClosedHTML;
	linksParent.remove();
	isMenuOpen = false;
});

