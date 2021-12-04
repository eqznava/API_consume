export function buildCard(minions) {
    const card = document.createElement('article');
    card.innerHTML = `<h1>${minions.name}</h1>
                            <h2>${minions.race.name}</h2>
                            <img src="${minions.image}" alt="${minions.name}">
                            <p>${minions.tooltip}</p>`;
    return card;
}