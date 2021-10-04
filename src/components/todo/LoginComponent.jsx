import React, {Component} from 'react';
import AuthenticationService from "./AuthenticationService";


class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'cansu',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        //   this.handleUserNameChange = this.handleUserNameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)

    }

    handleChange(event) {
        //     console.log(this.state);
        this.setState({[event.target.name]: event.target.value})
    }

    loginClick() {
        if (this.state.username === 'cansu' && this.state.password === 'dummy') {
            AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)

            /* this.setState({showSuccessMessage: true})
             this.setState({hasLoginFailed: false})
             console.log("success");*/
        } else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
            //console.log("failed");

        }
    }

    /*handleUserNameChange(event) {
        console.log(event.target.name);
        this.setState({[event.target.name]: event.target.value})
    }

    handlePasswordChange(event){
        console.log(event.target.value);
        this.setState({password: event.target.value})
    }*/

    render() {
        return (
            <div>
                <h1> Login </h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div> Login Succesful </div>}
                    User Name: <input type="text" name="username" value={this.state.username}
                                      onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password}
                                     onChange={this.handleChange}/>
                    <button className="btn btn" onClick={this.loginClick}> Login</button>
                </div>
            </div>
        )
    }

}

export default LoginComponent;