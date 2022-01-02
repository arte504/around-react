import React from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditProfileModal({ isOpened, onClose, onUpdateUser }){
    const [name, setName] = React.useState("");
    const [about, setAbout] = React.useState("");

    const [currentUser, setCurrentUser] = React.useState({
        name: "",
        about: "",
    });

    function handleNameUpdate(evt) {
        setName(evt.target.value);
    }

    function handleAboutUpdate(evt) {
        setAbout(evt.target.value);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser]);

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateUser({
            name,
            about
        });
    }

    return(
        <PopupWithForm
            name="profile"
            title="Edit profile"
            buttonText="Save"
            isOpened={isOpened}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input 
                className='modal__input' 
                type="text"
                id="name-input"
                name="name-input"
                placeholder="Name"
                value={name}
                onChange={handleNameUpdate}
                minLength="2"
                maxLength="40"
                required
            />
            <span 
                id="nameInput_error"
                className='modal__error modal__span'
            >
            </span>
            <input
                className='modal__input'
                type="text"
                id="about-input" 
                name="about-input" 
                placeholder="About"
                value={about}
                onChange={handleAboutUpdate}
                minLength="2" 
                maxLength="200" 
                required
            />
            <span 
                id="aboutInput_error"
                className='modal__error modal__span'
            > 
            </span>
        </PopupWithForm>
    );
}