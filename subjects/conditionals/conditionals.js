// Movie ticket pricing system with if-else

function calculateTicketPrice(age, groupSize, movieTime) {
    let basePrice;

    if (age < 12) {
        basePrice = 5;
    } else if (age >= 12 && age <= 17) {
        basePrice = 10;
    } else if (age >= 18 && age <= 64) {
        basePrice = 15;
    } else {
        basePrice = 12;
    }


    // if movie time is less than 5pm
    if (movieTime < 17) {
        basePrice *= 0.9;
        console.log(basePrice)
    }

    if (groupSize >= 5) {
        basePrice *= 0.95;
    }

    console.log(`Your ticket price is ${basePrice.toFixed(2)}`);

}

age = 8;
groupSize = 4;
movieTime = 20;

calculateTicketPrice(age, groupSize, movieTime);