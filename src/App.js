import React, { Component } from 'react';
import 'sanitize.css/sanitize.css';
import CaesarTheme from './components/CaesarTheme';
import Flex from './components/Flex';
import Container from './components/Container';
import Measure from './components/Measure';
import Margin from './components/Margin';
import H1 from './components/H1';
import P from './components/P';
import Button from './components/Button';
import './global-styles';

class App extends Component {
    render() {
        return (
            <CaesarTheme>
                <Flex alignItems="center" justifyContent="center">
                    <Container>
                        <Measure>
                            <H1 marginTop="6">Caesar</H1>
                            <P marginTop="1">This is a description of our app.</P>
                            <Margin marginTop="4">
                                <Button>Sign in with Spotify</Button>
                            </Margin>
                        </Measure>
                    </Container>
                </Flex>
            </CaesarTheme>
        );
    }
}

export default App;
