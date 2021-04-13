import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  btn: {
    textTransform: 'capitalize',
    '&:not(:last-of-type)': {
      marginRight: 30,
    },
  },
});

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  const { btn } = useStyles();
  return (
    <div className="wrapper">
      {Object.keys(options).map(option => (
        <button
          key={option}
          className={btn}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape(),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
