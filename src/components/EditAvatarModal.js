import React from "react";
import ModalWithForm from "./ModalWithForm";
import api from "../utils/Api";

export default function EditAvatarModal({ isOpened, onClose, onUpdateAvatar }) {
  const [avatar, setAvatar] = React.useState("");

  const [currentUser, setCurrentUser] = React.useState({
    avatar: "",
  })

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser({
          avatar: res.avatar,
        });
      })
      .catch(console.log);
  }, []);

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
        onChange={handleAvatarUpdate}
        required
      />
      <span 
        id="avatarLinkInput_error"
        className='modal__error modal__span'  
      ></span>
    </ModalWithForm>
  );
}