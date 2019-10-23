import React from 'react';
import './Notification.css';

const Notification = props => {
    if (props.notification === null) {
        return null
    }
    if (props.error) {
        return (
            <div className="error">
                {props.error}
            </div>
        )
    }
    return (
        <div className="notification">
            {props.notification}
        </div>
    )
};

export default Notification;