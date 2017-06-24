import React from 'react';
import { ThemeProvider } from 'styled-components';

let scale = [];

for (let i = 0; i < 24; i++) {
    scale.push(8 * i + "px");
}

const theme = {
    scale
};

const CaesarTheme = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}

export default CaesarTheme;
