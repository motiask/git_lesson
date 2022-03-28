import React from 'react';
import styles from './Users.module.css'

let Users = (props) => {
    debugger
    if (props.usersData.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: 'https://cdn.shazoo.ru/455416_qnnrxVCiJB_avatar_the_last_airbender.jpg',
                    followed: true,
                    fullName: 'user 004',
                    status: 'status 004',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                },
                {
                    id: 2,
                    photoUrl: 'https://cdn.shazoo.ru/455416_qnnrxVCiJB_avatar_the_last_airbender.jpg',
                    followed: false,
                    fullName: 'user 005',
                    status: 'status 005',
                    location: {
                        city: 'Moskow',
                        country: 'Russia'
                    }
                },
                {
                    id: 3,
                    photoUrl: 'https://cdn.shazoo.ru/455416_qnnrxVCiJB_avatar_the_last_airbender.jpg',
                    followed: true,
                    fullName: 'user 006',
                    status: 'status 006',
                    location: {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }

                }
            ]

        )
    }
    return (<div>
        {props.usersData.map((u) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.userPhoto} />
                </div>
                <div>
                    {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)}
    </div>
    )
}

export default Users;