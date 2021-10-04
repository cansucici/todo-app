import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import TodoComponent from "./TodoComponent"

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <switch>
                            <Route path="/" exact component={LoginComponent}/>
                            <Route path="/login" component={LoginComponent}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                          {/*buradaki path parameter name i {this.props.match.params.name} bu şekilde almıştık.*/}
                          {/*  <Route path="/welcome" component={WelcomeComponent}/>*/}
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent}/>
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>

                            {/*<Route component={ErrorComponent}/>*/}
                        </switch>
                        <FooterComponent/>
                    </>
                </Router>

                {/*<LoginComponent/>*/}
            </div>
        )
    }
}


/*

function ShowInvalidCredentials(props) {
if (props.hasLoginFailed) {
return <div> Invalid Credentials</div>
}
return null
}

function ShowLoginSuccessMessage(props) {
if (props.showSuccessMessage) {
return <div> Login Succesful</div>
}
return null
}
*/


export default TodoApp;