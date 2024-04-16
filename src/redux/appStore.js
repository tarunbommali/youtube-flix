import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
    reducer : {
        app: appSlice,
        cacheSearchResult : searchSlice
    }
})

export default store; 