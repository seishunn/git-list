import {combineReducers, configureStore} from "@reduxjs/toolkit";
import repositoryReducer from "./repository-reducer";

const rootReducer = combineReducers({
    repository: repositoryReducer
});

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];