import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMe } from '../../actions';

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

        this.props.fetchMe(access_token);
    }

    renderTest() {

    }

    render() {

        return (
            <Container>
                <H1 marginTop="6">Hi {this.props.me["display_name"]}</H1>
                <P marginTop="1"></P>
                <Margin marginTop="4">
                    <Button>Create a new group</Button>
                </Margin>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return { me: state.me };
}

export default connect(mapStateToProps, { fetchMe })(Groups);
