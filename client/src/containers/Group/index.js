import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopTracks } from '../../actions';

import Container from '../../components/Container';
import H1 from '../../components/H1';
import P from '../../components/P';
import List from '../../components/List';
import ListItem from '../../components/ListItem';

class Group extends Component {
    componentDidMount() {
        this.props.fetchTopTracks(this.props.auth["access_token"]);
    }

    renderTopTracks() {
        return this.props.topTracks.map((track) => {
            return (
                <ListItem>{track.name}</ListItem>
            );
        });
    }

    render() {
        return (
            <Container>
                <H1 marginTop="6">Group</H1>
                <P marginTop="1">Test...</P>
                <List>
                    {this.renderTopTracks()}
                </List>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth, topTracks: state.topTracks };
}

export default connect(mapStateToProps, { fetchTopTracks })(Group);
