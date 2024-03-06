import './cart-items.styles.scss';


const CartItems = ({ cartItem }) => {
    const { name, quantity } = cartItem;
    return (
        <div>
            <h2> {name} </h2>
            <span> {quantity} </span>
        </div>
    );
};

export default CartItems;
