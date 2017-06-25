import React, { Component } from 'react';
import Container from '../../components/Container';
import H1 from '../../components/H1';
import P from '../../components/P';
import List from '../../components/List';
import ListItem from '../../components/ListItem';

class GroupNew extends Component {
    render() {
        return (
            <Container>
                <H1 marginTop="6">Create a new group</H1>
                <P marginTop="1">Test...</P>
                <List>
                    <ListItem>Test</ListItem>
                    <ListItem>Testing</ListItem>
                </List>
            </Container>
        );
    }
}

export default GroupNew;
