import React from "react";
import PropTypes from 'prop-types';

export const Section = props => {
    return (
        <div className="section">
            <h2 className="title">{props.title}</h2>
                {props.children}
            </div>
    );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};