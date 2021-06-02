import React, { memo, useCallback } from "react";

const HabitAddForm = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        formRef.current.reset();
        // this.inputRef.current.value = "";
    });

    return (
        <form ref={formRef} className="add-form" onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                className="add-input"
                type="text"
                placeholder="Habit"
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;
