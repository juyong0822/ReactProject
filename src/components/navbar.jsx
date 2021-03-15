import React, { Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <li className="navbar">
                <span className="navbar-leaf">
                    <i className="fas fa-leaf" />
                </span>
                <span className="navbar-name">Habit Tracker</span>
                <span className="navbar-count">{this.props.count}</span>
            </li>
        );
    }
}

export default Navbar;
