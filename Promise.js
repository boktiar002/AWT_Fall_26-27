function processOrder() {
    return new Promise((resolve, reject) => {

        console.log("Processing order...");

        setTimeout(() => {

            const success = true;

            if (success) {

                const order = {
                    orderId: 42017,
                    customer: "Your name",
                    item: "Chicken Burger",
                    quantity: 2,
                    total: 500
                };

                resolve(order);

            } else {
                reject("Failed to process the order");
            }

        }, 3000);
    });
}


// Call processOrder()
processOrder()
    .then((order) => {

        console.log("Order ID:", order.orderId);
        console.log("Customer:", order.customer);
        console.log("Item:", order.item);
        console.log("Quantity:", order.quantity);
        console.log("Total Amount:", order.total);

    })
    .catch((error) => {

        console.log("Error:", error);

    })
    .finally(() => {

        console.log("Order processing completed.");

    });