document.addEventListener("click", () => {
	const targetElements = document.querySelectorAll("div.user-poste-infos");

	targetElements.forEach((element) => {
		const text = element.textContent.trim();
		if (text.includes("F")) {
			return;
		}
		if (text.startsWith("c1r")) {
			element.textContent += " 2F KOI";
		} else if (text.startsWith("c2r")) {
			element.textContent += " 2F UME";
		} else if (text.startsWith("c3r")) {
			element.textContent += " 3F WASHI";
		} else if (text.startsWith("c4r")) {
			element.textContent += " 3F FUJI";
		} else if (text.startsWith("c5r")) {
			element.textContent += " 4F SAKURA";
		} else if (text.startsWith("c6r")) {
			element.textContent += " 4F TSURU";
		}
	});
});
