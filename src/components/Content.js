import React from "react";
import Card from "./Card"
import { CurrentUserContext } from "../context/CurrentUserContext";

export default function Content({
    onEditProfileClick,
    onAddCardClick,
    onEditAvatarClick,
    onDeleteCardClick,
    onCardClick,
    cards,
    onCardLike,
}) {
    const currentUser = React.useContext(CurrentUserContext);

    return(
        <div className='content'>
            <div className='profile'>
                <div className='profile__avatar'>
                    <img 
                        className='profile__image' 
                        src={ currentUser.avatar } 
                        alt="Avatar" />
                    <div className='profile__image-overlay'>
                        <button 
                            className='profile__image-edit'
                            type="button"
                        ></button>
                    </div>
                </div>

                <div className='profile__info'>
                    <div className='profile__text'>
                        <h1 className='profile__title'>{ currentUser.name }</h1>
                        <p className='profile__subtitle'>{ currentUser.about }</p>
                    </div>
                    <button 
                        className='button profile__edit-button' 
                        type="button"
                        aria-label="Edit button"
                        onClick={ onEditProfileClick }
                    ></button>
                </div>

                <button className='button profile__add-button' type="button"></button>
            </div>

            <div className='cards'>
                <ul className='cards__grid'>
                    {cards.map((card) => {
                        return (
                            <Card
                                card={card}
                                key={card._id}
                                onCardClick={onCardClick}
                                onCardLike={onCardLike}
                                onDeleteCardClick={onDeleteCardClick}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}