import React from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const habits = (props) => {
    return (
        <div className="habits">
            <HabitAddForm onAdd={props.onAdd} />
            <ul>
                {props.habits.map((habit) => {
                    return (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={props.onIncrement}
                            onDecrement={props.onDecrement}
                            onDelete={props.onDelete}
                        />
                    );
                })}
            </ul>
            <button className="habits-reset" onClick={props.onReset}>
                Reset All
            </button>
        </div>
    );
};

export default habits;
