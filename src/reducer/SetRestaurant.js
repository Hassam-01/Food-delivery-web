const initialState = {
    restaurantID: 0,
    restaurantData: [],
    bannerTitle: "In your town!",
    restaurantName: "Best Delivery App",
    reviewPage: 0,
    maxReviewPage: 1,
    reviews: [],
    totalRating: 0,
    totalReviews: 0,
    paymentMode: "COD",
    cart: [],
    cartDetail: [{totalQuantity:0, totalPrice: 0}],
};

const setID = (state = initialState, action) => {
    switch (action.type) {
        case "SETID": {
            const newState = { ...state }
            newState.restaurantID = action.payload
            return newState
        }
        case "SETRESTAURANT": {
            const newState = { ...state };
            newState.restaurantData = action.payload
            newState.restaurantName = action.payload.restaurant_name
            newState.bannerTitle = "I'm lovin it!"
            return newState
        }
        case "SETPAGE": {
            const newState = { ...state };
            if ((newState.maxReviewPage === newState.reviewPage + 1 && action.payload === 1) || (newState.reviewPage === 0 && action.payload === -1)) {
                return newState

            }
            else {
                newState.reviewPage = newState.reviewPage + action.payload;
                return newState
            }
        }
        case "SETMAXPAGE": {
            return {
                ...state,
                maxReviewPage: action.payload
            }
        }
        case "SETREVIEWS": {
            return {
                ...state,
                maxReviewPage: action.payload
            }
        }
        case "SETTOTALREVIEWS": {
            return {
                ...state,
                totalReviews: action.payload
            }
        }
        case "SETTOTALRATING": {
            return {
                ...state,
                totalRating: action.payload
            }
        }
        case "SETPAYMENTMODE": {
            return {
                ...state,
                paymentMode: action.payload

            }
        }
        case "ADDTOCART": {
            const item = action.payload;
            const itemInCart = state.cart.find((cartItem) => (cartItem.id === item.id));

            if (itemInCart) {
                const updatedCart = state.cart.map((cartItem) =>
                    (cartItem.id === item.id)
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                        );
                    // console.log(updatedCart);
                return {
                    ...state,
                    cart: updatedCart
                    };
            } else {
                const updatedCart = [...state.cart, { ...item, quantity: 1 }];
                // console.log(updatedCart);
                return {
                    ...state,
                    cart: updatedCart
                };
            }
        }
        case "REMOVEFROMCART": {
            const item = action.payload;
            const itemInCart = state.cart.find((cartItem) => (cartItem.id === item.id));

            if (itemInCart) {
                const updatedCart = state.cart.map((cartItem) =>
                    (cartItem.id === item.id) && cartItem.quantity > 0 ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
                return {
                    ...state,
                    cart: updatedCart
                };
            } else {
                return {
                    ...state,
                    cart: state.cart
                };
            }
        }
        case "EMPTYCART":{
            return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };

        }
        case "SETCARTDETAIL": {
            const newState = {...state};

            const totalPrice = (newState.cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
      const totalQuantity = newState.cart.reduce((acc, item) => acc + item.quantity, 0);
      
        const updatedCart = [{totalQuantity, totalPrice}];
      return{
                ...state,
                cartDetail: updatedCart
            }
        }
        default:
            return state;
    }
};

export default setID;
