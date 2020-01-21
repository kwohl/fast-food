const restaurant = {
    name: "Bob's Burgers",
    orders: [],
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    order: function () {
        return this.orders
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
const orderList = restaurant.order()
console.log(orderList)
// Output all orders to the console using console.table()
console.table(restaurant.orders);