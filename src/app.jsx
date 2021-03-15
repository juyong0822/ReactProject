import "./app.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Habits from "./components/habits";

class App extends Component {
    state = {
        id: 3,
        habits: [
            { id: 1, name: "Reading", count: 0 },
            { id: 2, name: "Running", count: 0 },
            { id: 3, name: "Coding", count: 0 },
        ],
    };

    // make callback functions
    // if button clicked, just call the functions
    handleAdd = (input) => {
        const habits = [...this.state.habits];
        const id = this.state.id + 1;
        habits.concat([{ id: id, name: input, count: 0 }]);

        this.setState({ id, habits });
    };

    handleIncrement = (habit) => {
        // make new array to change state
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count += 1;

        this.setState({ habits });
    };

    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count =
            habits[index].count === 0 ? 0 : habits[index].count - 1;

        this.setState({ habits });
    };

    handleDelete = (habit) => {
        const habits = this.state.habits.filter((item) => item.id !== habit.id);

        this.setState({ habits });
    };

    handleReset = () => {
        const state = {
            id: 3,
            totalCount: 0,
            habits: [
                { id: 1, name: "Reading", count: 0 },
                { id: 2, name: "Running", count: 0 },
                { id: 3, name: "Coding", count: 0 },
            ],
        };
        this.setState(state);
    };

    render() {
        return (
            <>
                <Navbar
                    totalCount={
                        this.state.habits.filter((item) => item.count > 0)
                            .length
                    }
                />
                <Habits
                    habits={this.state.habits}
                    onAdd={this.handleAdd}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete}
                    onReset={this.handleReset}
                />
            </>
        );
    }
}

export default App;
