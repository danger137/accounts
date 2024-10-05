import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";

let baraWalaReducer = combineReducers({
    authSlice:authSlice.reducer,
})

 let meraStore2 = configureStore({
 reducer:baraWalaReducer
   

})

export default meraStore2;

