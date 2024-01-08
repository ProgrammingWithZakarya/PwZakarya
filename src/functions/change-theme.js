const elementsDarkMode = [
	{
		name: "link",
		href: "./src/styles/vendor/style.css",
		className: "iconMoon-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/vendor/owl.carousel.min.css",
		className: "owl-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/vendor/animate.min.css",
		className: "animate-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/vendor/aos.css",
		className: "aos-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/vendor/bootstrap.css",
		className: "bootstrap-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/vendor/jquery.fancybox.min.css",
		className: "jquery-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/style.css",
		className: "main-stylesheet",
	},
];

const elementsLightMode = [
	{
		name: "link",
		href: "./src/styles/light/vendor/style.css",
		className: "iconMoon-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/light/vendor/owl.carousel.min.css",
		className: "owl-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/light/vendor/animate.min.css",
		className: "animate-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/light/vendor/aos.css",
		className: "aos-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/light/vendor/bootstrap.css",
		className: "bootstrap-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/light/vendor/jquery.fancybox.min.css",
		className: "jquery-stylesheet",
	},
	{
		name: "link",
		href: "./src/styles/light/style.css",
		className: "main-stylesheet",
	},
];

/**
 * This function takes a theme parameter and changes the current theme to the provided theme.
 *
 * @param {string} theme - The theme to switch to, either "dark" or "light".
 */
export function changeTheme(theme) {
	/**
	 * This function removes all existing style sheets from the head of the document.
	 */
	const removeExistingStyleSheets = () => {
		const allLinkStyleSheet = [...document.head.querySelectorAll("link")].filter(
			linkElem => linkElem.rel === "stylesheet"
		);
		allLinkStyleSheet.forEach(linkElem => linkElem.remove());
	};

	/**
	 * This function takes an array of stylesheet elements and adds them to the head of the document.
	 *
	 * @param {array} stylesheets - An array of stylesheet elements.
	 */
	const addStyleSheets = stylesheets => {
		stylesheets.forEach(item => {
			const linkElem = document.createElement("link");
			linkElem.setAttribute("class", item.className);
			linkElem.setAttribute("rel", "stylesheet");
			linkElem.setAttribute("href", item.href);
			document.head.appendChild(linkElem);
		});
	};

	/**
	 * This function saves the provided theme to local storage.
	 *
	 * @param {string} theme - The theme to save, either "dark" or "light".
	 */
	const saveTheme = theme => {
		window.localStorage.setItem("theme", theme);
	};

	removeExistingStyleSheets();

	if (theme === "dark") {
		addStyleSheets(elementsDarkMode);
		saveTheme("dark");
	} else if (theme === "light") {
		addStyleSheets(elementsLightMode);
	}
}
