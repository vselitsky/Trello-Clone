{
    entities: {
        chirps: {
            1: {
                id: 1,
                    body: "bluebirds like blueberries",
                        authorId: 11,
      },
            2: {
                id: 2,
                    body: "bluebirds also like blue potatoes",
                        authorId: 25,
      },
            3: {
                id: 3,
                    body: "bluebirds are more like fruit",
                        authorId: 11,
      }
        },
        users: {
            11: {
                id: 11,
                    username: "blue_macaw",
                        authoredChirpIds: [1, 3],        
      },
            25: {
                id: 25,
                    username: "blue_toucan",
                        authoredChirpIds: [2],
                            imgUrl: "https://cdn.pixabay.com/photo/2015/10/01/16/43/toucan-967334_960_720.jpg"
            }
        },
        chirpLikes: {
            10: {
                likerId: 11,
                    chirpId: 1,
      },
            11: {
                likerId: 25,
                    chirpId: 1,
      },
            12: {
                likerId: 25,
                    chirpId: 3,
      },
        }
    },
    ui: {
        loading: true / false
    },
    errors: {
        login: ["Incorrect username/password combination"],
            chirpForm: ["Chirp body cannot be blank"],
  },
    session: { currentUserId: 25 }
}




{
    entities: {
        users: {
            1: {
                id: 1,
                    username: "betapark",
      },
            2: {
                id: 2,
                    username: "gregmatthews"
            },
            3: {
                id: 3,
                    username: "BetsyPhotography",
      },
            4: {
                id: 4,
                    username: "_dyong",
      },
            5: {
                id: 5,
                    username: "pokemontrainer",
      }
        },
        posts: {
            1: {
                id: 1,
                    user_id: 3,
      },
            2: {
                id: 2,
                    user_id: 1
            },
            3: {
                id: 3,
                    user_id: 3
            },
            4: {
                id: 4,
                    user_id: 2
            },
            5: {
                id: 5,
                    user_id: 4
            }
        },
        imageLikes: {
            1: {
                id: 1,
                    user_id: 2,
                        image_id: 5
            },
            2: {
                id: 2,
                    user_id: 3,
                        image_id: 2
            }
        },
        captions: {
            1: {
                id: 1,
                    user_id: 3,
                        image_id: 1,
                            body: "Christmas Day Skiing!!"
            },
            2: {
                id: 2,
                    user_id: 2,
                        image_id: 2,
                            body: "I could lay at the beach all day!"
            },
            3: {
                id: 3,
                    user_id: 1,
                        image_id: 3,
                            body: "I woke up like this...."
            },
            4: {
                id: 4,
                    user_id: 1,
                        image_id: 4,
                            body: "Dinner date!"
            }
        },
        comments: {
            1: {
                id: 1,
                    user_id: 5,
                        image_id: 3,
                            body: "Really?"
            },
            2: {
                id: 2,
                    user_id: 3,
                        image_id: 1,
                            body: "It looks like you guys had so much fun!"
            },
            3: {
                id: 3,
                    user_id: 1,
                        image_id: 4,
                            body: "Food looks good!"
            },
        },
        commentLikes: {
            1: {
                id: 1,
                    user_id: 2,
                        image_id: 3,
                            comment_id: 1
            },
            2: {
                id: 2,
                    user_id: 3,
                        image_id: 4,
                            comment_id: 3
            }
        }
    },
    errors: {
        login: ["Incorrect username/password combination"],
            comment: ["Comment cannot be blank."]
    },
    session: {
        current_user_id: 3
    }
};