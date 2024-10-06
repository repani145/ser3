import React, { useContext } from 'react';
import { AppContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

export default function Cart() {
    const { cartlist, setCartlist, count, setCount } = useContext(AppContext);
    const navigate = useNavigate();

    const removeFromCart = (menuidToRemove) => {
        let filtered_cart = cartlist.filter((item) => item.menuid !== menuidToRemove);
        setCartlist(filtered_cart);
        setCount(count - 1);
    };

    const handleQuantityChange = (id, increment) => {
        let updatedData = cartlist.map((item) => {
            if (item.menuid === id) {
                const updatedQuantity = increment ? item.quantity + 1 : item.quantity - 1;
                return { ...item, quantity: updatedQuantity > 0 ? updatedQuantity : 1 };
            }
            return item;
        });
        setCartlist(updatedData);
    };

    const handlePrice = () => {
        return cartlist.reduce((total, item) => total + item.cost * item.quantity, 0);
    };

    const handleCheckout = () => {
        const totalAmount = handlePrice();
        navigate('/payment', { state: { totalAmount } });
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartlist.length ? (
                <div className="cart-main">
                    <div className="cart-header">
                        <div className="header-item">Image</div>
                        <div className="header-item">Name</div>
                        <div className="header-item">Price</div>
                        <div className="header-item">Quantity</div>
                    </div>
                    {cartlist.map((item) => (
                        <div key={item.menuid} className="cart-item">
                            <img className='item-image' src={item.image_url} alt={item.name} />
                            <p className="item-name">{item.name}</p>
                            <p className="item-price">₹{item.cost}</p>
                            <div className="item-quantity">
                                <button onClick={() => handleQuantityChange(item.menuid, false)}>-</button>
                                <p className='item-quantity-sub'>{item.quantity}</p>
                                <button onClick={() => handleQuantityChange(item.menuid, true)}>+</button>
                            </div>
                            <button className="remove-button" onClick={() => removeFromCart(item.menuid)}>Remove</button>
                        </div>
                    ))}
                    <div className="cart-summary">
                        <p className="total-price">Total: ₹{handlePrice()}</p>
                        <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
                    </div>
                </div>
            ) : (
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <button className="back-button" onClick={() => navigate('/restaurants')}>Go back to Home</button>
                </div>
            )}
        </div>
    );
}
