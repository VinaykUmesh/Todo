import React, { Component } from 'react'
import moment from 'moment';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import AuthenticationService from '../../components/todo/AuthenticationService.js';
import TodoDataService from '../../api/todo/TodoDataService.js';


class TodoComponent extends Component {

    state = {
        id: this.props.match.params.id,
        description: '',
        targetDate: moment(new Date()).format('YYYY-MM-DD')
    }

    componentDidMount() {

        let user = AuthenticationService.fetchUser();
        TodoDataService.retrieveById(user, this.state.id)
            .then(
                response => {
                    this.setState({
                        description: response.data.description,
                        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                    })
                }
            )
    }

    onSubmit = (values) => {
        let user = AuthenticationService.fetchUser();
        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }
        if (this.state.id === -1) {
            TodoDataService.createById(user, todo).then(
                () => { this.props.history.push('/todos') }
            )
        } else {

            TodoDataService.updateById(user, this.state.id, todo).then(
                () => { this.props.history.push('/todos') }
            )
        }
    }

    validate = (values) => {
        let errors = {}

        if (!values.description) {
            errors.description = 'enter a description'
        } else if (values.description.length < 5) {
            errors.description = 'enter atleast 5 characters in description'
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = 'enter a valid date'
        }

        return errors
    }

    render() {

        let { description, targetDate } = this.state

        return (
            <div>
                <h2>Todo Update</h2><br />
                <div className="container col-8">
                    <Formik
                        initialValues={{ description, targetDate }}
                        validateOnBlur={false}
                        validateOnChange={false}
                        onSubmit={this.onSubmit}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Target Date</label>
                                        <ErrorMessage name="targetDate" component="div" className="alert alert-danger" />
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset><br />
                                    <button className="btn btn-info" type="submit">Save</button>
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
