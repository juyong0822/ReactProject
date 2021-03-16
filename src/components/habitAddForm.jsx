import React, { Component } from "react";

class HabitAddForm extends Component {
    formRef = React.createRef();
    inputRef = React.createRef();

    handleSubmit = (event) => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
        // this.inputRef.current.value = "";
    };

    render() {
        return (
            <form
                ref={this.formRef}
                className="add-form"
                onSubmit={this.handleSubmit}
            >
                <input
                    ref={this.inputRef}
                    className="add-input"
                    type="text"
                    placeholder="Habit"
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
