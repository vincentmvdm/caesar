import React, { Component } from 'react';
import Container from '../../components/Container';
import Measure from '../../components/Measure';
import Margin from '../../components/Margin';
import H1 from '../../components/H1';
import P from '../../components/P';
import Button from '../../components/Button';
import List from '../../components/List';
import ListItem from '../../components/ListItem';

class Groups extends Component {
    render() {
        return (
            <Container>
                <H1 marginTop="6">Groups</H1>
                <P marginTop="1">Test...</P>
                <Margin marginTop="4">
                    <Button>Create a new group</Button>
                </Margin>
                <List>
                    <ListItem>Test</ListItem>
                    <ListItem>Testing</ListItem>
                </List>
            </Container>
        );
    }
}

export default Groups;
