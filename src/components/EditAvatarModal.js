import React from "react";
import ModalWithForm from "./ModalWithForm";

export default function EditAvatarModal({ isOpened, onClose, onUpdateAvatar }) {
  const avatarLink = React.useRef();

  function submitHandler(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: avatarLink.current.value,
    });
  }

  return (
    <ModalWithForm
      name="avatar"
      title="Change profile picture"
      buttonTitle="Save"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={submitHandler}
    >
      <input
        className="modal__input"
        id="avatarLinkInput"
        type="url"
        name="avatarLinkInput"
        placeholder="Image link"
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