const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    usersData: [
      /*  {
            id: 1,
            photoUrl: 'https://cdn.shazoo.ru/455416_qnnrxVCiJB_avatar_the_last_airbender.jpg',
            followed: true,
            fullName: 'user 001',
            status: 'status 001',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: 2,
            photoUrl: 'https://cdn.shazoo.ru/455416_qnnrxVCiJB_avatar_the_last_airbender.jpg',
            followed: false,
            fullName: 'user 002',
            status: 'status 002',
            location: {
                city: 'Moskow',
                country: 'Russia'
            }
        },
        {
            id: 3,
            photoUrl: 'https://cdn.shazoo.ru/455416_qnnrxVCiJB_avatar_the_last_airbender.jpg',
            followed: true,
            fullName: 'user 003',
            status: 'status 003',
            location: {
                city: 'Kiev',
                country: 'Ukraine'
            }

        }*/
    ]

}

const usersReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                usersData: [...state.usersData, ...action.users]
            }
        default:
            return state
    }

}

export const followActionCreator = (userId) => {
    return { type: FOLLOW, userId }
}

export const unfollowActionCreator = (userId) => {
    return { type: UNFOLLOW, userId }
}

export const setUsersCreator = (users) => {
    debugger
    return { type: SET_USERS, users }
}

export default usersReducer