import React from "react";
import Card from "./Card";
import api from "../utils/Api";

export default function Content({
    onEditProfileClick,
    onAddCardClick,
    onEditAvatarClick,
    onDeleteCardClick,
    onCardClick,
    onCardLike,
    cards
}) {
    const [userName, setUserName] = React.useState('');
    const [userAbout, setUserAbout] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    React.useEffect(() => {
    api
        .getUserInfo()
        .then((res) => {
            setUserName(res['name']);
            setUserAbout(res['about']);
            setUserAvatar(res['avatar']);
        })
        .catch(console.log);
    });

    return(
        <div className='content'>
            <section className='profile'>
                <div className='profile__avatar'>
                    <img 
                        className='profile__image' 
                        src={ userAvatar } 
                        alt="Avatar" />
                    <div 
                        className='profile__image-overlay'
                        onClick={ onEditAvatarClick }
                    >
                        <button 
                            className='profile__image-edit'
                            type="button"
                            aria-label="Edit avatar button"
                        ></button>
                    </div>
                </div>

                <div className='profile__info'>
                    <div className='profile__text'>
                        <h1 className='profile__title'>{ userName }</h1>
                        <p className='profile__subtitle'>{ userAbout }</p>
                    </div>
                    <button 
                        className='profile__edit-button' 
                        type="button"
                        aria-label="Edit profile button"
                        onClick={ onEditProfileClick }
                    ></button>
                </div>

                <button 
                    className='profile__add-button' 
                    type="button"
                    aria-label="Add card button"
                    onClick={ onAddCardClick }
                ></button>
            </section>

            <section className='cards'>
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
            </section>
        </div>
    );
}