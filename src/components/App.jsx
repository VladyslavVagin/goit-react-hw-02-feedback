import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

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
        <FeedbackOptions
          handleClickGood={this.handleClickGood}
          handleClickNeutral={this.handleClickNeutral}
          handleClickBad={this.handleClickBad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage(
            this.countTotalFeedback()
          )}
        />
      </div>
    );
  }
}
