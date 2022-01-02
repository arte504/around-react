import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddCardModal({isOpened, onClose, onAddCardSubmit}) {
  const [cardName, setCardName] = React.useState("");
  const [cardLink, setCardLink] = React.useState("");

  function handleCardNameChange(evt) {
    setCardName(evt.target.value);
  }

  function handleCardLinkChange(evt) {
    setCardLink(evt.target.value);
  }

  function submitHandler(evt) {
    evt.preventDefault();

    // Pass the values to the external handler
    onAddCardSubmit({
        name: cardName,
        link: cardLink
    });
  }

  return (
    <PopupWithForm
      name="new-card"
      title="New place"
      buttonText="Create"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={submitHandler}
    >
      <input
        className="modal__input"
        id="title-input"
        type="text"
        name="name"
        value={cardName}
        onChange={handleCardNameChange}
        placeholder="Title"
        minLength="1"
        maxLength="30"
        required
      />
      <span id="title-input-error"></span>
      <input
        className="modal__input"
        id="link-input"
        type="url"
        name="link"
        value={cardLink}
        onChange={handleCardLinkChange}
        placeholder="Image link"
        required
      />
      <span id="link-input-error"></span>
    </ModalWithForm>
  );
}