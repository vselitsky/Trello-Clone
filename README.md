# README

# Yello

### [View the live site](https://yello-fsp.herokuapp.com/#/)

### Description

**Yello** is a single-page, full stack web application **(SPA)** inspired by Trello where users can create, manage and organize their personal boards, lists and cards.

### Screenshots

![trelloa-v3](https://user-images.githubusercontent.com/41927284/69694802-ea44cf80-108e-11ea-84ae-a880198ca47d.gif)

### Key Features

#### User Authentication

- Users can sign up or log in to use the application
- Users can also log in through a demo account

User credentials are securely hashed, salted, and stored as a password digest

```ruby
class User < ApplicationRecord
  validates :username, :session_token, uniqueness: true
  validates :username, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  // ..

  attr_reader :password
  before_validation :ensure_session_token

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user
    @user.is_password?(password) ? @user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
  end
end

```

#### Boards

- User can create, update and delete their boards.
- User can quickly access their most recently visited boards.

```javascript
class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { recentBoards: this.props.recentActiveBoards || [] };
  }

  componentDidMount() {
    this.props.fetchAllBoards();
  }

  renderBoards() {
    const boards = Object.values(this.props.boards);

    if (boards.length === 0) {
      return;
    }

    return boards.map(board => {
      return (
        <BoardIndexItem
          board={board}
          key={board.id}
          recentBoards={this.state.recentBoards}
          updateMostRecentBoards={this.props.updateMostRecentBoards}
          user={this.props.user}
          update={this.props.update}
        />
      );
    });
  }

  renderMostActiveBoards() {
    const recents = this.state.recentBoards;
    const allBoards = this.props.boards;
    if (Object.values(allBoards).length < recents.length) {
      return <p>Loading...</p>;
    }
    return recents.map((id, idx) => {
      let board = allBoards[id];
      return <BoardIndexItem board={board} key={idx} />;
    });
  }
}
```

### Lists and Cards

- User can create, edit and delete their lists and cards
- User can drag and drop their lists and cards and Redux middleware will persist the updated order to backend

```javascript
const persistenceMiddleware = store => dispatch => action => {
  const result = dispatch(action);

  if (persistenceActionTypes.indexOf(action.type) > -1) {
    if (action.type === "REMOVE_BOARD") {
      let newState = store.getState();
      updateUser(action, newState);
    } else if (action.type === "REMOVE_LIST") {
      let newState = store.getState();
      removeListfromBoard(action, newState);
    } else if (action.type === "REMOVE_CARD") {
      let newState = store.getState();
      removeCardfromList(action, newState);
    } else if (action.type === "RECEIVE_LIST") {
      let newState = store.getState();
      saveUpdatedBoard(action, newState);
    } else if (action.type === "RECEIVE_CARD") {
      let newState = store.getState();
      saveUpdatedList(action, newState);
    } else {
      if (action.payload.type === "list") {
        let newState = store.getState();
        sendToBackendBoard(action, newState);
      } else if (
        action.payload.droppableIdStart === action.payload.droppableIdEnd &&
        action.payload.type === "card"
      ) {
        let newState = store.getState();
        sendToBackendSameList(action, newState);
      } else if (
        action.payload.droppableIdStart !== action.payload.droppableIdEnd &&
        action.payload.type === "card"
      ) {
        let newState = store.getState();
        sendToBackendDifferentLists(action, newState);
      }
    }
  }
  return result;
};
```

#### Technology Stack

Yello is a single-page web application with one backend route responsible for rendering HTML. User interactions in the front-end side trigger AJAX requests to the back-end, which is responsible for rendering database information in JSON format.

### Front-end

#### React

The Rails backend API is connected to a React frontend to efficiently render the virtual DOM.

#### Redux

Redux manages the front-end state of Yello. When database information is retrieved or when a drag and drop event occurs, Redux state is updated first, re-rendering the appropriate React components.

### Back-end

#### Ruby on Rails

Ruby on Rails is the back-end framework used to query the database.

#### Database

Yello uses a PostgreSQL database to store its relational data.

#### Future Plans

- Implement ability for users to invite their teammates
- Add comments to cards
- Implement task scheduling
