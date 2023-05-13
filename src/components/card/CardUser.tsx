import React from 'react';
import cl from "./Card.module.scss";

interface ICardUserProps {
    avatar: string
    userURL: string
    username: string
}

const CardUser: React.FC<ICardUserProps> = ({avatar, userURL, username}) => {
    return (
        <div className={cl.card_user}>
            <div className={cl.card_image}>
                <img src={avatar} alt=""/>
            </div>
            <div className={cl.card_info}>
                <a href={userURL}
                   className={cl.card_name}>{username}</a>
            </div>
        </div>
    );
};

export default React.memo(CardUser);
