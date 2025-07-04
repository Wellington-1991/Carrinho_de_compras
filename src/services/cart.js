async function addItem (userCart, item){
    userCart.push(item);
}

async function deleteItem (userCart, name){
    const index = userCart.findIndex((item) => item.name === name )

    if (index !== -1) {
        userCart.splice(index, 1)
    }
    this.displaycart(userCart);
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex(f => f.name === item.name);
    console.log(indexFound)

    if(indexFound === -1){
        console.log('item não econtrado!');
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound);
        return;
    }
}

async function displaycart (userCart){
    console.log("\nShopee card list:");
    userCart.forEach((item,index) => {
        console.log(
            `${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`
        );
    })
}

async function calculateTotal(userCart) {
    console.log("\nShopee Cart TOTAL IS:")
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁Total: ${result}`);
}


export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displaycart
}