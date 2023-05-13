import React from 'react';
import cl from "./Repository.module.scss";

interface IRepositoryInfo {
    htmlURL: string
    fullName: string
    description: string
    starsCounter: null | number
    updatedAt: string
    createdAt: string
    pushedAt: string
}

const RepositoryInfo: React.FC<IRepositoryInfo> = (props) => {
    return (
        <div className={cl.repository_info} onClick={e => e.stopPropagation()}>
            <a href={props.htmlURL} className={cl.repository_name}>{props.fullName}</a>
            <div className={cl.repository_description}>{props.description}</div>
            <div className={cl.repository_footer}>
                <div>Stars: {props.starsCounter}</div>
                <div>Updated at: {new Date(props.updatedAt).toLocaleDateString()}</div>
                <div>Created at: {new Date(props.createdAt).toLocaleDateString()}</div>
                <div>Pushed at: {new Date(props.pushedAt).toLocaleDateString()}</div>
            </div>
        </div>
    );
};

export default RepositoryInfo;
