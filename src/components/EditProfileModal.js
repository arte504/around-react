import React from 'react';
import ModalWithForm from './ModalWithForm';
import { CurrentUserContext } from '../context/CurrentUserContext.js'

export default function EditProfileModal({ isOpend, closeModal,updateUserInfo }){
    const [name, setName] = React.useState("");
    const [job, setJob] = React.useState("");

    function handleNameUpdate(evt) {
        setName(evt.target.value);
    }

    function handleJobUpdate(evt) {
        setJob(evt.target.value);
    }

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setJob(currentUser.about);
    }, [currentUser] );

    function submitHandler(evt) {
        evt.preventDefault();

        updateUserInfo({
            name,
            about: job
        });
    }

    return(
        <ModalWithForm
            name="profile"
            title="Edit profile"
            buttonText="Save"
            isOpend={isOpend}
            closeModal={closeModal}
            onSubmit={submitHandler}
        >
            <input 
                className='modal__input modal__input_type_title' 
                type="text"
                id="nameInput"
                name="nameInput"
                placeholder="Name"
                value={name}
                onChange={handleNameUpdate}
                minlength="2"
                maxlength="40"
                required
            />
            <span 
                id="nameInput_error"
                className='modal__error modal__span'
                > 
            </span>
            <input
                className='modal__input modal__input_type_subtitle'
                type="text"
                id="jobInput" 
                name="jobInput" 
                placeholder="Job"
                value={job}
                onChange={handleJobUpdate}
                minlength="2" 
                maxlength="200" 
                required
            />
            <span 
                id="jobInput_error"
                className='modal__error modal__span'
                > 
            </span>
        </ModalWithForm>
    );
}