let stocks = {
    fruits: ['strawberry', 'grapes', 'bnana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate chips', 'peanuts']
}
let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log('shop is closed.'))
        }
    })
}

async function kitchen() {
    try {
        await time(2000);
        console.log(`${stocks.fruits[3]} was ordered`);
        console.log('Starting the Production');

        await time(2000);
        console.log("Cutting the fruit");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000);
        console.log('Starting the Machine');

        await time(2000);
        console.log(`${stocks.holder[1]} was selected`);

        await time(3000);
        console.log(`Sprinkled ${stocks.toppings[1]} on icecream`);

        await time(1000);
        console.log('Icecream was served');
    }
    catch (error) {
        console.log('Customer left');
    }
    finally {
        console.log('Day ended');
    }
}

kitchen();