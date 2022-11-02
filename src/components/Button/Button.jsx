import s from './Button.module.css';
import PropTypes from 'prop-types';
const Button = ({ updatePage }) => (
  <button onClick={updatePage} className={s.button}>
    Load more
  </button>
);
Button.propTypes = {
  updatePage: PropTypes.func.isRequired,
};
export default Button;
