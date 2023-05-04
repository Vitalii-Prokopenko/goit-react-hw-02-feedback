// Feedback
import React from 'react';
// import PropTypes from 'prop-types';
import css from 'components/feedback/feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodFeedback = () => {   
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutralFeedback = () => {    
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div className={css["feedback"]}>
        <div className={css["wrap"]}>
        <button className={css["btn"]} type="button" onClick={this.handleGoodFeedback}>Good</button>
        <button className={css["btn"]} type="button" onClick={this.handleNeutralFeedback}>Neutral</button>
        <button className={css["btn"]} type="button" onClick={this.handleBadFeedback}>Bad</button>
        </div>
        <p className={css["title"]}>Statistics</p>
        <p className={css["result"]} style={{ color: 'green' }}>Good: {this.state.good}</p>
        <p className={css["result"]} style={{ color: 'yellow' }}>Neutral: {this.state.neutral}</p>
        <p className={css["result"]} style={{ color: 'red' }}>Bad: {this.state.bad}</p>
      </div>
    );
  }
};

export {Feedback};

// export const Feedback = ({ title, stats }) => (
//   <section className={css["statistics__wrap"]}>
//     {title && <h2 className={css["statistics__title"]}>{title}</h2>}

//     <ul className={css["statistics__list"]}>
//       {stats.map(stat => (
//         <li key={stat.id} className={css["statistics__item"]}>
//           <span className={css["statistics__label"]}>{stat.label}</span>
//           <span className={css["statistics__percentage"]}>{stat.percentage}%</span>
//         </li>
//       ))}
//     </ul>
//   </section>
// );

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };
