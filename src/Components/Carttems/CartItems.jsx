import React, { useContext, useEffect } from 'react';
import './CartItems.css';
import { StoreContext } from '../../Context/Context';
import remove_icon from '../../Assets/Icons/close.png';

const CartItems = () => {
    const { menuItems, cartItems, removeFromCart } = useContext(StoreContext);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!menuItems || !cartItems) {
        return <div>Loading...</div>;
    }

    const SHIPPING_COST = 350;

    const calculateSubtotal = () => {
        return Object.keys(cartItems).reduce((total, key) => {
            const foodItem = menuItems.find(foodItem => foodItem.item_name === key);
            if (!foodItem) return total; // Ensure foodItem is defined
            const price = parseFloat(foodItem.item_price);
            const quantity = cartItems[key];
            return total + (price * quantity);
        }, 0);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        return subtotal + SHIPPING_COST;
    };

    const hasItemsInCart = Object.keys(cartItems).filter(key => cartItems[key] > 0).length > 0;

    return (
        <div className='cartitems'>
            {!hasItemsInCart ? (
                <div className="no-items">No Items In Cart</div>
            ) : (
                <>
                    <hr />
                    {Object.keys(cartItems).filter(key => cartItems[key] > 0).map((key) => {
                        const foodItem = menuItems.find(foodItem => foodItem.item_name === key);
                        if (!foodItem) return null; // Ensure foodItem is defined
                        const price = parseFloat(foodItem.item_price);
                        const quantity = cartItems[key];
                        
                        return (
                            <div key={key}>
                                <div className="cartitems-format">
                                    <img src={foodItem.item_image} alt="" className="carticon-product-icon" />
                                    <p>{foodItem.item_name}</p>
                                    <p>{quantity}</p>
                                    <p>Rs. {(price * quantity).toFixed(2)}</p>
                                    <div className="cartitems-remove-icon">
                                        <img
                                            src={remove_icon}
                                            alt="Remove"
                                            onClick={() => removeFromCart(key)}
                                        />
                                    </div>
                                </div>
                                <hr />
                            </div>
                        );
                    })}
                    <div className="cartitems-down">
                        <div className="cartitems-total">
                            <h1>Cart Totals</h1>
                            <div>
                                <div className="cartitems-total-item">
                                    <p>Sub Total</p>
                                    <p>Rs. {calculateSubtotal().toFixed(2)}</p>
                                </div>
                                <hr />
                                <div className="cartitems-total-item">
                                    <p>Delivery Charge</p>
                                    <p>Rs. {SHIPPING_COST}</p>
                                </div>
                                <hr />
                                <div className="cartitems-total-item">
                                    <h3>Total</h3>
                                    <h3>Rs. {calculateTotal().toFixed(2)}</h3>
                                </div>
                            </div>
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                        <div className="cartitems-promocode">
                            <p>If you have a promocode, enter it here</p>
                            <div className="cartitems-promobox">
                                <input type="text" placeholder='PromoCode' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartItems;
