import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Bonjour {user.firstName}!</h1>
                <p>Vous êtes connecté sur l'application VOD!!</p>
                <p><Link to="/movies">Bande Annonce!</Link></p>
                <p><Link to="/search">Recherche de film!</Link></p>
                <p><Link to="/login">Déconnexion</Link></p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };



