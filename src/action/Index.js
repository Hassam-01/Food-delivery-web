export const setRestaurnt = (newID) => {
    return {
        type: "SETID",
        payload: newID,
    }
}

export const setRestaurntDataAction = (restaurant) =>{
    return {
        type: "SETRESTAURANT",
        payload: restaurant,
    }
}


export const setReviewPageAction = (value) => {
    return {
        type: "SETPAGE",
        payload: value,

    }
}

export const setMaxReviewPageAction = (maxPage) => {
    return{
        type: "SETMAXPAGE",
        payload: maxPage,
    }
}
export const setReviewAction = (reviews) => {
    return{
        type: "SETREVIEWS",
        payload: reviews,
    }
}
export const setTotalRatingAction = (totalRating) => {
    return{
        type: "SETTOTALRATING",
        payload: totalRating,
    }
}
export const setTotalReviewAction = (totalReviews) => {
    return{
        type: "SETTOTALREVIEWS",
        payload: totalReviews,
    }
}

export const setPaymentModeAction = (paymentMode) =>{
    return {
        type: "SETPAYMENTMODE",
        payload: paymentMode,
    }
}

export const addToCartAction = (item) =>{
    return{
        type: "ADDTOCART",
        payload: item,
    }
}
export const removeFromCartAction = (item) =>{
    return{
        type: "REMOVEFROMCART",
        payload: item,
    }
}
export const emptyCartAction = (item) =>{
    return{
        type: "EMPTYCART",
        payload: item,
    }
}
export const setCartDetailAction = () =>{
    return{
        type: "SETCARTDETAIL",
    }
}