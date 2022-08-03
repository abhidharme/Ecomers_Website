import { legacy_createStore , combineReducers , applyMiddleware , compose } from "redux";
import thunk from "redux-thunk"
import { cartreducer } from "./Add_To_Cart/reducer";
import { loginReducer } from "./LoginRedux/reducer";
import { orderreducer } from "./Order/reducer";
import { reducer } from "./Products/reducer";
import { ProdReducer } from "./Products_Category/reducer";
import { signupReducer } from "./SignupRedux/reducer";
import { SingleProdReducer } from "./Single_Product/reducer";

const rootReducer = combineReducers({
    ecomData: reducer,
    prodcategory: ProdReducer,
    singleprod: SingleProdReducer,
    cart: cartreducer,
    order: orderreducer,
    sign: signupReducer,
    login:loginReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer , 
    composeEnhancer(applyMiddleware(thunk))
    )

    