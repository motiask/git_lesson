import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileClassContainer extends React.Component {

    componentDidMount() {
        this.props.getUserProfile(this.props.params.userId);
    }

    render() {
        /*-69 HOC //-68-redirect
        if (!this.props.isAuth) return <Navigate to={'/login'} />*/
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
    return {
        profile: state.ProfilePage.profile
    }
};

//-70
export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileClassContainer)



/*-70
//-69 HOC
let AuthRedirectComponent = withAuthRedirect(ProfileClassContainer);

export default connect(mapStateToProps, { getUserProfile })(withRouter(AuthRedirectComponent));
*/
