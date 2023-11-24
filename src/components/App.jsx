import { Component } from 'react';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => this.setState(prevStateGood => ({good: prevStateGood.good + 1}))
  handleClickNeutral = () => this.setState(prevStateNeutral => ({neutral: prevStateNeutral.neutral + 1}))
  handleClickBad = () => this.setState(prevStateBad => ({bad: prevStateBad.bad + 1}))

  countTotalFeedback = () => {
    let summ = 0;
    const arrayOfFeedbacks = Object.values(this.state); 
    for (let i = 0; i < arrayOfFeedbacks.length; i++) {
      summ += arrayOfFeedbacks[i];
    }
    return summ;
  }


  render() {
    return (
      <div>
        <h1>Please, leave feedback</h1>
        <ul className={css.buttonList}> 
          <li>
            <button type="button" className={css.goodBtn} onClick={this.handleClickGood}>
              Good
            </button>
          </li>
          <li>
            <button type="button" className={css.neutralBtn} onClick={this.handleClickNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" className={css.badBtn} onClick={this.handleClickBad}>
              Bad
            </button>
          </li>
        </ul>

        <ul>
          <li>
            <p className={css.statisticText}>Good<span>{this.state.good}</span></p>
          </li>
          <li>
            <p className={css.statisticText}>Neutral<span>{this.state.neutral}</span></p>
          </li>
          <li>
            <p className={css.statisticText}>Bad<span>{this.state.bad}</span></p>
          </li>
          <li>
            <p className={css.statisticText}>Total<span>{this.countTotalFeedback()}</span></p>
          </li>
          <li>
            <p className={css.statisticText} onClick={this.countTotalFeedback}>Positive feedback<span></span></p>
          </li>
        </ul>
      </div>
    );
  }
}
