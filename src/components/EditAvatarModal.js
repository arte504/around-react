import React from "react";
import PopupWithForm from "./PopupWithForm";
import api from "../utils/Api";

export default function EditAvatarModal({ isOpened, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = React.useState("");

  const [currentUser, setCurrentUser] = React.useState({
    avatar: "",
  });

  function handleAvatarUpdate(evt) {
    setAvatar(evt.target.value);
  }

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
}, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar,
    });
  }
  
  return (
    <PopupWithForm
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
        onChange={handleAvatarUpdate}
        required
      />
      <span 
        id="avatarLinkInput_error"
        className='modal__error modal__span'  
      ></span>
    </PopupWithForm>
  );
}