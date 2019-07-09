{
    entities: {
        users: {
            1: {
                id: 1,
                    username: 'mikelee'
            },

            2: {
                id: 2,
                    username: 'stevejohns'
            },
            3: {
                id: 3,
                    username: 'seanbrad'
                
            },
            4: {
                id: 4,
                    username: 'trellofan'
            }
        },
        boards: {
            1: {
                id: 1,
                    user_id: 3,
                        title: 'Website Project'
            },
            
            2: {
                id: 2,
                    user_id: 1,
                        title: 'My New App'
            },

            3: {
                id: 3,
                    user_id: 3,
                        title: 'New Feature Launch'
            },

            4: {
                id: 4,
                    user_id: 1,
                        title: 'My vacation planning'
            }
        },
        lists: {
            1: {
                id: 1,
                    board_id: 2,
                        user_id: 1,
                            title: 'Features to build'
            },

            2: {
                id: 2,
                    board_id: 1,
                        user_id: 3,
                            title: 'Pages in-progress'
            },
            3: {
                id: 3,
                    board_id: 3,
                        user_id: 3,
                            title: 'Finished tasks'

            }
        },

        cards: {
            1: {
                id: 1,
                list_id: 2,
                board_id: 1,
                user_id: 3,
                title: 'Testimonial Page',
                body: 'This page will should include 3 testimonial videos '

            },

            2: {
                id: 2,
                list_id: 3,
                board_id: 3,
                user_id: 3,
                title: 'Internal Testing',
                body: 'The feature needs to be tested internally'
            }
        },
        comments: {
            1: {
                id: 1,
                card_id: 2,
                user_id: 3,
                body: 'when is the due date?'
            }
            2: {
                id: 2,
                card_id: 1,
                user_id: 3,
                body: 'Finished writing content'

            }
        }
    },
    errors: {
        login: ["Incorrect username/password combination"],  
    },
    session: {
        current_user_id: 3
    },
    ui: {
        loading: true / false
    },
}