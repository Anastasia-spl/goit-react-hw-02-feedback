import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div className="wrapper">
    <h2 className="title">{message}</h2>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
