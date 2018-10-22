import React from 'react';
import { render } from 'react-dom';

import { DangerousHTML, EscapeInput, Eval, UserHref } from './components';
import './index.css';

render(
    <div>
        <hr />
        <EscapeInput />
        <hr />
        <DangerousHTML />
        <hr />
        <UserHref />
        <hr />
        <Eval />
    </div>,
    document.getElementById('root')
);
