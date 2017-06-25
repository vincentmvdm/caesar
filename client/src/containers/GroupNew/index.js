import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import H1 from '../../components/H1';
import Margin from '../../components/Margin'
import Form from '../../components/Form';

import Label from '../../components/Label';

import Input from '../../components/Input';
import { createGroup } from '../../actions';

class GroupNew extends Component {
    renderField = (field) => {
        const { meta: { touched, error } } = field;

        return (
            <div>
                <Margin marginBottom="1">
                    <Label>{field.label}</Label>
                </Margin>
                <Input
                    type="text"
                    {...field.input}
                />
                <Margin marginTop="1">
                    {touched ? error : ''}
                </Margin>
            </div>
        );
    }

    onSubmit = (values) => {
        this.props.createGroup(values, () => {
            this.props.history.push('/groups');
        });
    };

    render() {
        const { handleSubmit } = this.props;

        return (
            <Container>
                <H1 marginTop="6">Create a new group</H1>
                <Form onSubmit={handleSubmit(this.onSubmit)} marginTop="2">
                    <Field
                        label="Test"
                        name="newGroupName"
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

    if (!values.newGroupName) {
        errors.newGroupName = "Enter a group name";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'GroupNewForm'
})(
    connect(null, { createGroup } )(GroupNew)
);
