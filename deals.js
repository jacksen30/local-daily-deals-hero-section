const deals = [
    {
        front: {
            imageUrl: "./assets/images/coffee-requires-crop-resize.jfif",
            title: "Espresso Coffee",
            price: "$3.00",
            venue: "Lugo Cafe",
            description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
            itemTitle: "1x Regular Sized Coffee."
        },
        back: {
            barcodeUrl: "./assets/images/0744109970238.jpg",
            price: "$3.00",
            venue: "Lugo Cafe",
            location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
            redeemInfo1: "To claim this offer, simply present this card at the counter when placing your order.",
            redeemInfo2: "This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of 01/01/23 between 9am - 5pm."
            // Additional back card information
        }
    },
    {
        front: {
            imageUrl: "./assets/images/coffee-requires-crop-resize.jfif",
            title: "Espresso Coffee",
            price: "$3.00",
            venue: "Lugo Cafe",
            description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
            itemTitle: "1x Regular Sized Coffee."
        },
        back: {
            barcodeUrl: "./assets/images/0744109970238.jpg",
            price: "$3.00",
            venue: "Lugo Cafe",
            location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
            redeemInfo1: "To claim this offer, simply present this card at the counter when placing your order.",
            redeemInfo2: "This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of 01/01/23 between 9am - 5pm."
            // Additional back card information
        }
    },
    {
        front: {
            imageUrl: "./assets/images/coffee-requires-crop-resize.jfif",
            title: "Espresso Coffee",
            price: "$3.00",
            venue: "Lugo Cafe",
            description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
            itemTitle: "1x Regular Sized Coffee."
        },
        back: {
            barcodeUrl: "./assets/images/0744109970238.jpg",
            price: "$3.00",
            venue: "Lugo Cafe",
            location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
            redeemInfo1: "To claim this offer, simply present this card at the counter when placing your order.",
            redeemInfo2: "This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of 01/01/23 between 9am - 5pm."
            // Additional back card information
        }
    },
    // ... other card objects
];



function renderDealCards() {
    const cardsContainer = document.querySelector('.deals-multicard-wrapper');
    cardsContainer.innerHTML = ''; // Clear existing cards

    deals.forEach(card => {
        const cardHtml = `
            <div class="card">
                <div class="card--front">
                    <div class="img-wrapper">
                        <img src="${card.front.imageUrl}" alt="a delicious coffee">
                    </div>
                    <div class="card__bottom">
                        <div class="card__title-price-wrapper">
                            <h3 class="card__title">${card.front.title}</h3>
                            <p class="card__price">${card.front.price}</p>
                        </div>
                        <h4 class="card__venue">${card.front.venue}</h4>
                        <p class="card__text">${card.front.description}</p>
                        <p class="card__item__title">${card.front.itemTitle}</p>
                        <button class="card-front-CTA-btn">Claim Deal</button>
                    </div>
                </div>
                <div class="card--back">
                    <i class="fa-solid fa-circle-left card-back-btn"></i>
                    <div class="barcode-wrapper">
                        <img src="${card.back.barcodeUrl}" alt="barcode to scan">
                    </div>
                    <p><span class="card--back__main-heading-price">${card.back.price} - </span><span class="card--back__main-heading-venue">${card.back.venue}</span></p>
                    <div class="card--back__text-wrapper">
                        <p class="card--back__sub-title">Location:</p>
                        <p class="card--back__body-text">${card.back.location}</p>
                        <p class="card--back__sub-title">Redeem:</p>
                        <p class="card--back__body-text">${card.back.redeemInfo1}</p>
                        <p class="card--back__sub-title">Redeem:</p>
                        <p class="card--back__body-text">${card.back.redeemInfo2}</p>
                    </div>
                </div>
            </div>
        `;
        cardsContainer.innerHTML += cardHtml;
    });
}


document.addEventListener('DOMContentLoaded', () => {
    // Render cards first
    renderDealCards();

    // Event delegation for card flipping
    const cardsContainer = document.querySelector('.deals-multicard-wrapper');
    cardsContainer.addEventListener("click", function(event) {
        // Check if the clicked element or its parent is a card
        const card = event.target.closest('.card');
        if (card) {
            card.classList.toggle("is-flipped");
        }
    });
});
