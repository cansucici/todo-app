import React, {Component} from 'react';
import AuthenticationService from "./AuthenticationService";
import { Link} from 'react-router-dom'


const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a> in28Minutes</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome"> Home </Link></li>}
                        <li><Link className="nav-link" to="/todos"> Todos </Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login"> Login </Link></li>
                        <li><Link className="nav-link" to="/logout"
                                  onClick={AuthenticationService.logout}> Logout </Link></li>
                    </ul>
                </nav>

            </header>
        )
    }
}
export default HeaderComponent;