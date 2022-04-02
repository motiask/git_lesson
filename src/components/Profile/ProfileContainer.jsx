import * as axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';


class ProfileClassContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

let mapStateToProps = (state) => {
    return { profile: state.ProfilePage.profile }
};

export default connect(mapStateToProps, { setUserProfile })(ProfileClassContainer);

