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
        const scope='user-read-private user-read-email';

        const client_id = '524b1bd0390740f3802408f733ecc338'; // Your client id
        const client_secret = 'b8b03bdcf7764b05bb57862de7b1b7b3'; // Your secret
        const redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri
        


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
