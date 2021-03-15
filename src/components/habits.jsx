import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    // make callback functions
    // if button clicked, just call the functions
    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    render() {
        return (
            <ul>
                {this.props.habits.map((habit) => {
                    return (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default Habits;
