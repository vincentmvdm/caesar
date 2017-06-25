import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveAuth, fetchMe, fetchGroups } from '../../actions';
import { Link } from 'react-router-dom';
import { emoji } from 'node-emoji';

import Container from '../../components/Container';
import Flex from '../../components/Flex';
import Margin from '../../components/Margin';

import 'font-awesome/css/font-awesome.min.css';

import H1 from '../../components/H1';
import H2 from '../../components/H2';
import P from '../../components/P';
import FormButton from '../../components/FormButton';

import Button from '../../components/Button';

import Table from '../../components/Table';
import TableHead from '../../components/TableHead';
import TableBody from '../../components/TableBody';
import TableRow from '../../components/TableRow';
import TableCell from '../../components/TableCell';
import TableCellHeader from '../../components/TableCellHeader';

import Avatar from '../../components/Avatar';

import { createGroup } from '../../actions';

class Groups extends Component {
    constructor(...args) {
        super(...args);
        this.createGroup = this.createGroup.bind(this);
        this.refreshInterval = null;
    }

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
        this.refreshInterval = setInterval(() => { this.props.fetchGroups(access_token); }, 5000);
    }

    createGroup() {
        this.props.createGroup(this.props.auth.access_token, null, () => {
            this.props.fetchGroups(this.props.auth.access_token);
        });
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
                <TableRow key={group.code}>
                    <TableCell>{group.code}</TableCell>
                    <TableCell>{group.data.people.join(', ')}</TableCell>
                    <TableCell>
                        {group.data.people.length < 2 ? 'Waiting for friends...' : 'Ready!'}
                    </TableCell>
                </TableRow>
            );
        });

        let overview = null;

        if (groups.length === 0) {
            overview = (
                <P marginTop="4">You aren’t a part of any groups yet. Create a group to start one or join an existing group.</P>
            );
        } else {
            overview = (
                <Table marginTop="4">
                    <TableHead>
                        <TableRow>
                            <TableCellHeader>Group code</TableCellHeader>
                            <TableCellHeader>Members</TableCellHeader>
                            <TableCellHeader>Status</TableCellHeader>
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
                    Create or join a group and begin your journey to a {emoji.fire} playlist.
                </P>
                <Flex justifyContent="space-between" alignItems="center" marginTop="4">
                    <H2>Your groups</H2>
                    <div>
                        <FormButton onClick={this.createGroup}>New</FormButton>
                        <div style={{
                            display: 'inline-block',
                            width: 8,
                            height: 8,
                        }} />
                        <Button to="/groups/join">Join</Button>
                    </div>
                </Flex>
                {overview}
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

export default connect(mapStateToProps, { saveAuth, fetchMe, fetchGroups, createGroup })(Groups);
