let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_name]} was selected`);
        call_production();

    }, 2000)
}


// callback hell
let production = () => {
    setTimeout(() => {
        console.log("production has started")

        setTimeout(() => {
            console.log("the food has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

                setTimeout(() => {
                    console.log("the machine was started");

                    setTimeout(() => {
                        console.log(`ice cream was placed on a ${stocks.holder[0]}`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[1]} was added`);

                            setTimeout(() => {
                                console.log("serve ice cream!");
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0o0)
}

order(2, production);