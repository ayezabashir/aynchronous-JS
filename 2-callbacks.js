let stocks = {
    fruits: ['strawberry', 'grapes', 'bnana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate chips', 'peanuts']
}

let order = (fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();  // callback Function
    }, 2000);

};

let production = () => {

    setTimeout(() => {
        console.log('Production has Started!');

        setTimeout(() => {
            console.log('The fruit has been chopped!');

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(() => {
                    console.log('Machine has been started.');

                    setTimeout(() => {
                        console.log(`${stocks.holder[1]} was selected`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was sprinkled on icecream`);

                            setTimeout(() => {
                                console.log('Icecream was served');
                            }, 2000);

                        }, 3000);

                    }, 2000);

                }, 1000);

            }, 1000)

        }, 2000)

    }, 0);
};

order(2, production);