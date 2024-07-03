const initialState = {
    restaurantID: 0,
    restaurantData: [],
    bannerTitle: "In your town!",
    restaurantName: "Best Delivery App",
    reviewPage: 0,
    maxReviewPage: 1,
    reviews: [],
    totalRating: 0,
    totalReviews:0,
    paymentMode: "COD",
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
            // console.log("FROM REDUCER "+ state.maxReviewPage +" "+ )
            if ((newState.maxReviewPage === newState.reviewPage+1 && action.payload === 1) || (newState.reviewPage === 0 && action.payload === -1)) {
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
            return{
                ...state,
                paymentMode: action.payload
                
            }
        }
        default:
            return state;
    }
};

export default setID;
