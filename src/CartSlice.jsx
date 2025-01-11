import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add item to the cart
    addItem: (state, action) => {
      const newItem = action.payload; // The plant details passed as payload
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        // If the item already exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },

    // Remove item from the cart
    removeItem: (state, action) => {
      const itemName = action.payload; // The name of the item to remove
      state.items = state.items.filter(item => item.name !== itemName);
    },

    // Update quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Item name and new quantity from payload
      const item = state.items.find(item => item.name === name);

      if (item) {
        // If quantity is 0 or less, remove the item
        if (quantity <= 0) {
          state.items = state.items.filter(item => item.name !== name);
        } else {
          // Otherwise, update the item's quantity
          item.quantity = quantity;
        }
      }
    },
  },
});

// Export the action creators to use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to use in store.js
export default CartSlice.reducer;
