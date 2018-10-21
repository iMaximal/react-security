import React, { Component } from 'react';

const inputString = "<input type='text' defaultValue='rendered' />";

class EscapeInput extends Component {
    render() {
        return (
            <div>
                <h3>Safe React Input</h3>
                <div>{inputString}</div>
            </div>
        );
    }
}

export default EscapeInput;
