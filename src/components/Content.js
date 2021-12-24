import React from "react";
import avatar from "../images/profileImg.jpg";

export default function Content() {
    return(
        <div className='content'>
            <div className='profile'>
                <div className='profile__avatar'>
                    <img className='profile__image' src={avatar} alt="Avatar image" />
                    <div className='profile__image-overlay'>
                        <button className='profile__image-edit'></button>
                    </div>
                </div>

                <div className='profile__info'>
                    <div className='profile__text'>
                        <h1 className='profile__title'>Artiom Shlyusberg</h1>
                        <p className='profile__subtitle'>Junior Web Dev</p>
                    </div>
                    <button className='button profile__edit-button' type="button"></button>
                </div>

                <button className='button profile__add-button' type="button"></button>
            </div>

            <div className='cards'>
                <ul className='cards__grid'>
                    
                </ul>
            </div>
        </div>
    );
}