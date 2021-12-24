const fetching = (url, headers) => {
  return fetch(url, headers)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }

      Promise.reject(`ERROR: ${res.statusText}`);
    })
};

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
      fetching(`${this._baseUrl}/cards`, {
        headers: this._headers
      })
      .then(this._response)
    );
  }
  // --- Get user info from the server --- //
  getUserInfo() {
    return fetching(`${this._baseUrl}/users/me`, {
        headers: this._headers
      })
      .then(this._response)
  }
  // --- Updating/Editing user profile info --- //
  setUserInfo(name, about) {
    return fetching(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(
        name, 
        about
      )
    })
    .then(this._response)
  }
  // --- Adding new card --- //
  addCard(data) {
    console.log(data);
    return fetching(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(
        data.titleInput, 
        data.linkInput
      )
    })
    .then(this._response)
  }
  // --- Removing a card --- //
  removeCard(cardId) {
    return fetching(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE"
    })
    .then(this._response)
  }
  // --- Like a card --- //
  likeCard(cardId) {
    return fetching(`${this._baseUrl}/cards/likes/${cardId}`, {
      headers: this._headers,
      method: "PUT"
    })
    .then(this._response)
  }
  // --- Unlike a card --- //
  unlikeCard(cardId) {
    return fetching(`${this._baseUrl}/cards/likes/${cardId}` , {
      headers: this._headers,
      method: "DELETE"
    })
    .then(this._response)
  }
  // --- Setting user profile avatar --- //
  setUserAvatar(avatar) {
    return fetching(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(
          avatar
      )
    })
    .then(this._response)
  }
}

const api = new Api("https://around.nomoreparties.co/v1/group-12", {
    authorization: "709a0d9d-db06-4890-a594-b07e7309a353",
    'Content-Type': 'application/json' 
  }
);
export default api;