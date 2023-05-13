import React, {useEffect} from 'react';
import cl from "./Card.module.scss";
import {useNavigate, useParams} from "react-router-dom";
import Button from "../UI/button/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getCardRepo} from "../../actions/repository";
import Loader from "../loader/Loader";
import LineInformation from "../UI/lineInformation/LineInformation";
import CardUser from "./CardUser";

const Card: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentRepository = useAppSelector(state => state.repository.currentRepository);
    const isFetching = useAppSelector(state => state.repository.isFetching);
    const {username, repositoryName} = useParams();

    useEffect(() => {
        dispatch(getCardRepo(username!, repositoryName!));
    }, [])

    return (
        <div className={cl.main}>
            {isFetching && <Loader/>}
            <Button onClick={() => navigate(-1)}>К списку</Button>
            <div className={cl.card}>
                <CardUser
                    avatar={currentRepository.owner.avatar_url}
                    userURL={currentRepository.owner.html_url}
                    username={currentRepository.owner.login}
                />
                <div className={cl.card_repository}>
                    <div className={cl.card_repository_name}>{currentRepository.name}</div>
                    <LineInformation category={"Language"} value={currentRepository.language}/>
                    <LineInformation category={"Stars"} value={currentRepository.stargazers_count}/>
                    <LineInformation category={"Updated At"}
                                     value={new Date(currentRepository.updated_at).toLocaleDateString()}/>
                </div>
            </div>
            <div
                className={cl.card_description}>Description: <span>{currentRepository.description || "Описание отсутствует"}</span>
            </div>
        </div>
    );
};

export default Card;
