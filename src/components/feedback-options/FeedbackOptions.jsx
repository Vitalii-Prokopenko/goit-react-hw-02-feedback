// Feedback options
import PropTypes from 'prop-types';
import css from 'components/feedback-options/feedback-options.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => {
      return (
        <button
          className={css['btn']}
          key={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      );
    })}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
