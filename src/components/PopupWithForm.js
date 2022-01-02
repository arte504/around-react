import React from 'react';

export default function PopupWithForm(props) {
    return(
        <div className={`modal modal_type_${props.name} ${props.isOpened ? "modal_visible" : ''}`}>
            <form 
                className={`modal__container modal__container_type_form`}
                name={`${props.name}`}
            >
                <button
                    className='modal__close-button'
                    type='button'
                    onClick={props.onClose}
                />
                <fieldset className='modal__fields'>
                    <h2 className='modal__header'>
                        {props.title}
                    </h2>
                    {props.children}
                    <button
                        className='modal__submit-button'
                        type='submit'
                        onClick={props.onSubmit}
                    >
                    {props.buttonText}
                    </button>
                </fieldset>
            </form>
        </div>
    );
}