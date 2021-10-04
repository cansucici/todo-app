import './App.css';
import React, {Component} from 'react';
import FirstComponent, {SecondComponent} from "./components/FirstComponent";
import ThirdComponent from "./components/ThirdComponent";
import Counter from "./counter/Counter";
import TodoApp from "./components/todo/TodoApp";
import './bootstrap.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Counter/>*/}
                <TodoApp/>
            </div>

        );
    }
}


class LearningComponent extends Component {
    render() {
        return (
            <div className="LearningComponent">
                My hello world
                <FirstComponent/>
                <SecondComponent/>
                <ThirdComponent/>
            </div>

        );
    }
}

export default App;
