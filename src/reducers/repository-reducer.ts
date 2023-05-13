import {createSlice} from "@reduxjs/toolkit";

interface IRepo {
    id: null | number
    full_name: string
    created_at: string
    description: string
    html_url: string
    name: string
    pushed_at: string
    stargazers_count: number
    updated_at: string
    language: string
    owner: {
        id: null | number,
        avatar_url: string,
        login: string,
        html_url: string
    }
}

interface IInitialState {
    items: IRepo[]
    currentRepository: IRepo
    isFetching: boolean
    totalCount: number
    currentPage: number
    perPage: number
}

const initialState: IInitialState = {
    items: [],
    currentRepository: {
        id: null,
        full_name: "",
        created_at: "",
        description: "",
        html_url: "",
        name: "",
        pushed_at: "",
        stargazers_count: 0,
        updated_at: "",
        language: "",
        owner: {
            id: null,
            avatar_url: "",
            login: "",
            html_url: ""
        }
    },
    isFetching: false,
    totalCount: 0,
    currentPage: 1,
    perPage: 10
};

export const repositoryReducer = createSlice({
    name: "repositoryReducer",
    initialState,
    reducers: {
        setRepositories(state, action) {
            state.items = action.payload.items;
            state.totalCount = action.payload.total_count;
        },
        setIsFetching(state, action) {
            state.isFetching = action.payload;
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setCurrentRepository(state, action) {
            state.currentRepository = action.payload;
        }
    }
})

export default repositoryReducer.reducer;