import React from 'react';
//import PropTypes from 'prop-types';

import Section from './Section/Section';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //рендер всього контенту
  render() {
    return <Section title="Please leave feedback"></Section>;
  }
};