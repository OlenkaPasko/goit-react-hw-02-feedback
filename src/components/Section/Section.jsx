import React from 'react';
import PropTypes from 'prop-types';
import { MainTitle } from 'components/MainTitle/MainTitle';

export const Section = ({ title, children }) => {
  return (
    <section>
      <MainTitle title={title} />
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
