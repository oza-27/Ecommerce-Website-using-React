import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import ButtonComponent from '../button/button.component';
import CartItems from '../cart-items/cart-items.component';


import { useNavigate } from 'react-router-dom';

import { CartDropdownContainer, EmpltyMessage, CartItem } from './cart-dropdown.styles.jsx';


const CartDropdown = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext)

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <CartDropdownContainer>
            <CartItem>
                {cartItems.length ? (cartItems.map((item) => (
                    <CartItems key={item.id} cartItem={item} />
                ))) : (
                    <EmpltyMessage>Your Cart is empty</EmpltyMessage>
                )}
            </CartItem>
            <ButtonComponent onClick={goToCheckoutHandler}>
                Go to Checkout
            </ButtonComponent>
        </CartDropdownContainer>
    )
}

export default CartDropdown;