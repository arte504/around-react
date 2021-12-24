import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import api from "./Api"
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import EditProfileModal from "./EditProfileModal";

export default function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
    _id: "",
  });
  
  const [cards,setCards] = React.useState([]);

  const [deleteCard, deleteCardSeter] = React.useState({
    _id: ""
  })

  React.useEffect(() => {
    api
      .getCardList()
      .then((res) => {
        setCards(res);
      })
      .catch(console.log);
  }, []);

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


  return (
    <div className='page'>
      <Header/>
      <Content
      cards={cards}
      />
      <Footer/>
    </div>
  );
}