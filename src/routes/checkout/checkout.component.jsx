import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

import './checkout.styles.scss';
import CartItems from '../../components/cart-items/cart-items.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {

    const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span> Product</span>
                </div>
                <div className='header-block'>
                    <span> Description </span>
                </div>
                <div className='header-block'>
                    <span> Quantity </span>
                </div>
                <div className='header-block'>
                    <span> Price </span>
                </div>
                <div className='header-block'>
                    <span> Remove </span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <span className='total'> Total: 0 </span>
        </div>
    );
}

export default Checkout;