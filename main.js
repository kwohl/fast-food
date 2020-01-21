const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {

    },
    order: function () {
        
    }

}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "large"
}

const burgerComboMeal = {
    sandwichType: "burger",
    fries: true,
    drinkSize: "large"
}

const chickenSalad = {
    sandwichType: "croissant",
    fries: false,
    drinkSize: "small"
}

const avocadoToast = {
    sandwichType: "open face",
    fries: false,
    drinkSize: "medium"
}

// Place an order
restaurant.placeOrder(avocadoToast)

// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()
console.table();