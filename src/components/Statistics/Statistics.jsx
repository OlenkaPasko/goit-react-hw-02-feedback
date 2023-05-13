import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentag,
}) => {
  return (
    <ul className="stat-list">
      <li>
        <p className="discr-statistic">Good:</p>
        <span className="result">{good}</span>
      </li>
      <li>
        <p className="discr-statistic">Neutral:</p>
        <span className="result">{neutral}</span>
      </li>
      <li>
        <p className="discr-statistic">Bad:</p>
        <span className="result">{bad}</span>
      </li>
      <li>
        <p className="discr-statistic">Total:</p>
        <span className="result">{total}</span>
      </li>
      <li>
        <p className="discr-statistic">Positive feedbeack:</p>
        <span className="result">{positivePercentag}%</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};