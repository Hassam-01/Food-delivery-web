const initialState = {
    restaurantID: 0,
}

const setID = (state = initialState, action) => {
    switch(action.type){
        case "SETID": {
            state.restaurantID = action.payload;
            return state;
        }
        default: return state;
    }

};

export default setID;