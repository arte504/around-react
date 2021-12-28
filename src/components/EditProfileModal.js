import React from 'react';
import ModalWithForm from './ModalWithForm';
import { CurrentUserContext } from '../context/CurrentUserContext.js'

export default function EditProfileModal({ isOpened, onClose, onUpdateUser }){
    const [name, setName] = React.useState("");
    const [about, setAbout] = React.useState("");

    const currentUser = React.useContext(CurrentUserContext);

    function handleNameUpdate(evt) {
        setName(evt.target.value);
    }

    function handleAboutUpdate(evt) {
        setAbout(evt.target.value);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
    }, [currentUser] );

    function submitHandler(evt) {
        evt.preventDefault();

        onUpdateUser({
            name,
            about
        });
    }

    return(
        <ModalWithForm
            name="profile"
            title="Edit profile"
            buttonText="Save"
            isOpened={isOpened}
            onClose={onClose}
            onSubmit={submitHandler}
        >
            <input 
                className='modal__input' 
                type="text"
                id="nameInput"
                name="nameInput"
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
                id="aboutInput" 
                name="aboutInput" 
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
        </ModalWithForm>
    );
}