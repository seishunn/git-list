import React, {useCallback} from 'react';
import cl from "./Page.module.scss";

export interface IPageProps {
    page: number
    currentPage: number
    changePage: (page: number) => void

    [propName: string]: any
}

const Page: React.FC<IPageProps> = ({page, currentPage, changePage, ...props}) => {
    const changePageFN = useCallback(() => changePage(page), []);

    return (
        <div
            className={`${cl.page} ${currentPage === page && cl.page_active}`}
            onClick={changePageFN}
            {...props}
        >{page}</div>
    );
};

export default React.memo(Page);
