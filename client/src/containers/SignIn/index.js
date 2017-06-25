import React, { Component } from 'react';
import Flex from '../../components/Flex';
import Container from '../../components/Container';
import Measure from '../../components/Measure';
import Margin from '../../components/Margin';
import H1 from '../../components/H1';
import P from '../../components/P';
import DuoTone from '../../components/DuoTone';
import A from '../../components/A';
import querystring from 'querystring';

class SignIn extends Component {
    render() {
        const scope='playlist-modify-public playlist-modify-private user-read-private user-read-email user-top-read';
        const client_id = '524b1bd0390740f3802408f733ecc338';
        const redirect_uri = 'http://localhost:8888/callback';

        const loginUri = 'https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id,
                scope,
                redirect_uri,
            });

        return (
            <DuoTone>
                <Flex alignItems="center" justifyContent="center" height="100vh">
                    <Container>
                        <Measure className="animated fadeIn">
                            <H1 color="white">Cynthesis</H1>
                            <P color="white" marginTop="1">Cynthesis uses Machine Learning to generate a playlist that appeals to all members of a group based on audio features from the users’ top tracks.</P>
                            <Margin marginTop="6">
                                <A href={loginUri}>Sign in with Spotify</A>
                            </Margin>
                        </Measure>
                    </Container>
                </Flex>
            </DuoTone>
        );
    }
}

export default SignIn;
