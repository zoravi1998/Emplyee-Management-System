import React, { Component } from 'react';

class headerComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="http://localhost:3000"
                            className="navbar-brand">
                                Employee Management System App
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default headerComponent;
