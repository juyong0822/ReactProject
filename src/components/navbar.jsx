import React from "react";

const Navbar = (props) => {
    return (
        <header className="navbar">
            <i className="navbar-logo fas fa-leaf" />
            <span className="navbar-name">Habit Tracker</span>
            <span className="navbar-count">{props.totalCount}</span>
        </header>
    );
};

export default Navbar;
