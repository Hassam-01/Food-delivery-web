const initialState = {
    restaurantID: 0,
    restaurantData: [],
    bannerTitle: "In your town!",
    restaurantName: "Best Delivery App",
  };
  
  const setID = (state = initialState, action) => {
    switch (action.type) {
      case "SETID": {
        const newState = {...state}
        newState.restaurantID = action.payload
        return newState
      }
      case "SETRESTAURANT": {
        const newState = {...state};
        newState.restaurantData= action.payload
          newState.restaurantName= action.payload.restaurant_name
          newState.bannerTitle= "I'm lovin it!"
        return newState
      }
      default:
        return state;
    }
  };
  
  export default setID;
  