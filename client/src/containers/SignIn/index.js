import React, { Component } from 'react';
import Flex from '../../components/Flex';
import Container from '../../components/Container';
import Measure from '../../components/Measure';
import Margin from '../../components/Margin';
import H1 from '../../components/H1';
import P from '../../components/P';
import Button from '../../components/Button';
import querystring from 'querystring';

class SignIn extends Component {
    render() {
        const scope='playlist-modify-public playlist-modify-private user-read-private user-read-email';
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
            <Flex alignItems="center" justifyContent="center">
                <Container>
                    <Measure>
                        <H1>Caesar</H1>
                        <P marginTop="1">This is a description of our app.</P>
                        <Margin marginTop="6">
                            <Button href={loginUri}>Sign in with Spotify</Button>
                        </Margin>
                    </Measure>
                </Container>
            </Flex>
        );
    }
}

export default SignIn;
