const deals = [
    {
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
        imageUrl: "./assets/images/coffee-requires-crop-resize.jfif",
        imgAltText: "a delicious coffee",
        barcodeUrl: "./assets/images/0744109970238.jpg",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card..."
        // ... additional fields as needed
    },
    {
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
        imageUrl: "./assets/images/coffee-requires-crop-resize.jfif",
        imgAltText: "a delicious coffee",
        barcodeUrl: "./assets/images/0744109970238.jpg",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card..."
        // ... additional fields as needed
    },
    {
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
        imageUrl: "./assets/images/coffee-requires-crop-resize.jfif",
        imgAltText: "a delicious coffee",
        barcodeUrl: "./assets/images/0744109970238.jpg",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card..."
        // ... additional fields as needed
    },
    // ... other card objects
];



function renderDealCards() {
    const cardsContainer = document.querySelector('.deals-multicard-wrapper');
    deals.forEach(card => {
        const cardHtml = `
            <div class="card">
                <div class="card--front">
                    <div class="img-wrapper">
                        <img src="${card.imageUrl}" alt="${card.imgAltText}">
                    </div>
                    <div class="card__bottom">
                        <div class="card__title-price-wrapper">
                            <h3 class="card__title">${card.title}</h3>
                            <p class="card__price">${card.price}</p>
                        </div>
                        <h4 class="card__venue">${card.venue}</h4>
                        <p class="card__text">${card.description}</p>
                        <p class="card__item__title">${card.itemTitle}</p>
                        <button class="card-front-CTA-btn">Claim Deal</button>
                    </div>
                </div>
                <div class="card--back">
                    <!-- card back content -->
                </div>
            </div>
        `;
        cardsContainer.innerHTML += cardHtml;
    });
}


document.addEventListener('DOMContentLoaded', renderDealCards);