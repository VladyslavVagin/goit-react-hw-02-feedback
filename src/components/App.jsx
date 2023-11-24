import { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

//================================ Increse Good Feedback function
  handleClickGood = () =>
    this.setState(prevStateGood => ({ good: prevStateGood.good + 1 }));

//================================= Increase Neutral Feedback function
  handleClickNeutral = () =>
    this.setState(prevStateNeutral => ({
      neutral: prevStateNeutral.neutral + 1,
    }));

//==================================== Increase Bad Feedback function
  handleClickBad = () =>
    this.setState(prevStateBad => ({ bad: prevStateBad.bad + 1 }));

    // Calculate TOTAL quality of feedbacks
  countTotalFeedback = () => {
    let summ = 0;
    const arrayOfFeedbacks = Object.values(this.state);
    for (let i = 0; i < arrayOfFeedbacks.length; i++) {
      summ += arrayOfFeedbacks[i];
    }
    return summ;
  };

  //===================================== Calculate Percentage of Positive Feedbacks
  countPositiveFeedbackPercentage = total => {
    const positivePercent = (this.state.good / total) * 100 || 0;
    return Math.round(positivePercent);
  };

  //=========================================== Render JSX of feedback form
  render() {
    return (
      <div>
        <h1>Please, leave feedback</h1>
        <ul className={css.buttonList}>
          <li>
            <button
              type="button"
              className={css.goodBtn}
              onClick={this.handleClickGood}
            >
              Good
            </button>
          </li>
          <li>
            <button
              type="button"
              className={css.neutralBtn}
              onClick={this.handleClickNeutral}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              type="button"
              className={css.badBtn}
              onClick={this.handleClickBad}
            >
              Bad
            </button>
          </li>
        </ul>

        <ul>
          <li>
            <p className={css.statisticText}>
              Good<span>{this.state.good}</span>
            </p>
          </li>
          <li>
            <p className={css.statisticText}>
              Neutral<span>{this.state.neutral}</span>
            </p>
          </li>
          <li>
            <p className={css.statisticText}>
              Bad<span>{this.state.bad}</span>
            </p>
          </li>
          <li>
            <p className={css.statisticText}>
              Total<span>{this.countTotalFeedback()}</span>
            </p>
          </li>
          <li>
            <p className={css.statisticText}>
              Positive feedback
              <span>
                {this.countPositiveFeedbackPercentage(
                  this.countTotalFeedback()
                )}
                %
              </span>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}
