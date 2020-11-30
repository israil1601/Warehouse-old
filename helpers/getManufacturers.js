module.exports =  (data) => {
    return [...new Map(data.map(prod => [prod.manufacturer, prod])).values()];
}