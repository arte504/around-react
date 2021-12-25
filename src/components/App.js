import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Api from "./Api"
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import EditProfileModal from "./EditProfileModal";

export default function App() {
  // ===== API ===== //
  // --- Api Config --- //
  const apiConfig = {
    baseUrl:"https://around.nomoreparties.co/v1/group-12", 
    headers:
    {
      authorization: "709a0d9d-db06-4890-a594-b07e7309a353",
      'Content-Type': 'application/json' 
    }
  }
  // --- Create api fetching request --- //
  const api = new Api(apiConfig);

  // ===== Modals ===== //
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] =
    React.useState(false);
  
  function closeAllModals() {
    setIsEditProfileModalOpen(false);
  }
  // ===== User ===== //
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

  function handleEditProfile() {
    setIsEditProfileModalOpen(true);
  }

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

  // ===== Cards ===== //
  // --- States for fetching cards from the server //
  const [cards,setCards] = React.useState([]);
  // --- States for big image modal --- //
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });
  // --- States for card deleting --- //
  const [deleteCard, deleteCardSeter] = React.useState({
    _id: ""
  })
  // --- Card list requset from server --- //
  React.useEffect(() => {
    api
      .getCardList()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);

  console.log(cards);
  // ===== DOM ===== //
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Header/>
        <Content
          onEditProfileClick={handleEditProfile}
          onAddCardClick
          onEditAvatarClick
          onDeleteCardClick
          onCardClick
          onCardLike
          cards={cards}
        />
        <Footer/>

        <section>
          <EditProfileModal
            isOpend={isEditProfileModalOpen}
            onClose={closeAllModals}
            onUpdateUser={handleUpdateUser}
          />
        </section>
      </div>
    </CurrentUserContext.Provider>
  );
}