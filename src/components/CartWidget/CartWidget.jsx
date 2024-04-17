import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import cart from './assets/bag.svg'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to={'/cart'}>
            <img src={cart} style={{ width: '30px', height: '30px' }} /> 
            { totalQuantity }
        </Link>
    )
}
export default CartWidget
