import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveAuth, fetchMe, fetchGroups } from '../../actions';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Margin from '../../components/Margin';

import H1 from '../../components/H1';
import H2 from '../../components/H2';
import P from '../../components/P';
import Button from '../../components/Button';

import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';
import TableRow from '../../components/TableRow';
import TableCell from '../../components/TableCell';
import TableCellHeader from '../../components/TableCellHeader';

import Avatar from '../../components/Avatar';

class Groups extends Component {

    componentDidMount() {
        let access_token;
        if (this.props.auth) {
            access_token = this.props.auth.access_token;
        } else {
            var hashParams = {};
            var e, r = /([^&;=]+)=?([^&;]*)/g,
                q = window.location.hash.substring(1);
            while ( e = r.exec(q)) {
               hashParams[e[1]] = decodeURIComponent(e[2]);
            }
            access_token = hashParams["access_token"];
            const refresh_token = hashParams["refresh_token"];
            this.props.saveAuth(access_token, refresh_token);
            this.props.fetchMe(access_token);
        }
        this.props.fetchGroups(access_token);

    }

    renderGroupList() {

    }

    render() {
        let avatar = null;
        if (this.props.me.images) {
            avatar = <Avatar src={this.props.me["images"][0]["url"]} alt={this.props.me["display_name"]} width="15" height="15" />;
        }

        const groups = this.props.myGroups.map((group) => {
            return (
                <TableRow key={group}>
                    <TableCell>{group}</TableCell>
                </TableRow>
            );
        });

        let overview = null;

        if (groups.length === 0) {
            overview = (
                <P>ADD EMPTY STATE MESSAGE HERE</P>
            );
        } else {
            overview = (
                <Table marginTop="4">
                    <TableHead>
                        <TableRow>
                            <TableCellHeader>Group name</TableCellHeader>
                            <TableCellHeader textRight>Group members</TableCellHeader>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {groups}
                    </TableBody>
                </Table>
            );
        }

        return (
            <Container>
                <Margin marginTop="8">
                    {avatar}
                </Margin>
                <H1 marginTop="4">Hi {this.props.me["display_name"]}</H1>
                <P marginTop="1">
                    Want to make playlists that both you and your friend like? Lorem ipsum dolor sit amet.
                </P>
                <Flex justifyContent="space-between" alignItems="center" marginTop="4">
                    <H2>Your groups</H2>
                    <div>
                        <Button to="/groups/new">New</Button>
                        <Button to="/groups/join">Join</Button>
                    </div>
                </Flex>
                {overview}

                <Link to="/groups/2">Testing</Link>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        me: state.me,
        myGroups: state.myGroups
    };
}

export default connect(mapStateToProps, { saveAuth, fetchMe, fetchGroups })(Groups);
