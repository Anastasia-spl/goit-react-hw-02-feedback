import { Component } from 'react';
import Container from './components/Container';
import Section from './components/Section'
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: (prevState[option] += 1) }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => (acc += value), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };

  render() {
    const { good, bad, neutral } = this.state;
    const isAnyFeedback = !!this.countTotalFeedback();
    return (
    <div className="App">
        <Container>
          <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {isAnyFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
        </Container>
    </div>
  );
  }
}
export default App;
