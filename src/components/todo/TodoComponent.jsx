import React, {Component} from 'react'
import moment from 'moment'
import {Form, Formik, Field, ErrorMessage} from 'formik';
import ErrorComponent from "./ErrorComponent";
import TodoDataService from "../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: 'Learn Form',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }


    componentDidMount() {

        if (this.state.id === -1) {
            return
        }
        let username = AuthenticationService.getLoggedInUsername();
        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                    description: response.data.description,
                    targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                })
            )
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter a description 5 characters'
        }
        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'enter a target date'
        }
        return errors
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUsername()

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }
        if (this.state.id === -1) {
            TodoDataService.createTodo(username, todo)
                .then(() => this.props.history.push(`/todos`))

        } else {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push(`/todos`))

        }
        console.log(values);
    }

    render() {
        let {description, targetDate} = this.state
        //  let description = this.state.description
        // let targetDate = this.state.targetDate

        return (
            <div>
                <h1> Todo </h1>
                <div className="container">
                    <Formik
                        //value- key değerleri  description: description, targetDate: targetDate
                        initialValues={{description, targetDate}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"/>
                                    <ErrorMessage name="targeDate" component="div"/>
                                    <fieldSet className="form-group">
                                        <label> Description </label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldSet>
                                    <fieldSet>
                                        <label> Target Date </label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldSet>
                                    <fieldSet>
                                        <label> Description </label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldSet>
                                    <button className="btn btn-success" type="submit"> Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default TodoComponent;