import React from 'react'

const FilterForm = props => {

    const handleChange = event => {
        props.setFilter(event.target.value)
    };

    return (
        <div>
            Filter shown with: <input onChange={handleChange} value={props.filter} />
        </div>
    )
};

export default FilterForm;