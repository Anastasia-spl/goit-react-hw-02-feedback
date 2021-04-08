import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    listStyle: 'none',
  },
  item: {
    '&:not(:last-of-type)': {
      marginBottom: 15,
    },
  },
});

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const { list, item } = useStyles();
  return (
    <div className="results-wrapper">
      <ul className={list}>
        <li className={item}>Good: {good}</li>
        <li className={item}>Neutral: {neutral}</li>
        <li className={item}>Bad: {bad}</li>
      </ul>
      <p className="totalFeedback">Total: {total}</p>
      <p className="positiveFeedback">
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
