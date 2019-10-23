import React from 'react'

const FilterForm = props => {

    const handleChange = event => {
        props.setFilter(event.target.value)
    };

    return (
        <div>
            Find countries: <input onChange={handleChange} value={props.filter} />
        </div>
    )
};

export default FilterForm;