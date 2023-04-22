import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cardReducer from "./cards/reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cards"],
};

const rootReducer = combineReducers({
    cards: cardReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
    const store = createStore(persistedReducer, composeWithDevTools());
    const persistor = persistStore(store);
    return { store, persistor };
};

export default configureStore;