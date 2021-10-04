import '../App.css';
import React, {Component} from 'react';


class FirstComponent extends Component {
    render() {
        return (
            <div className="FirstComponent">
                first component
            </div>
        );
    }
}

export class SecondComponent extends Component {
    render() {
        return (
            <div className="SecondComponent">
                second component
            </div>
        );
    }
}


export default FirstComponent;