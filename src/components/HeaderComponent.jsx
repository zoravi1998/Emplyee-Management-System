import React, { Component } from 'react';
class headerComponent extends Component {
    render() {
        var base="https://ems-21.herokuapp.com/"
        console.log(base);
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href={base}
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
