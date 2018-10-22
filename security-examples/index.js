import React from 'react';
import { render } from 'react-dom';

import { DangerousHTML, EscapeInput, UserHref } from './components';
import './index.css';

render(
    <div>
        <hr />
        <EscapeInput />
        <hr />
        <DangerousHTML />
        <hr />
        <UserHref />
    </div>,
    document.getElementById('root')
);
