import { configureStore } from '@reduxjs/toolkit';  // Import configureStore from Redux Toolkit
import cartReducer from './CartSlice';  // Import the cartReducer

// Setting up the Redux store with the cartReducer managing the 'cart' slice of the state
const store = configureStore({
    reducer: {
        cart: cartReducer,  // Cart reducer managing the cart state
    },
});

// Export the store to be used throughout the app
export default store;
