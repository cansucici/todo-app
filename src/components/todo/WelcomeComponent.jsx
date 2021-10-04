import React, {Component} from 'react';
import {Link} from "react-router-dom";
import helloworldService from "../api/todo/helloworldService";

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
        this.handleError = this.handleError.bind(this);
        this.state = {
            welcomeMessage: ''
        }
    }

    render() {

        return (
            <>
                <h1> Welcome !</h1>
                <div className="container">
                    welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos"> here</Link>
                </div>

                <div className="container">
                    Click here to get a customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage}
                            className="btn btn-success">
                        Get Welcome Message</button>
                </div>

                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>
        )
    }

    retrieveWelcomeMessage() {
        /* helloworldService.executeHelloWorldService()
             .then(response => this.handleSuccessfulResponse(response))
 */
        /*  helloworldService.executeHelloWorldBeanService()
              .then(response => this.handleSuccessfulResponse(response))
  */
        helloworldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(response => this.handleSuccessfulResponse(response))
            .catch(error => this.handleError(error))
    }


    handleSuccessfulResponse(response) {
        this.setState({welcomeMessage: response.data.message})

    }

    handleError(error) {

        // console.log(error.response)

        this.setState({welcomeMessage: error.response.data.message})

    }

}

export default WelcomeComponent;