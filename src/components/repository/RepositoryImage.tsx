import React from 'react';
import cl from "./Repository.module.scss";

interface IRepositoryImage {
    avatar: string
}

const RepositoryImage: React.FC<IRepositoryImage> = (props) => {
    return (
        <div className={cl.repository_image}>
            <img src={props.avatar} alt=""/>
            <div className={cl.repository_image_hide}/>
        </div>
    );
};

export default RepositoryImage;
