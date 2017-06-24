import React, { Component } from 'react';
import 'sanitize.css/sanitize.css';
import Container from './components/Container';
import Measure from './components/Measure';
import H1 from './components/H1';
import P from './components/P';
import Input from './components/Input';
import './global-styles';

class App extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Measure>
                        <H1>Caesar</H1>
                        <P>This is a description of our app.</P>
                        <Input type="button" value="Click here" />
                    </Measure>
                </Container>
            </div>
        );
    }
}

export default App;
