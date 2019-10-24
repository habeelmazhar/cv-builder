import { Component } from 'react';
import { connect } from 'react-redux';

import { selectUserLoggedIn } from '../../selectors';
import { logout } from '../../actions';

class Logout extends Component {

    componentDidMount() {
        this.props.logout();

        if (window.localStorage.getItem("JWT")) {
            window.localStorage.removeItem("JWT");
            window.localStorage.removeItem("email");
        }

        this.props.history.push('/login');
    }

    render() {
        return (null);
    }
}


const mapStateToProps = state => ({
    isLoggedIn: selectUserLoggedIn(state),
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
