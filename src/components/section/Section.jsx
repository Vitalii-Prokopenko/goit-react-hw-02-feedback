// Section Feedback
import { Statistics } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedback-options/FeedbackOptions';
import { Notification } from 'components/notification/Notification';

import PropTypes from 'prop-types';
import css from 'components/section/section.module.css';

export const Section = ({
  title,
  optionsFeedback,
  handleFeedback,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
  stateFeedback,
}) => (
  <section className={css[title]}>
    <div className={css['wrap']}>
      <FeedbackOptions
        options={optionsFeedback}
        onLeaveFeedback={handleFeedback}
      />
    </div>
    {countTotalFeedback === 0 ? (
      <Notification message={'There is no feedback'} />
    ) : (
      <Statistics
        good={stateFeedback.good}
        neutral={stateFeedback.neutral}
        bad={stateFeedback.bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    )}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  optionsFeedback: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFeedback: PropTypes.func.isRequired,
  stateFeedback: PropTypes.objectOf(PropTypes.number).isRequired,
};
