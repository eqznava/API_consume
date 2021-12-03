const buildCard = (minions) => {
    const card = document.createElement("article");
    card.classList.add("card");

    card.innerHTML = `
        <h1>${minions.name}</h1>
        <h2>${minions.race}</h2>
        <img src="${minions.image}" alt="${minions.name}" class="minions" />
        <p>${minions.description}</p>
    `;

    return card;
}

module.exports = buildCard;