// Section Feedback
import { Statistics } from 'components/statistics/Statistics';
import { FeedbackOptions } from 'components/feedback-options/FeedbackOptions';
import PropTypes from 'prop-types';
import css from 'components/section/section.module.css';

export const Section = ({
  title,
  optionsFeedback,
  handleFeedback,
  stateFeedback,
}) => (
  <section className={css[title]}>
    <div className={css['wrap']}>
      <FeedbackOptions
        options={optionsFeedback}
        onLeaveFeedback={handleFeedback}
      />
    </div>
    <Statistics
      good={stateFeedback.good}
      neutral={stateFeedback.neutral}
      bad={stateFeedback.bad}
      total={stateFeedback.total}
      positivePercentage={stateFeedback.percentage}
    />
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
  stateFeedback: PropTypes.objectOf(PropTypes.number),
};
