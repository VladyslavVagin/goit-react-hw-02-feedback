import React from 'react'
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({handleClickGood, handleClickNeutral, handleClickBad}) => {
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
            <button
              type="button"
              className={css.badBtn}
              onClick={handleClickBad}
            >
              Bad
            </button>
          </li>
        </ul>
    </div>
  )
}

export default FeedbackOptions