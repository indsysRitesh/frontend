// // src/redux/reducers/itemReducer.js
// const initialState = {
//     items: []
//   };
  
//   const itemReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_ITEM':
//         return {
//           ...state,
//           items: [...state.items, action.payload]
//         };
//       case 'DELETE_ITEM':
//         return {
//           ...state,
//           items: state.items.filter(item => item.id !== action.payload)
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default itemReducer;
//   // itemsReducer.js

const initialState = {
  cartItems: [], // Initialize cartItems as an empty array
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload], // Add the new item to the cartItems array
      };
      case 'DELETE_ITEM':
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.id !== action.payload), // Remove the item with the matching id
        };
    default:
      return state;
  }
};

export default itemsReducer;

  