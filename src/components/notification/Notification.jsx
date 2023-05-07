// Notification
// import { Statistics } from 'components/statistics/Statistics';
// import { FeedbackOptions } from 'components/feedback-options/FeedbackOptions';
import PropTypes from 'prop-types';
import css from 'components/notification/notification.module.css';

export const Notification = ({ message }) => (
        <p className={css['notification']}>{message}</p>  
  );

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  };
