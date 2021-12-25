import React from "react";
import { CurrentUserContext } from '../context/CurrentUserContext.js'

export default function Card ({
    card,
    onCardClick,
    cardLike,
    onCardDelete,
}) {
    const currentUser = React.useContext(CurrentUserContext);

    function handleClick() {
        onCardClick(card);
    }

    function handleCardLike() {
        cardLike(card);
    }

    function handleDeleteCard() {
        onCardDelete(card);
    }


    const isOwner = card.owner._id === currentUser._id;

    const cardDeleteButtonClass = `card__delete-button ${
        isOwner 
        ? 'card__delete-button'
        : 'card__delete-button_hidden'
    }`;

    const isLiked = card.likes.some((user) => 
        user._id === currentUser._id
    )

    const cardLikeButtonClass = `card__like-button ${
        isLiked && 'card__like-button_active'
    }`;

    return (
        <li className='card'>
            <img 
                src={card.link} 
                alt="default" 
                className='card__image' 
                onClick={handleClick}
                />
            <button
                className={cardDeleteButtonClass}
                type = "button"
                aria-label= "Delete button"
                onClick={handleDeleteCard}
            ></button>
            <div className='card__text'>
                <h2 className='card__title'>{card.name}</h2>
                <div className='card__like'>
                    <button 
                    className={cardLikeButtonClass}
                    type= "button"
                    onClick={handleCardLike}
                    />
                    <div className='card__like-count'></div>
                </div>
            </div>
       </li>
    )
}