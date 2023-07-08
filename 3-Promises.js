let stocks = {
    fruits: ['strawberry', 'grapes', 'bnana', 'apple'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'cup', 'stick'],
    toppings: ['chocolate chips', 'peanuts']
}
let is_shop_open = true;

let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time);
        }
        else {
            reject(console.log('Our shop is Closed!'))
        }
    })
}

order(2000,
    () => {
        console.log(`${stocks.fruits[1]} was selected`)
    })
    .then(() => {
        return order(0, () => {
            console.log('Production has started!');
        })
    })
    .then(() => {
        return order(2000, () => {
            console.log('The fruit was chopped!');
        })
    })
    .then(() => {
        return order(1000, () => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        })
    })
    .then(() => {
        return order(1000, () => {
            console.log('Machine has been started');
        })
    })
    .then(() => {
        return order(2000, () => {
            console.log(`${stocks.holder[1]} was selected`);
        })
    })
    .then(() => {
        return order(3000, () => {
            console.log(`${stocks.toppings[1]} was sprinkled on icecream`);
        })
    })
    .then(() => {
        return order(1000, () => {
            console.log('Icecream was served');
        })
    })
    .catch(() => {
        console.log('Customer Left');
    })
    .finally(() => {
        console.log('Day ended! Shop is closed');
    })