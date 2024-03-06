import ButtonComponent from '../button/button.component';
import CartItems from '../cart-items/cart-items.component';

import './cart-dropdown.styles.scss';


const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {[].map(item => <CartItems cartItem={item} />)}
            </div>
            <ButtonComponent>
                Go to Checkout
            </ButtonComponent>
        </div>
    )
}

export default CartDropdown;