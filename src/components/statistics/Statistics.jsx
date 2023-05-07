// Statistics
import PropTypes from 'prop-types';
import css from 'components/statistics/statistics.module.css';

export const Statistics = ({
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

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
