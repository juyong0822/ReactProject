import React, { Component } from "react";

class HabitAddForm extends Component {
    handleAdd = () => {
        const name = null;
        this.props.onAdd(name);
    };
    render() {
        return (
            <div className="habit-addform">
                <input type="text" id="new-habit"></input>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        );
    }
}

export default HabitAddForm;
