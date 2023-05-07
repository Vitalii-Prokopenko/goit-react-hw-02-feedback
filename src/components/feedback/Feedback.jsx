// Feedback
import React, { Component } from 'react';
import Section from '../section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,    
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
        return (good + neutral + bad);    
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return ((good / (good + neutral + bad)) * 100);    
  };

  handleFeedback = event => {
    const typeOfFeedback = event.currentTarget.textContent;
    this.setState(prevState => {
      return {
        [typeOfFeedback]: prevState[typeOfFeedback] + 1,
      };
    });    
  };

  render() {
    const feedbackOptions = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Section
        title="feedback"
        optionsFeedback={feedbackOptions}
        handleFeedback={this.handleFeedback}
        countTotalFeedback={totalFeedback}
        countPositiveFeedbackPercentage={positiveFeedbackPercentage}
        stateFeedback={this.state}
      />
    );
  }
}

export default Feedback;
