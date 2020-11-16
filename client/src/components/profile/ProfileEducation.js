import React from 'react';
import PropTypes from 'prop-types';
import formatDate from '../../util/formatDate';

const ProfileEducation = ({
    education: {
        school, degree, fieldOfStudy, current, to, from, description
    } 
}) => {
    return (
        <div>
            <h3 className="text-dark">{school}</h3>
            <p>
                <span>{formatDate(from)} - {to ? formatDate(to) : 'Now'}</span>
            </p>
            <p>
                <strong>Degree:</strong>{degree}
            </p>
            <p>
                <strong>Field of Study:</strong>{fieldOfStudy}
            </p>
            <p>
                <strong>Description:</strong>{description}
            </p>
        </div>
    )
}

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
}

export default ProfileEducation
