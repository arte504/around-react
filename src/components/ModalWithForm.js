import React from 'react';

export default function ModalWithForm(props) {
    return(
        <div 
            className={`modal modal_type_${props.name} ${props.isOpened ? "modal_visible" : ''}`}
        >
            <form 
                className={`modal__container modal__container_type_form`}>

                <button
                    className='modal__close-button'
                    type="button"
                    onClick={props.onClose}
                />

                <h2 className='modal__header'>
                    {props.title}
                </h2>

                <fieldset className='modal__fields'>
                    {props.children}

                    <button
                        className='modal__submit-button'
                        type="submit"
                    >
                    Save
                    </button>
                </fieldset>
            </form>
        </div>
    );
}