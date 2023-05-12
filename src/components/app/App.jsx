import React, { Component } from 'react';
import Section from '../section';
import FeedbackOptions from '../feedback-options';
import Statistics from '../statistics';
import Notification from '../notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const feedbacks = Object.values(this.state);
    return feedbacks.reduce((total, feedback) => {
      return total + feedback;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    return (good / total) * 100;
  };

  handleFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  render() {
    const feedbackOptions = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <div
          style={{
            height: '20vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
            flexDirection: 'column',
          }}
        >
          React homework template
          {/* <Feedback /> */}
        </div>
        <Section
          title="feedback"
          component={
            <FeedbackOptions
              options={feedbackOptions}
              onLeaveFeedback={this.handleFeedback}
            />
          }
        />
        <Section
          title="statistics"
          component={
            totalFeedback === 0 ? (
              <Notification message={'There is no feedback'} />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback}
                positivePercentage={positiveFeedbackPercentage}
              />
            )
          }
        />
      </>
    );
  }
}
export default App;
