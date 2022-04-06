import * as axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';


class ProfileClassContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let params = useParams();
        return (
            <Component
                {...props}
                params={params}
            />
        );
    }
    return ComponentWithRouterProp;
}


let mapStateToProps = (state) => {
    return { profile: state.ProfilePage.profile }
};

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileClassContainer));

