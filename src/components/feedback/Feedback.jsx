// Feedback
import React, { Component } from 'react';
import { Section } from 'components/section/Section';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percentage: 0,
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        percentage: (prevState.good / prevState.total) * 100,
      };
    });
  };

  handleFeedback = event => {
    if (event.currentTarget.textContent === 'good') {
      this.setState(prevState => {
        return {
          good: prevState.good + 1,
        };
      });
    } else if (event.currentTarget.textContent === 'neutral') {
      this.setState(prevState => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
    } else {
      this.setState(prevState => {
        return {
          bad: prevState.bad + 1,
        };
      });
    }

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const feedbackOptions = ['good', 'neutral', 'bad'];

    return (
      <Section
      title="feedback"
      optionsFeedback={feedbackOptions}
      handleFeedback={this.handleFeedback}
      stateFeedback={this.state} />      
    );
  }
}

export { Feedback };
