import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);  // Getting cart items from Redux
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
<<<<<<< HEAD
    return cart.reduce((total, item) => {
      const itemCost = parseFloat(item.cost.substring(1));  // Remove '$' and parse to float
      return total + itemCost * item.quantity;
    }, 0).toFixed(2);
=======
    return cart.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);
>>>>>>> 30348c99b328c4e98637fce18191e12578c26bf4
  };

  // Continue shopping handler
  const handleContinueShopping = () => {
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  // Increment item quantity
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Decrement item quantity
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
<<<<<<< HEAD
      dispatch(removeItem(item.name));  // Remove item if quantity reaches 0
=======
      dispatch(removeItem(item.name)); // Remove item if quantity reaches 0
>>>>>>> 30348c99b328c4e98637fce18191e12578c26bf4
    }
  };

  // Remove item from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost for an item
  const calculateTotalCost = (item) => {
<<<<<<< HEAD
    const itemCost = parseFloat(item.cost.substring(1));  // Remove '$' and parse to float
    return (itemCost * item.quantity).toFixed(2);
=======
    return (item.cost * item.quantity).toFixed(2);
>>>>>>> 30348c99b328c4e98637fce18191e12578c26bf4
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
<<<<<<< HEAD
              <div className="cart-item-cost">${parseFloat(item.cost.substring(1)).toFixed(2)}</div>
=======
              <div className="cart-item-cost">${item.cost.toFixed(2)}</div>
>>>>>>> 30348c99b328c4e98637fce18191e12578c26bf4
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className="total_cart_amount">
        <strong>Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}</strong>
      </div>
      <div className="continue_shopping_btn">
        <button
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <br />
        <button
          className="get-started-button1"
          onClick={() => alert('Functionality to be added for future reference')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
