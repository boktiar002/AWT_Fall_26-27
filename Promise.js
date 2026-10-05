function proccessOrder() {
    return new Promise((resolve, reject) => {
        console.log("Proccessing order...");
        
        setTimeout(() => {
            const success = true;
            
            if (success) {
                // TODO: Create order object
                // TODO: Use resolve(order)
                resolve(order);
            } else {
                // TODO: Use reject()
            }
        }, 3000);
    });
}