import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import ButtonComponent from '../button/button.component';
import CartItems from '../cart-items/cart-items.component';

import './cart-dropdown.styles.scss';


const CartDropdown = () => {

    const { cartItems } = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItems key={item.id} cartItem={item} />
                ))}
            </div>
            <ButtonComponent>
                Go to Checkout
            </ButtonComponent>
        </div>
    )
}

export default CartDropdown;