# README

# Yello

[Live Site](https://yello-fsp.herokuapp.com/#/)

## Description

Yello, a Trello clone, is a web app that helps users to organize their projects through different boards that contain lists of todo items they need to complete

## Technologies Used

- Ruby on Rails
- PostgreSQL
- React
- Redux
- JavaScript
- Webpack

## Features

### Lists & Cards

Boards contain lists which contain cards. Cards have a title and description. Cards can be moved from one list to another

![Wireframe](https://user-images.githubusercontent.com/41927284/61153507-4d4b1680-a4a0-11e9-810e-c868684ecfa7.png)

```js

        <DragDropContext onDragEnd={this.onDragEnd.bind(this)}>
          <Link to="/boards">Go Back</Link>
          <h2>{board.title}</h2>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {provided => (
              <ListsContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {listOrder.map((list, index) => {

                  if (list) {
                    const listCards = list.cards;

                    return (
                      <TrelloList
                        listID={list.id}
                        key={list.id}
                        title={list.title}
                        cards={listCards}
                        index={index}
                      />
                    );
                  }
                })}
                {provided.placeholder}
                <TrelloCreate list />
              </ListsContainer>
            )}
          </Droppable>
        </DragDropContext>
}
```

### New account creation, login, and guest/demo login

Users can sign up, sign in, log out. Users can use a demo login to try the site.

### Boards

Boards are the main context of Trellapp.

### Sharing Boards

Boards can be shared with other users. Boards can be edited by authors and users with whom the board is shared.

### Comments

Users can comment on cards.
