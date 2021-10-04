import React, {Component} from 'react';
import './Counter.css';
import PropTypes from 'prop-types'

// componentler birbirine iş yaptırmak istediğinde propslarla gönderir.
// <span className="count">{this.state.counter} </span> html tagların ikisi arasında tanımlananlar içinde ekrana yazılan değerlerdi.<span></span>
//  <CounterButton by={1} incrementMethod={this.increment}>  bu ilk tagın arasındaki ise props değerlerimiz.

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment}
                               decrementMethod={this.decrement}></CounterButton>
                <span className="count">{this.state.counter} </span>
                <div>
                    <button className="reset" onClick={this.reset}> Reset</button>
                </div>
            </div>
        );
    }

    reset() {
        this.setState(
            () => {
                return {counter: 0}
            });
    }

    increment(by) {
        //  console.log('increment from parent- ${by}')
        this.setState(
            (prevStata) => {
                return {counter: prevStata.counter + by}
            });
    }

    decrement(by) {
        //  console.log('increment from parent- ${by}')
        this.setState(
            (prevStata) => {
                return {counter: prevStata.counter - by}
            });
    }
}

class CounterButton extends Component {

    //Define the initial state in a constructor

    constructor() {
        super();
        /*    this.state = {
                counter: 0
            }
            this.incrementButton = this.incrementButton.bind(this);
            this.decrementButton = this.decrementButton.bind(this);
     */
    }

    render() {
        const style = {fontSize: "50px", padding: "15px 30px"};
        return (
            <div className="Counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}> + {this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}> - {this.props.by}</button>
                {/*<span className="count" style={style}> {this.state.counter} </span>*/}
                {/* <span className="count">{this.state.secondCounter} </span>*/}
            </div>
        );
    }

    /*
        incrementButton() {
            this.setState({
                counter: this.state.counter + this.props.by
            });
            this.props.incrementMethod(this.props.by);
        }

        decrementButton() {
            this.setState({
                counter: this.state.counter - this.props.by
            });
            this.props.decrementMethod(this.props.by);
        }
    */

}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}
export default Counter;