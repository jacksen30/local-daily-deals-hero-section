// Allows for dynamic date to be added to the deal terms, eg valid for todays date
const getTodaysDate = () => {
    const date = new Date();
    const twoDigitDateFormat = { year: '2-digit', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('en-AU', twoDigitDateFormat).format(date);
}


//  Create an object for each deal that currently exists
const deal1 = {
    front: {
        imageUrl: "./assets/images/coffee-card-img.webp",
        frontImageAlt: "A delicious coffee",
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
    },
    back: {
        barcodeUrl: "./assets/images/barcode-optimized.webp",
        barcodeImageAlt: "Barcode to scan",
        price: "$3.00",
        venue: "Lugo Cafe",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card at the counter when placing your order. Test-D1",
        terms: `This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of ${getTodaysDate()} between 9am - 5pm.`,
        // Additional back card information
    }
};

const deal2 = {
    front: {
        imageUrl: "./assets/images/coffee-card-img.webp",
        frontImageAlt: "A delicious coffee",
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
    },
    back: {
        barcodeUrl: "./assets/images/barcode-optimized.webp",
        barcodeImageAlt: "barcode to scan",
        price: "$3.00",
        venue: "Lugo Cafe",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card at the counter when placing your order. Test-D2",
        terms: `This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of ${getTodaysDate()} between 9am - 5pm.`,
        // Additional back card information
    }
};

const deal3 = {
    front: {
        imageUrl: "./assets/images/coffee-card-img.webp",
        frontImageAlt: "A delicious coffee",
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
    },
    back: {
        barcodeUrl: "./assets/images/barcode-optimized.webp",
        barcodeImageAlt: "barcode to scan",
        price: "$3.00",
        venue: "Lugo Cafe",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card at the counter when placing your order. Test-D3",
        terms: `This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of ${getTodaysDate()} between 9am - 5pm.`,
        // Additional back card information
    }
};

const deal4 = {
    front: {
        imageUrl: "./assets/images/coffee-card-img.webp",
        frontImageAlt: "A delicious coffee",
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
    },
    back: {
        barcodeUrl: "./assets/images/barcode-optimized.webp",
        barcodeImageAlt: "barcode to scan",
        price: "$3.00",
        venue: "Lugo Cafe",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card at the counter when placing your order. Test-D4",
        terms: `This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of ${getTodaysDate()} between 9am - 5pm.`,
        // Additional back card information
    }
};

const deal5 = {
    front: {
        imageUrl: "./assets/images/coffee-card-img.webp",
        frontImageAlt: "A delicious coffee",
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
    },
    back: {
        barcodeUrl: "./assets/images/barcode-optimized.webp",
        barcodeImageAlt: "barcode to scan",
        price: "$3.00",
        venue: "Lugo Cafe",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card at the counter when placing your order. Test-D5",
        terms: `This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of ${getTodaysDate()} between 9am - 5pm.`,
        // Additional back card information
    }
};

const deal6 = {
    front: {
        imageUrl: "./assets/images/coffee-card-img.webp",
        frontImageAlt: "A delicious coffee",
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
    },
    back: {
        barcodeUrl: "./assets/images/barcode-optimized.webp",
        barcodeImageAlt: "barcode to scan",
        price: "$3.00",
        venue: "Lugo Cafe",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card at the counter when placing your order. Test-D6",
        terms: `This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of ${getTodaysDate()} between 9am - 5pm.`,
        // Additional back card information
    }
};

const deal7 = {
    front: {
        imageUrl: "./assets/images/coffee-card-img.webp",
        frontImageAlt: "A delicious coffee",
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
    },
    back: {
        barcodeUrl: "./assets/images/barcode-optimized.webp",
        barcodeImageAlt: "barcode to scan",
        price: "$3.00",
        venue: "Lugo Cafe",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card at the counter when placing your order. Test-D7",
        terms: `This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of ${getTodaysDate()} between 9am - 5pm.`,
        // Additional back card information
    }
};

const deal8 = {
    front: {
        imageUrl: "./assets/images/coffee-card-img.webp",
        frontImageAlt: "A delicious coffee",
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
    },
    back: {
        barcodeUrl: "./assets/images/barcode-optimized.webp",
        barcodeImageAlt: "barcode to scan",
        price: "$3.00",
        venue: "Lugo Cafe",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card at the counter when placing your order. Test-D8",
        terms: `This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of ${getTodaysDate()} between 9am - 5pm.`,
        // Additional back card information
    }
};

const deal9 = {
    front: {
        imageUrl: "./assets/images/coffee-card-img.webp",
        frontImageAlt: "A delicious coffee",
        title: "Espresso Coffee",
        price: "$3.00",
        venue: "Lugo Cafe",
        description: "Indulge in the rich aroma & exquisite taste of our carefully brewed coffees at Lugo Cafe. Whether you're an early riser in need of your morning fix or looking for a cozy spot to unwind, we've got you covered.",
        itemTitle: "1x Regular Sized Coffee.",
    },
    back: {
        barcodeUrl: "./assets/images/barcode-optimized.webp",
        barcodeImageAlt: "barcode to scan",
        price: "$3.00",
        venue: "Lugo Cafe",
        location: "Lugo Cafe, 100 Marine Terrace, Geraldton W.A",
        redeemInfo: "To claim this offer, simply present this card at the counter when placing your order. Test-D9",
        terms: `This offer is valid for a regular-sized coffee & cannot be combined with other promotions. Specialty drinks are not included. The offer is valid for the date of ${getTodaysDate()} between 9am - 5pm.`,
        // Additional back card information
    }
};