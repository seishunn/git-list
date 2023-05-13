import React, {useCallback, useEffect, useState} from 'react';
import {getRepository} from "../../actions/repository";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import cl from "./Main.module.scss";
import Repository from "../repository/Repository";
import InputSearch from "../UI/inputSearch/InputSearch";
import Loader from "../loader/Loader";
import {debounceFN} from "../../utils/debounceFN";
import Paginator from "../paginator/Paginator";
import {pagesArray} from "../../utils/pagesArray";

// Reducers
import {repositoryReducer} from "../../reducers/repository-reducer";
// Actions
const {setCurrentPage} = repositoryReducer.actions;

const Main = () => {
    const dispatch = useAppDispatch();
    const repositories = useAppSelector(state => state.repository.items);
    const isFetching = useAppSelector(state => state.repository.isFetching);
    const currentPage = useAppSelector(state => state.repository.currentPage);
    const perPage = useAppSelector(state => state.repository.perPage);
    const totalCount = useAppSelector(state => state.repository.totalCount);
    const pagesCount = Math.ceil(totalCount / perPage);
    const pages = pagesArray(pagesCount, currentPage);

    const [searchQuery, setSearchQuery] = useState(localStorage.getItem("searchQuery") || "");

    const searchRepositories: (str: string) => void = useCallback(debounceFN((str: string) => {
        dispatch(setCurrentPage(1));
        dispatch(getRepository(str, currentPage, perPage));
        localStorage.setItem("searchQuery", str);
    }, 700), [])
    const changePage: (page: number) => void = useCallback((page: number) => {
        dispatch(setCurrentPage(page));
        localStorage.setItem("currentPage", String(page));
    }, []);

    useEffect(() => {
        if (localStorage.getItem("currentPage")) {
            dispatch(setCurrentPage(+localStorage.getItem("currentPage")!));
        }
        dispatch(getRepository(searchQuery, currentPage, 10));
    }, [currentPage])

    const searchQueryFN = (str: string) => {
        setSearchQuery(str);
        searchRepositories(str);
    }

    return (
        <div className={cl.main}>
            {isFetching && <Loader/>}
            <div className={cl.main_search}>
                <InputSearch
                    value={searchQuery}
                    changeValue={searchQueryFN}
                    placeholder="Search repository"
                />
            </div>
            <div className={cl.repositories_list}>
                {repositories.map(repository =>
                    <Repository
                        key={repository.id}
                        repository={repository}
                    />
                )}
            </div>
            <Paginator
                pages={pages}
                currentPage={currentPage}
                changePage={changePage}
                totalCount={totalCount}
                perPage={perPage}
            />
        </div>
    );
};

export default Main;
