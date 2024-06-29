import { legacy_createStore as createStore } from "@reduxjs/toolkit";

import rootReducer from "./reducer/Index";


const Store = createStore(rootReducer);

export default Store;

export const useAppDispatch = Store.dispatch;