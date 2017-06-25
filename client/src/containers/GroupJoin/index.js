import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Container from '../../components/Container';
import H1 from '../../components/H1';
import Form from '../../components/Form';
import Label from '../../components/Label';
import Margin from '../../components/Margin';

import FormButton from '../../components/FormButton';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { joinGroup } from '../../actions';

class GroupJoin extends Component {
    renderField = (field) => {
        const { meta: { touched, error } } = field;

        return (
            <div>
                <Label>{field.label}</Label>
                <Margin marginTop="2">
                    <div>
                        <Input
                            type="text"
                            {...field.input}
                        />
                    </div>
                </Margin>
                <Margin marginTop="2">
                    <div className="danger">
                        {touched ? error : ''}
                    </div>
                </Margin>
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
                <Form onSubmit={handleSubmit(this.onSubmit)} marginTop="4">
                    <Field
                        label="Enter the group code"
                        name="existingGroupName"
                        component={this.renderField}
                    />
                    <Margin marginTop="4">
                        <Button to="/groups">Cancel</Button>
                        <div style={{
                            display: 'inline-block',
                            width: 12,
                            height: 8,
                        }} />
                        <FormButton type="submit">Join</FormButton>
                    </Margin>
                </Form>
            </Container>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.existingGroupName) {
        errors.existingGroupName = "Enter a group code";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'GroupJoinForm'
})(
    connect(state => ({ auth: state.auth }), { joinGroup } )(GroupJoin)
);
