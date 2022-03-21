const addToStorage = id => {

    const shop = JSON.parse(localStorage.getItem('shop')) || {};
    const quantity = shop[id];
    if (quantity) {
        shop[id] = quantity + 1;
    }
    else {
        shop[id] = 1;
    }

    localStorage.setItem('shop', JSON.stringify(shop));
}
const removeFromStore = id => {
    const shop = JSON.parse(localStorage.getItem('shop')) || {};
    delete shop[id];
    localStorage.setItem('shop', JSON.stringify(shop));
}
const removeAll = () => {
    localStorage.removeItem('shop');
}

export { addToStorage, removeAll, removeFromStore }