// Section Feedback

import PropTypes from 'prop-types';
import css from 'components/section/section.module.css';

const Section = ({ title, component }) => (
  <section className={css[title]}>{component}</section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.element.isRequired,
};
