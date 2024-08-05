function run() {
	const url = new URL(window.location.href);
	const params = new URLSearchParams(url.search);
	const planet = params.get("planet");

	const planetInfo = document.createElement("div");
	planetInfo.classList.add("info");
	planetInfo.id = "planetInfo";
	planetInfo.innerText = getPlanetAttribute(nameToIndex(capitalizeWord(planet)), "name").toUpperCase();
	document.body.appendChild(planetInfo);
}

function getPlanetAttribute(i, attribute) {
	// example:
	// getplanetAttributes(3, "moons");
	// ...returns: ["Månen"]
	// getplanetAttributes(3, "moons")[0];
	// ...returns: "Månen"
	console.log(`running getPlanetAttributes(${i}, ${attribute})`);
	const storedData = JSON.parse(localStorage.getItem("bodies"));
	const planetAttr = storedData[i][attribute];

	return planetAttr;
}

function indexToName(index) {
	// example:
	// indexToName(2) returns "Venus"
	switch (index) {
		case 0:
			return "Solen";
			break;
		case 1:
			return "Merkurius";
			break;
		case 2:
			return "Venus";
			break;
		case 3:
			return "Jorden";
			break;
		case 4:
			return "Mars";
			break;
		case 5:
			return "Jupiter";
			break;
		case 6:
			return "Saturnus";
			break;
		case 7:
			return "Uranus";
			break;
		case 8:
			return "Neptunus";
			break;

		default:
			return undefined;
			break;
	}
}

function nameToIndex(name) {
	// example:
	// indexToName(2) returns "Venus"
	switch (name) {
		case "Solen":
			return 0;
			break;
		case "Merkurius":
			return 1;
			break;
		case "Venus":
			return 2;
			break;
		case "Jorden":
			return 3;
			break;
		case "Mars":
			return 4;
			break;
		case "Jupiter":
			return 5;
			break;
		case "Saturnus":
			return 6;
			break;
		case "Uranus":
			return 7;
			break;
		case "Neptunus":
			return 8;
			break;

		default:
			return undefined;
			break;
	}
}

function capitalizeWord(word) {
	if (word.length === 0) return word;
	return word.charAt(0).toUpperCase() + word.slice(1);
}

function addToFavorites(planetName) {
	let favorites = JSON.parse(localStorage.getItem("favorites")) || []; // JSON.parse omvandlar strängen tillbaka till en JavaScript-array. Kodraden ser till att favorites alltid är en array, antingen en existerande lista med favoriter eller en ny tom lista.
	if (!favorites.includes(planetName)) {
		favorites.push(planetName); //Lägger till planeten i slutet av arrayen
		localStorage.setItem("favorites", JSON.stringify(favorites)); //Stringify omvandlar arrayen favorites tillbaka till en sträng, eftersom localStorage endast kan lagra strängar.
		alert(`${planetName} har lagts till i din favoritlista`);
	} else {
		alert(`${planetName} finns redan i din favoritlista`);
	}

	const addToFavoritesBtn = document.getElementById("add-favorite");
	addToFavoritesBtn.addEventListener("click", () => {
		addToFavorites(planetInfo.name);
	});
}
//let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
//localStorage.clear();

run();
addToFavorites();
