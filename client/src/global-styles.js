import { injectGlobal } from 'styled-components';

import circularLight from './fonts/circular-light.otf';
import circularBook from './fonts/circular-book.otf';
import circularBold from './fonts/circular-bold.otf';

/* eslint no-unused-expressions: 0 */
injectGlobal`
    @font-face {
        font-family: Circular;
        src: url(${circularLight});
        font-weight: 200;
        font-style: normal;
    }

    @font-face {
        font-family: Circular;
        src: url(${circularBook});
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: Circular;
        src: url(${circularBold});
        font-weight: 500;
        font-style: normal;
    }

    body {
        background-color: #181818;
        color: #ffffff;
        font-family: Circular;
        font-weight: 200;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
`;
