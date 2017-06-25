import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTest } from '../../actions';

import Container from '../../components/Container';
import Margin from '../../components/Margin';
import H1 from '../../components/H1';
import P from '../../components/P';
import Button from '../../components/Button';
import List from '../../components/List';
import ListItem from '../../components/ListItem';

class Groups extends Component {

    componentDidMount() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        const access_token = hashParams["access_token"];
        const refresh_token = hashParams["refresh_token"];

        this.props.fetchTest(access_token, refresh_token);
    }

    renderTest() {
        return this.props.test.map((playlist) => {
            return (
                <ListItem>{playlist.name}</ListItem>
            );
        });
    }

    render() {
        return (
            <Container>
                <H1 marginTop="6">Groups</H1>
                <P marginTop="1">Test...</P>
                <Margin marginTop="4">
                    <Button>Create a new group</Button>
                </Margin>
                <List>
                    {this.renderTest()}
                </List>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return { test: state.test };
}

export default connect(mapStateToProps, { fetchTest })(Groups);
