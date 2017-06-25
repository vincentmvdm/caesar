import React, { Component } from 'react';
import Flex from '../../components/Flex';
import Container from '../../components/Container';
import Measure from '../../components/Measure';
import Margin from '../../components/Margin';
import H1 from '../../components/H1';
import P from '../../components/P';
import Button from '../../components/Button';

class SignInPage extends Component {
    render() {
        return (
            <Flex alignItems="center" justifyContent="center">
                <Container>
                    <Measure>
                        <H1>Caesar</H1>
                        <P marginTop="1">This is a description of our app.</P>
                        <Margin marginTop="6">
                            <Button>Sign in with Spotify</Button>
                        </Margin>
                    </Measure>
                </Container>
            </Flex>
        );
    }
}

export default SignInPage;
