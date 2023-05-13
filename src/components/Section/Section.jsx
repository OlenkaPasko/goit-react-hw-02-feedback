import React from "react";
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <section>
      <p title={title} />
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};