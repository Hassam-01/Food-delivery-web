import { combineReducers } from '@reduxjs/toolkit';
import setID from "./SetRestaurant";

const rootReducer = combineReducers({
    restaurants: setID,
});

export default rootReducer;
