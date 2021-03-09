import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Running", count: 0 },
            { id: 3, name: "Coding", count: 0 },
        ],
    };

    // make callback functions
    // if button clicked, just call the functions
    handleIncrement = (habit) => {
        console.log(JSON.stringify(habit.name));
        habit.count += 1;
    };

    handleDecrement = (habit) => {
        console.log("handleDecrement ${habit.name}");
        habit.count -= 1;
    };

    handleDelete = (habit) => {
        console.log("handleDelete ${habit.name}");
    };

    render() {
        return (
            <ul>
                {this.state.habits.map((habit) => {
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
