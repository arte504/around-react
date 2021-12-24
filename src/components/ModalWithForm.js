import React from 'react';

export default function ModalWithForm(props) {
    return(
        <div 
            className={`modal modal__type_${props.name} 
            ${props.isOpened} 
            ? "modal_visible" 
            : ''`}
        >
            <form 
                className={`modal__container modal__container_type_${props.name}`}>

                <button
                    className='modal__close-button'
                    type="reset"
                    onClick={props.closeModal}
                />

                <h2 className='modal__header'>
                    {props.title}
                </h2>

                {props.children}
                
                <button
                    className='modal__submit-button'
                    type="submit"
                >
                    {props.buttonText}
                </button>
            </form>
        </div>
    );
}