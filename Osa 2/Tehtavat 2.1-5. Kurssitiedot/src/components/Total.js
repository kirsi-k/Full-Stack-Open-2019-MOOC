import React from "react";
import Content from "./Content";

const Total = props => {
    const sum = props.parts.reduce((total, current) => {
        return total + current.exercises
    }, 0);

    return (
        <b>Total of {sum} exercises</b>
    )
};

export default Total;