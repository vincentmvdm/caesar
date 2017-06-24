import { injectGlobal } from 'styled-components';

import circularLight from './fonts/circular-light.otf';
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
        src: url(${circularBold});
        font-weight: 500;
        font-style: normal;
    }

    body {
        font-family: Circular;
        font-weight: 200;
    }
`;
