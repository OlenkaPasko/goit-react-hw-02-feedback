import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <ul className={css.statList}>
      <li>
        <p className={css.discrStatistic}>Good:</p>
        <span className={css.result}>{good}</span>
      </li>
      <li>
        <p className={css.discrStatistic}>Neutral:</p>
        <span className={css.result}>{neutral}</span>
      </li>
      <li>
        <p className={css.discrStatistic}>Bad:</p>
        <span className={css.result}>{bad}</span>
      </li>
      <li>
        <p className={css.discrStatistic}>Total:</p>
        <span className={css.result}>{total}</span>
      </li>
      <li>
        <p className={css.discrStatistic}>Positive feedbeack:</p>
        <span className={css.result}>{positivePercentage}%</span>
      </li>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
