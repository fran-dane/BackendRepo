const Contenedor = require('./app')

const prods = async function () {
    let contenedor = new Contenedor('productos.txt')
    contenedor.save({
        title: 'Remera Negra',
        price: 30,
        thumbnail: 'https://pyxis.nymag.com/v1/imgs/7e2/f1d/2ffe5d192c7d9971f10b4bb99418376fee-Uniqlo-U-black-tshirt.2x.rdeep-vertical.w245.jpg',
        id: 1
    })
    
    contenedor.save({
        title: 'Remera Blanca',
        price: 30,
        thumbnail: 'https://n.nordstrommedia.com/id/sr3/8cc04dc2-833f-4fda-aea1-ef6654e58d6a.jpeg?h=365&w=240&dpr=2',
        id: 2
    })
    
    contenedor.save({
        title: 'Remera Gris',
        price: 30,
        thumbnail: 'https://d1l2kcmc130e06.cloudfront.net/2/images/colors_240x300/gildan-5000-charcoal.jpg',
        id: 3
    })
}

prods();