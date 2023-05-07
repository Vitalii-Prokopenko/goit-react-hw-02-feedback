// Section Feedback
import Statistics from '../statistics';
import FeedbackOptions from '../feedback-options';
import Notification from '../notification';

import PropTypes from 'prop-types';
import css from 'components/section/section.module.css';

const Section = ({
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

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  optionsFeedback: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFeedback: PropTypes.func.isRequired,
  stateFeedback: PropTypes.objectOf(PropTypes.number).isRequired,
};
