import cart from './assets/bag.svg'
const CartWidget = () => {
    return (
        <button className="btn btn-dark">
            <img src={cart} alt="cart-widget" height={30} />
            0
        </button>


    )
}

export default CartWidget