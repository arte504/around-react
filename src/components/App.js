import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import api from "../utils/Api";
import EditProfileModal from "./EditProfileModal";
import EditAvatarModal from "./EditAvatarModal";
import AddCardModal from "./AddCardModal"
import BigImageModal from "./BigImageModal";

export default function App() {
  // ===== Modals ===== //
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = React.useState(false);

  const [isEditAvatarModalOpen, setIsEditAvatarModalOpen] = React.useState(false);

  const [isAddCardModalOpen, setIsAddCardModalOpen] = React.useState(false);
  // --- Close modals method --- //
  function closeAllModals() {
    setIsEditProfileModalOpen(false);
    setIsEditAvatarModalOpen(false);
    setIsAddCardModalOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  // ===== Profile ===== //
  // --- State for fetching user info --- //
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
    _id: "",
  });
  // --- User info --- //
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          _id: res._id,
        });
      })
      .catch(console.log);
  }, []);
  // --- Updating profile handler --- //
  function handleUpdateUser(newData) {
    api
      .setUserInfo(newData)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          _id: res._id,
        });
        closeAllModals();
      })
      .catch(console.log);
  }
  // --- Updating avatar handler --- //
  function handleUpdateAvatar(newData) {
    api
      .setUserAvatar(newData)
      .then((res) => {
        setCurrentUser({
          name: res.name,
          about: res.about,
          avatar: res.avatar,
          _id: res._id,
        });
        closeAllModals();
      })
      .catch(console.log);
  }
  // --- Edit profile button handler --- //
  function handleEditProfile() {
    setIsEditProfileModalOpen(true);
  }
  // --- Edit avatar button handler --- //
  function handleEditAvatr() {
    setIsEditAvatarModalOpen(true);
  }
  
  // ===== Cards ===== //
  // --- States for fetching cards from the server //
  const [cards,setCards] = React.useState([]);
  // --- States for big image modal --- //
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  // --- Handle big image open --- //
  function handleOnCardClick(card) {
    setSelectedCard({
      name: card.name,
      link: card.link,
    })
  }
  // --- Card list requset from server --- //
  React.useEffect(() => {
    api
      .getCardList()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);
  // --- New card submit handler --- //
  function handleAddCardSubmit(newData) {
    api
      .addCard(newData)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllModals();
      })
      .catch(console.log);
  }
  // --- Add card modal open handler --- //
  function handleAddCard() {
    setIsAddCardModalOpen(true);
  }

  // ===== Card delete/like ===== //
  function handleCardLike(card) {
    // --- Check if card is already liked --- //
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((cardsState) =>
          cardsState.map((item) => (item._id === card._id ? newCard : item))
        );
      })
      .catch(console.log);
  }

  // --- States for card deleting --- //
  const [deleteCard, deleteCardSeter] = React.useState({
    _id: ""
  });

  // ===== DOM ===== //
  return (
      <div className='page'>
        <Header/>
        <Content
          onEditProfileClick={handleEditProfile}
          onAddCardClick={handleAddCard}
          onEditAvatarClick={handleEditAvatr}
          onDeleteCardClick
          onCardClick={handleOnCardClick}
          onCardLike={handleCardLike}
          cards={cards}
        />
        <Footer/>

        <section className='modals'>
          <EditProfileModal
            isOpened={isEditProfileModalOpen}
            onClose={closeAllModals}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarModal 
            isOpened={isEditAvatarModalOpen}
            onClose={closeAllModals}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <BigImageModal 
            card={selectedCard}
            onClose={closeAllModals}
          />

          <AddCardModal 
            isOpened={isAddCardModalOpen}
            onClose={closeAllModals}
            onAddCardSubmit={handleAddCardSubmit}
          />
        </section>
      </div>
  );
}