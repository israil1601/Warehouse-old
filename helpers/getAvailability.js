const getAvailability = (unformatted) => {
    return unformatted.match(/<INSTOCKVALUE>(.*)<\/INSTOCKVALUE>/)[1];
}


module.exports = (products, availabilities) => {
    products.forEach(product => {
        const id = product.id.toUpperCase();
        product.availability = getAvailability(availabilities[id]);
    })
}
