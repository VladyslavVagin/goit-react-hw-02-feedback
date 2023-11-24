import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  handleClickGood,
  handleClickNeutral,
  handleClickBad,
}) => {
  return (
    <div>
      <ul className={css.buttonList}>
        <li>
          <button
            type="button"
            className={css.goodBtn}
            onClick={handleClickGood}
          >
            Good
          </button>
        </li>
        <li>
          <button
            type="button"
            className={css.neutralBtn}
            onClick={handleClickNeutral}
          >
            Neutral
          </button>
        </li>
        <li>
          <button type="button" className={css.badBtn} onClick={handleClickBad}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleClickGood: PropTypes.func.isRequired,
  handleClickNeutral: PropTypes.func.isRequired,
  handleClickBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
