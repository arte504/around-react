class Api {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }
  // --- Global API response method --- //
  _response(res) {
    return res.ok
    ? res.json()
    : Promise.reject(`Error: ${res.status} - ${res.statusText}`);
  }
  // --- Get card list from the server --- //
  getCardList() {
    return (
      fetch(`${this._baseUrl}/cards`, {
        headers: this._headers
      })
      .then(this._response)
    );
  }
  // --- Get user info from the server --- //
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers
      })
      .then(this._response)
  }
  // --- Updating/Editing user profile info --- //
  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: data.name, 
        about: data.about
      }),
    })
    .then(this._response)
  }
  // --- Adding new card --- //
  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        name: data.name, 
        link: data.link
      }),
    })
    .then(this._response)
  }
  // --- Removing a card --- //
  removeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE"
    })
    .then(this._response)
  }
  // --- Like a card --- //
  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: "PUT"
    })
    .then(this._response)
  }
  // --- Unlike a card --- //
  unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}` , {
      headers: this._headers,
      method: "DELETE"
    })
    .then(this._response)
  }
  // --- Toggle like with the use of like/unlike functions --- //
  changeLikeCardStatus(cardID, isLiked){
    if (isLiked){
      return this.unlikeCard(cardID);
    } else {
      return this.likeCard(cardID);
    }
  }
  // --- Setting user profile avatar --- //
  setUserAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
          avatar: data.avatar
      })
    })
    .then(this._response)
  }
}

const api = new Api({
  baseUrl:"https://around.nomoreparties.co/v1/group-12", 
  headers:
  {
    authorization: "709a0d9d-db06-4890-a594-b07e7309a353",
    'Content-Type': 'application/json' 
  }
});

export default api;