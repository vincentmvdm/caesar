import React, { Component } from 'react';
import 'sanitize.css/sanitize.css';
import Container from './components/Container';
import H1 from './components/H1';
import P from './components/P';
import './global-styles';

class App extends Component {
    render() {
        return (
            <div>
                <Container>
                    <H1>Caesar</H1>
                    <P>This is a description of our app.</P>
                </Container>
            </div>
        );
    }
}

export default App;
