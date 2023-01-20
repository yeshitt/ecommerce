const productsArray = [
    {
        id: "price_1MSE9ISIgz3IDkn0biD4vvWH",
        title: "Glass",
        price: 70,
        image: 'images/glass.jpg'
    },
    {
        id: "price_1MSEB6SIgz3IDkn0L4f8L8YB",
        title: "Plates",
        price: 200,
        image: 'images/plates3.jpg'
    },
    {
        id: "price_1MSEBiSIgz3IDkn0bG4RkY0l",
        title: "Bowl",
        price: 100,
        image: 'images/bowl.jpg'
    },
    {
        id: "price_1MSECISIgz3IDkn07SEamJVU",
        title: "Spoon",
        price: 80,
        image: 'images/spoon.jpg'
    },
    {
        id: "price_1MSECzSIgz3IDkn0ntueBhUW",
        title: "Fork",
        price: 80,
        image: 'images/fork.jpg'
    },
    {
        id: "price_1MSEDTSIgz3IDkn08y8DR8HE",
        title: "Napkins",
        price: 150,
        image: 'images/napkins.jpg'
    },
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id)

    if(productData===undefined){
        console.log("Product data does not exist for ID: "+id);
        return undefined;
    }

    return productData;
}

export {productsArray, getProductData};