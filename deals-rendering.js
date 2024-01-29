// Deals schedule - The 3 x deals that should be displayed on each day of the week
const weeklyDeals = {
    'Monday':   [deal1, deal2, deal3],
    'Tuesday':  [deal4, deal5, deal6],
    'Wednesday': [deal7, deal8, deal9],
    'Thursday': [deal1, deal2, deal3],
    'Friday':   [deal4, deal5, deal6],
    'Saturday': [deal7, deal8, deal9],
    'Sunday':   [deal4, deal5, deal6],
};

// Returns the deals for the current day
const getCurrentDayDeals = () => {
    const today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
    return weeklyDeals[today];
}

// Renders the deal cards to the UI - with the data returned from getCurrentDayDeals
const renderDealCards = () => {
    const todayDeals = getCurrentDayDeals();
    const cardsContainer = document.querySelector('.deals-multicard-wrapper');

    // Build up the entire HTML string in the loop and then set innerHTML once at the end. (for all 3 cards)
    let cardsHtml = '';

    todayDeals.forEach(card => {
        cardsHtml += `
            <div class="card">
                <div class="card--front">
                    <div class="img-wrapper">
                        <img src="${card.front.imageUrl}" alt="${card.front.frontImageAlt}">
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
                        <img src="${card.back.barcodeUrl}" alt="${card.back.barcodeImageAlt}">
                    </div>
                    <p><span class="card--back__main-heading-price">${card.back.price} - </span><span class="card--back__main-heading-venue">${card.back.venue}</span></p>
                    <div class="card--back__text-wrapper">
                        <p class="card--back__sub-title">Location:</p>
                        <p class="card--back__body-text">${card.back.location}</p>
                        <p class="card--back__sub-title">Redeem:</p>
                        <p class="card--back__body-text">${card.back.redeemInfo}</p>
                        <p class="card--back__sub-title">Terms and Conditions:</p>
                        <p class="card--back__body-text">${card.back.terms}</p>
                    </div>
                </div>
            </div>
        `;
    });
    cardsContainer.innerHTML = cardsHtml;
};

// Automatically update the deal cards on the website at midnight each day
const scheduleDealUpdate = () => {
    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    // Calculates the time (in milliseconds) until the next midnight.
    const timeUntilMidnight = nextMidnight.getTime() - now.getTime();

    setTimeout(() => {
        renderDealCards();
        scheduleDealUpdate(); // Reschedule for the next day
    }, timeUntilMidnight);
}


document.addEventListener('DOMContentLoaded', () => {
    // Render cards first
    renderDealCards();
    scheduleDealUpdate();

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
