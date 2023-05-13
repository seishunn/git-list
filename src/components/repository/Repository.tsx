import React from 'react';
import cl from "./Repository.module.scss";
import RepositoryInfo from "./RepositoryInfo";
import RepositoryImage from "./RepositoryImage";
import {NavLink} from "react-router-dom";

interface IRepository {
    id: number | null,
    name: string,
    full_name: string,
    owner: {
        login: string,
        id: number | null,
        avatar_url: string
    },
    stargazers_count: number,
    created_at: string,
    updated_at: string,
    pushed_at: string,
    html_url: string,
    description: string
}

interface IRepositoryProps {
    repository: IRepository
}

const Repository: React.FC<IRepositoryProps> = ({repository}) => {
    return (
        <NavLink to={`/card/${repository.owner.login}/${repository.name}`} className={cl.repository}>
            <RepositoryImage avatar={repository.owner.avatar_url}/>
            <RepositoryInfo
                htmlURL={repository.html_url}
                fullName={repository.full_name}
                description={repository.description}
                starsCounter={repository.stargazers_count}
                updatedAt={repository.updated_at}
                createdAt={repository.created_at}
                pushedAt={repository.pushed_at}
            />
        </NavLink>
    );
};

export default React.memo(Repository);
