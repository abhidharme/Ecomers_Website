import { legacy_createStore , combineReducers , applyMiddleware , compose } from "redux";
import thunk from "redux-thunk"
import { cartreducer } from "./Add_To_Cart/reducer";
import { reducer } from "./Products/reducer";
import { ProdReducer } from "./Products_Category/reducer";
import { SingleProdReducer } from "./Single_Product/reducer";

const rootReducer = combineReducers({
    ecomData: reducer,
    prodcategory: ProdReducer,
    singleprod: SingleProdReducer,
    cart: cartreducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer , 
    composeEnhancer(applyMiddleware(thunk))
    )

    