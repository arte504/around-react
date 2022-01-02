import React from "react";

export default function BigImageModal({ card, onClose }) {
    return(
        <div className={`modal modal_type_big-image ${card.name ? 'modal_visible' : ''}`}>
            <div className='modal__container modal__container_type_big-image'>
                <button 
                    className='modal__close-button modal__close-button_type_big-image'
                    type="button"
                    onClick={onClose}
                ></button>
                <figure className='modal__image'>
                    <img 
                        src={card.link} 
                        alt="Full size image of the image the user clicked on." 
                        className="modal__big-image"/>
                    <figcaption className='modal__image-caption'>
                        {card.name}
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}