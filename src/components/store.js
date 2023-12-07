import { createStore, combineReducers,applyMiddleware } from "redux";
import { thunk } from "redux-thunk";


//reducer
const reducer=combineReducers({

})

//create middleware
const middleware=[thunk]

//create store
 const store=createStore(reducer,applyMiddleware(...middleware))

 export default store;