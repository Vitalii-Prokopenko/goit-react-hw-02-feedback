// Feedback options
import PropTypes from 'prop-types';
import css from 'components/feedback-options/feedback-options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => {
      return (
        <button
          className={css['btn']}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
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

export default FeedbackOptions;
