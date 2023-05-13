import React from 'react';
import cl from "./Paginator.module.scss";
import Page from "./page/Page";

interface IPaginatorProps {
    pages: number []
    currentPage: number
    changePage: (page: number) => void
    totalCount: number
    perPage: number
}

const Paginator: React.FC<IPaginatorProps> = ({pages, currentPage, changePage, totalCount, perPage}) => {
    return (
        <div className={cl.paginator}>
            {currentPage > 4 &&
                <>
                    <Page
                        page={1}
                        currentPage={currentPage}
                        changePage={changePage}
                    />
                    <div className={cl.dots}>...</div>
                </>
            }
            {pages.map(page =>
                <Page
                    key={page}
                    page={page}
                    currentPage={currentPage}
                    changePage={changePage}
                />
            )}
        </div>
    );
};

export default React.memo(Paginator);
