import React, {Component} from 'react';
import TodoDataService from "../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import helloworldService from "../api/todo/helloworldService";

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: ""
            /*  [
                  {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
                  {id: 2, description: 'Learn to Dance', done: false, targetDate: new Date()},
                  {id: 3, description: 'Visit Paris', done: false, targetDate: new Date()},
                  {id: 4, description: 'Learn React', done: false, targetDate: new Date()}
              ]*/
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
    }

    componentDidMount() {
        this.refreshTodos();

        //  .catch(error => this.handleError(error))
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUsername();
        TodoDataService.retrieveAllTodos(username)
            .then(response => {
                //console.log(response)
                this.setState({todos: response.data})
            })
    }

    deleteTodoClicked(id) {
        let username = AuthenticationService.getLoggedInUsername();

        TodoDataService.deleteTodo(username, id)
            .then(response => {
                this.setState({message: `Delete of todo ${id} successful`})
                this.refreshTodos();
            })

    }

    addTodoClicked() {
      //  console.log('create' + id)

        this.props.history.push(`/todos/-1`)
    }

    updateTodoClicked(id) {
        this.props.history.push(`/todos/${id}`)

        //   let username = AuthenticationService.getLoggedInUsername();

        /*     TodoDataService.updateTodo(username, id,)
            .then(response => {
                this.setState({message: `Delete of todo ${id} successful`})
                this.refreshTodos();
            })*/

    }

    render() {
        return (
            <div>
                <h1> List todos </h1>
                <div> {this.state.message} </div>
                <div className="constant-values-container">
                    <table>
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>done</th>
                            <th>targetDate</th>
                            <th>update</th>
                            <th>delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todos.map(
                            todo =>

                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>
                                        <button onClick={() => this.updateTodoClicked(todo.id)}> Update
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-warning"
                                                onClick={() => this.deleteTodoClicked(todo.id)}> Delete
                                        </button>
                                    </td>
                                </tr>
                        )}
                        </tbody>
                    </table>
                    <div className="row">
                        <button onClick={this.addTodoClicked}> Add </button>
                    </div>


                </div>
            </div>
    )
    }


    }

    export default ListTodosComponent;