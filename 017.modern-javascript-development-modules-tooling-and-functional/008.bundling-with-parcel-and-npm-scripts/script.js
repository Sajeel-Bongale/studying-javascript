import {cloneDeep} from "lodash-es";
// Importing this for the purpose of parcel demonstration
import {addToCart} from "./shoppingCart";

const state = {
    cart: [
        {product: 'Pizza', quantity: 3},
        {product: 'Bread', quantity: 2}
    ],
    user: {loggedIn: true}
};

// Make copies
const stateShallowCopy = Object.assign({}, state);
const stateDeepCopy = cloneDeep(state);

// Modify original state object
state.user.loggedIn = false;

// Verify new values
console.log(stateShallowCopy.user.loggedIn); // prints false
console.log(stateDeepCopy.user.loggedIn); // prints true

// Execute imported function
addToCart(state.cart[0].product, state.cart[0].quantity);

if (module.hot) {
    module.hot.accept();
}
