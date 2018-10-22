import React, { Component } from 'react';

class UserHref extends Component {
    constructor() {
        super();
        this.state = {
            link: '',
        };
    }

    updateLink = (event) => {
        this.setState({
            link: event.target.value,
        })
    }

    render() {
        const { link } = this.state;

        return (
            <div>
                <h3>User Generated Href</h3>
                <a href={link} target="_blank">{link}</a>
                <br />
                <input 
                    type="text"
                    onChange={this.updateLink}
                 />
            </div>
        );
    }
}

export default UserHref;
