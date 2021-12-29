import React from "react";
import ModalWithForm from "./ModalWithForm";

export default function EditAvatarModal({ isOpened, onClose, onUpdateAvatar }) {
  const avatarLink = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarLink.current.value,
    });
  }
  
  return (
    <ModalWithForm
      name="avatar"
      title="Change profile picture"
      buttonText="Save"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="modal__input"
        id="avatar-link"
        type="url"
        name="link"
        placeholder="Avatar link"
        ref={avatarLink}
        required
      />
      <span 
        id="avatarLinkInput_error"
        className='modal__error modal__span'  
      ></span>
    </ModalWithForm>
  );
}