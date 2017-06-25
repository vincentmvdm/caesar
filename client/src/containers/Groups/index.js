import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveAuth, fetchMe } from '../../actions';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import Margin from '../../components/Margin';
import H1 from '../../components/H1';
import P from '../../components/P';
import Button from '../../components/Button';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Avatar from '../../components/Avatar';

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
        this.props.saveAuth(access_token, refresh_token);
        this.props.fetchMe(access_token);
    }

    render() {
        let avatar = null;
        if (this.props.me.images) {
            avatar = <Avatar src={this.props.me["images"][0]["url"]} alt={this.props.me["display_name"]} />;
        }

        return (
            <Container>
                {avatar}
                <H1 marginTop="6">Hi {this.props.me["display_name"]}</H1>
                <P marginTop="1"></P>
                <Margin marginTop="4">
                    <Button>Create a new group</Button>
                </Margin>
                <Link to="/groups/2">Testing</Link>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth, me: state.me };
}

export default connect(mapStateToProps, { saveAuth, fetchMe })(Groups);
