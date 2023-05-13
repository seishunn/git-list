import axios from "axios";
import {AppDispatch} from "../reducers";

// Reducers
import {repositoryReducer} from "../reducers/repository-reducer";
// Actions
const {setRepositories, setIsFetching, setCurrentRepository} = repositoryReducer.actions;

const instance = axios.create({
    baseURL: "https://api.github.com/"
})

export const getRepository = (searchQuery: string = "", currentPage: number, perPage: number) => {
    if (!searchQuery) {
        searchQuery = "stars:%3E1"
    }

    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await instance.get(`search/repositories?q=${searchQuery}&sort=stars&page=${currentPage}&per_page=${perPage}`);
            dispatch(setRepositories(response.data));
            dispatch(setIsFetching(false));
        } catch (err) {
            alert((err as Error).message);
        }
    }
}

export const getCardRepo = (username: string, repositoryName: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(setIsFetching(true));
            const response = await instance.get(`repos/${username}/${repositoryName}`);
            dispatch(setCurrentRepository(response.data));
            console.log(response.data)
            dispatch(setIsFetching(false));
        } catch (err) {
            alert((err as Error).message);
        }
    }
}