import React from 'react';
import PropTypes from 'prop-types';
import { BtnFeedback } from 'components/BtnFeedback/BtnFeedback';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <li key={option}>
            <BtnFeedback
              key={option}
              type="button"
              value={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </BtnFeedback>
          </li>
        );
      })}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};