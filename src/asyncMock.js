/*const products = [
    { id: '1', name: 'Nueces', price: 1000, category: 'sueltos', img:'https://http2.mlstatic.com/D_NQ_NP_618427-MLA46734637900_072021-O.webp', stock: 25, description:'Nueces sueltas calidad premium x100g' },
    { id: '2', name: 'Pack Desayuno', price: 800, category: 'combos', img:'https://acdn.mitiendanube.com/stores/001/040/363/products/ss-391-0e547ccce1f883b7c316678253084837-640-0.webp', stock: 16, description:'Combo desayuno: Tostadas, untables y budín'},
    { id: '3', name: 'Hamburguesas NotCarne x4', price: 1200, category: 'congelados', img:'https://cdn2.notco.com/uploads/products/_480x640_fit_center-center_85_none/337020/2311-NotBurger-4-unidades-AR-1.webp', stock: 30, description:'Medallón veggie x4'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 500)
    })
}
 */