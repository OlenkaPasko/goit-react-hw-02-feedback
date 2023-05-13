import React, { Component } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  //початковий стан
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  //countPositiveFeedbackPercentage;

  //рендер всього контенту
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(this.state)}
          //positivePercentage
        ></Statistics>
      </Section>
    );
  }
}
