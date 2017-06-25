import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import H1 from '../../components/H1';
import Form from '../../components/Form';
import Input from '../../components/Input';
import { joinGroup } from '../../actions';

class GroupJoin extends Component {
    renderField = (field) => {
        const { meta: { touched, error } } = field;

        return (
            <div>
                <label>{field.label}</label>
                <Input
                    type="text"
                    {...field.input}
                />
            {touched ? error : ''}
            </div>
        );
    }

    onSubmit = (values) => {
        this.props.joinGroup(this.props.auth.access_token, values, () => {
            this.props.history.push('/groups');
        });
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <Container>
                <H1 marginTop="6">Join a group</H1>
                <Form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field
                        label="Test"
                        name="existingGroupName"
                        component={this.renderField}
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Container>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.existingGroupName) {
        errors.existingGroupName = "Enter a group name";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'GroupJoinForm'
})(
    connect(state => ({ auth: state.auth }), { joinGroup } )(GroupJoin)
);
