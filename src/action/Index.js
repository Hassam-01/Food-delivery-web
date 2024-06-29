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

// export const setTitleAction = () =>{
//     return{
//         type: "SETTITLE",
//     }
// }

// export const seRestaurantNameAction = (name) =>{
//     return{
//         type: "SETTITLE",
//         payload: restaurant
//     }
// }