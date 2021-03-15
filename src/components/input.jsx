import React, { Component } from "react";

class Input extends Component {
    state = {
        input: "new-habit",
    };
    handleAdd = () => {
        this.props.onAdd(this.state.input);
    };

    render() {
        return (
            <li>
                <input type="text" id="new-habit" value="new-habit"></input>
                <button onClick={this.handleAdd}>Add</button>
            </li>
        );
    }
}

export default Input;
