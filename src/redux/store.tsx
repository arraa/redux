import { StoreEnhancer, createStore } from "redux";

import reducers from "./reducers/index";

interface ExtendedWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION__?: () => StoreEnhancer | undefined;
}

declare let window: ExtendedWindow;

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
