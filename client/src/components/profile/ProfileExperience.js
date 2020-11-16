import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../util/formatDate';

const ProfileExperience = ({
    experience: {
        company, title, location, current, to, from, description
    } 
}) => {
    return (
        <div>
            <h3 className="text-dark">{company}</h3>
            <p>
                <span>{formatDate(from)} - {to ? formatDate(to) : 'Now'}</span>
            </p>
            <p>
                <strong>Position:</strong>{title}
            </p>
            <p>
                <strong>Description:</strong>{description}
            </p>
        </div>
    )
}

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired
}

export default ProfileExperience
