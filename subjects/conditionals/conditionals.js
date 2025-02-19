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
        basePrice *= 0.9; // 10% discount
        console.log(basePrice)
    }

    if (groupSize >= 5) {
        basePrice *= 0.95; // 5% discount
    }

    console.log(`Your ticket price is $${basePrice.toFixed(2)}`);

}

age = 70;
groupSize = 10;
movieTime = 20;

calculateTicketPrice(age, groupSize, movieTime);


// Approach to build boolean logic without conditionals using Objects!

// const diaLetras = {
//     0: 'domingo',
//     1: 'lunes',
//     2: 'martes',
//     3: 'miercoles'
// };


// dia = 3;
// console.log(diaLetras[dia] || 'dia no valido');

function calcTicketPrice(age2, hour, groupLength) {
    const ageBasedPrices = {
        child: { min: 0, max: 11, price: 5},
        teenager: { min: 12, max: 17, price: 10},
        adult: { min: 18, max: 64, price: 15},
        senior: { min: 65, max: Infinity, price: 12}
    };

    let basePrice2;
    
    for (const category in ageBasedPrices) {
        const { min, max, price } = ageBasedPrices[category];
        if (age2 >= min && age2 <= max) {
            basePrice2 = price;
            break
        };
    };
    
    const isMatinee = hour < 17;
    matineeDiscount = isMatinee ? 0.9 : 1;
    
    const groupDiscount = groupLength >= 5;
    groupPrice = groupDiscount ? 0.95 : 1;

    const finalPrice = basePrice2 * matineeDiscount * groupPrice;

    console.log(`Your ticket price is $${finalPrice.toFixed(2)}`);
}

age2 = 18;
groupLength = 4;
hour = 20; // Output: 'Your ticket price is $15.00'

calcTicketPrice(age2, hour, groupLength);



