// Statistics
import PropTypes from 'prop-types';
import css from 'components/statistics/statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <>
    <p className={css['title']}>Statistics</p>
    <p className={css['result']} style={{ color: 'green' }}>
      Good: {good}
    </p>
    <p className={css['result']} style={{ color: 'yellow' }}>
      Neutral: {neutral}
    </p>
    <p className={css['result']} style={{ color: 'red' }}>
      Bad: {bad}
    </p>
    <p className={css['result']}>Total: {total}</p>
    <p className={css['result']}>
      Positive feedback: {Math.round(positivePercentage)}%
    </p>
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
